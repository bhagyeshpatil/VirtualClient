// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace VirtualClient.Actions
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.IO.Abstractions;
    using System.Linq;
    using System.Text;
    using System.Threading;
    using System.Threading.Tasks;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Logging;
    using Polly;
    using VirtualClient.Common;
    using VirtualClient.Common.Extensions;
    using VirtualClient.Common.Telemetry;
    using VirtualClient.Contracts;
    using VirtualClient.Contracts.Metadata;

    /// <summary>
    /// The Generic Script executor for Powershell, Bash etc scripts.
    /// </summary>
    public class ScriptExecutor : VirtualClientComponent
    {
        private IFileSystem fileSystem;
        private IPackageManager packageManager;
        private ISystemManagement systemManagement;

        /// <summary>
        /// Constructor for <see cref="ScriptExecutor"/>
        /// </summary>
        /// <param name="dependencies">Provides required dependencies to the component.</param>
        /// <param name="parameters">Parameters defined in the profile or supplied on the command line.</param>
        public ScriptExecutor(IServiceCollection dependencies, IDictionary<string, IConvertible> parameters)
             : base(dependencies, parameters)
        {
            this.systemManagement = this.Dependencies.GetService<ISystemManagement>();
            this.packageManager = this.systemManagement.PackageManager;
            this.fileSystem = this.systemManagement.FileSystem;
        }

        /// <summary>
        /// The commandline arguments to be used with the Script executable
        /// </summary>
        public string CommandLine
        {
            get
            {
                return this.Parameters.GetValue<string>(nameof(this.CommandLine));
            }
        }

        /// <summary>
        /// The relative Script Path to be used to initiate the script
        /// </summary>
        public string ScriptPath
        {
            get
            {
                return this.Parameters.GetValue<string>(nameof(this.ScriptPath));
            }
        }

        /// <summary>
        /// The Regex Based, semi-colon separated relative log file/Folder Paths
        /// </summary>
        public string LogPaths
        {
            get
            {
                return this.Parameters.GetValue<string>(nameof(this.LogPaths));
            }
        }

        /// <summary>
        /// The ToolName for better logging and metadata
        /// </summary>
        public string ToolName
        {
            get
            {
                return this.Parameters.GetValue<string>(nameof(this.ToolName));
            }
        }

        /// <summary>
        /// The full path to the script executable.
        /// </summary>
        public string ExecutablePath { get; set; }

        /// <summary>
        /// A retry policy to apply to file access/move operations.
        /// </summary>
        public IAsyncPolicy FileOperationsRetryPolicy { get; set; } = RetryPolicies.FileOperations;

        /// <summary>
        /// The path to the workload package.
        /// </summary>
        protected DependencyPath WorkloadPackage { get; set; }

        /// <summary>
        /// Initializes the environment for execution of the provided script.
        /// </summary>
        protected override async Task InitializeAsync(EventContext telemetryContext, CancellationToken cancellationToken)
        {
            await this.EvaluateParametersAsync(cancellationToken);

            this.WorkloadPackage = await this.GetPlatformSpecificPackageAsync(this.PackageName, cancellationToken);

            this.ExecutablePath = this.Combine(this.WorkloadPackage.Path, this.ScriptPath);

            await this.systemManagement.MakeFileExecutableAsync(this.ExecutablePath, this.Platform, cancellationToken);

            if (!this.fileSystem.File.Exists(this.ExecutablePath))
            {
                throw new DependencyException(
                    $"The expected workload binary/executable was not found in the '{this.PackageName}' package. The script cannot be executed " +
                    $"successfully without this binary/executable. Check that the workload package was installed successfully and that the executable " +
                    $"exists in the path expected '{this.ExecutablePath}'.",
                    ErrorReason.DependencyNotFound);
            }
        }

        /// <summary>
        /// Executes the workload.
        /// </summary>
        protected override async Task ExecuteAsync(EventContext telemetryContext, CancellationToken cancellationToken)
        {
            using (BackgroundOperations profiling = BackgroundOperations.BeginProfiling(this, cancellationToken))
            {
                string command = this.ExecutablePath;
                string commandArguments = SensitiveData.ObscureSecrets(this.CommandLine);

                telemetryContext
                    .AddContext(nameof(command), command)
                    .AddContext(nameof(commandArguments), commandArguments);

                using (IProcessProxy process = await this.ExecuteCommandAsync(command, commandArguments, this.WorkloadPackage.Path, telemetryContext, cancellationToken, false))
                {
                    if (!cancellationToken.IsCancellationRequested)
                    {
                        await this.LogProcessDetailsAsync(process, telemetryContext, this.ToolName, logToFile: true);
                        process.ThrowIfWorkloadFailed();

                        await this.CaptureMetricsAsync(process, telemetryContext, cancellationToken);
                        await this.CaptureLogsAsync(cancellationToken);
                    }
                }
            }
        }

        /// <summary>
        /// Captures the workload logs and the Workload metrics.
        /// </summary>
        protected async Task CaptureMetricsAsync(IProcessProxy process, EventContext telemetryContext, CancellationToken cancellationToken)
        {
            if (!cancellationToken.IsCancellationRequested)
            {
                this.MetadataContract.AddForScenario(
                    this.Scenario,
                    process.FullCommand());

                this.MetadataContract.Apply(telemetryContext);

                string metricsFilePath = this.Combine(this.WorkloadPackage.Path, "test-metrics.json");
                telemetryContext.AddContext(nameof(metricsFilePath), metricsFilePath);
                bool metricsFileFound = false;

                try
                {
                    if (this.fileSystem.File.Exists(metricsFilePath))
                    {
                        metricsFileFound = true;
                        string results = await this.fileSystem.File.ReadAllTextAsync(metricsFilePath);

                        JsonMetricsParser parser = new JsonMetricsParser(results, this.Logger, telemetryContext);
                        IList<Metric> workloadMetrics = parser.Parse();

                        this.Logger.LogMetrics(
                            this.ToolName,
                            this.MetricScenario ?? this.Scenario,
                            process.StartTime,
                            process.ExitTime,
                            workloadMetrics,
                            null,
                            process.FullCommand(),
                            this.Tags,
                            telemetryContext);
                    }
                }
                finally
                {
                    telemetryContext.AddContext(nameof(metricsFileFound), metricsFileFound);
                }
            }
        }

        /// <summary>
        /// Captures the workload logs based on LogFiles parameter of ScriptExecutor.
        /// All the files inmatching sub-folders and all the matching files along with metrics file will be moved to the 
        /// central Virtual Client logs directory. If the cintent store (--cs) argument is used with Virtual Client, then
        /// the captured logs will also be uploaded to blob content store.
        /// </summary>
        protected async Task CaptureLogsAsync(CancellationToken cancellationToken)
        {
            // e.g.
            // /logs/anytool/executecustomscript1
            // /logs/anytool/executecustomscript2
            string destinitionLogsDir = this.PlatformSpecifics.GetLogsPath(this.ToolName.ToLower(), (this.Scenario ?? "customscript").ToLower());
            if (!this.fileSystem.Directory.Exists(destinitionLogsDir))
            {
                this.fileSystem.Directory.CreateDirectory(destinitionLogsDir);
            }

            foreach (string logPath in this.LogPaths.Split(";"))
            {
                string fullLogPath = this.Combine(this.WorkloadPackage.Path, logPath);

                // Check for Matching Sub-Directories 
                if (this.fileSystem.Directory.Exists(fullLogPath))
                {
                    foreach (string logFilePath in this.fileSystem.Directory.GetFiles(fullLogPath, "*", SearchOption.AllDirectories))
                    {
                        this.RequestUploadAndMoveToLogsDirectory(logFilePath, destinitionLogsDir, cancellationToken);
                    }
                }

                // Check for Matching FileNames
                foreach (string logFilePath in this.fileSystem.Directory.GetFiles(this.WorkloadPackage.Path, logPath, SearchOption.AllDirectories))
                {
                    await this.RequestUploadAndMoveToLogsDirectory(logFilePath, destinitionLogsDir, cancellationToken);
                }
            }

            // Move test-metrics.json file if that exists
            string metricsFilePath = this.Combine(this.WorkloadPackage.Path, "test-metrics.json");
            if (this.fileSystem.File.Exists(metricsFilePath))
            {
                await this.RequestUploadAndMoveToLogsDirectory(metricsFilePath, destinitionLogsDir, cancellationToken);
            }
        }

        /// <summary>
        /// Requests a file upload.
        /// </summary>
        protected Task RequestUpload(string logPath)
        {
            FileUploadDescriptor descriptor = this.CreateFileUploadDescriptor(
                new FileContext(
                    this.fileSystem.FileInfo.New(logPath),
                    HttpContentType.PlainText,
                    Encoding.UTF8.WebName,
                    this.ExperimentId,
                    this.AgentId,
                    this.ToolName,
                    this.Scenario,
                    null,
                    this.Roles?.FirstOrDefault()));

            return this.RequestFileUploadAsync(descriptor);
        }

        /// <summary>
        /// Move the log files to central logs directory and Upload to Content Store
        /// </summary>
        protected async Task RequestUploadAndMoveToLogsDirectory(string sourcePath, string destinitionDirectory, CancellationToken cancellationToken)
        {
            if (this.TryGetContentStoreManager(out IBlobManager blobManager))
            {
                await this.RequestUpload(sourcePath);
            }

            await (this.FileOperationsRetryPolicy ?? Policy.NoOpAsync()).ExecuteAsync(() =>
            {
                // e.g.
                // /logs/anytool/executecustomscript1/2023-06-27T21-13-12-51001Z-CustomScript.sh
                // /logs/anytool/executecustomscript1/2023-06-27T21-15-36-12018Z-CustomScript.sh
                string fileName = Path.GetFileName(sourcePath);
                string destinitionPath = this.Combine(destinitionDirectory, BlobDescriptor.SanitizeBlobPath($"{DateTime.UtcNow.ToString("o").Replace('.', '-')}-{fileName}"));
                this.fileSystem.File.Move(sourcePath, destinitionPath, true);

                return Task.CompletedTask;
            });
        }
    }
}