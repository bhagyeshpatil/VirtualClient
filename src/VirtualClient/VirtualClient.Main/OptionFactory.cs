// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace VirtualClient
{
    using System;
    using System.Collections.Generic;
    using System.CommandLine;
    using System.CommandLine.Parsing;
    using System.Diagnostics.CodeAnalysis;
    using System.IO;
    using System.IO.Abstractions;
    using System.Linq;
    using System.Net;
    using System.Text.RegularExpressions;
    using Microsoft.CodeAnalysis;
    using Microsoft.Extensions.Logging;
    using VirtualClient.Common.Extensions;
    using VirtualClient.Contracts;
    using VirtualClient.Identity;

    /// <summary>
    /// Provides a factory for the creation of Command Options used by application command line operations.
    /// </summary>
    [SuppressMessage("StyleCop.CSharp.ReadabilityRules", "SA1118:Parameter should not span multiple lines", Justification = "Allow for longer description text.")]
    public static class OptionFactory
    {
        private static readonly ICertificateManager defaultCertificateManager = new CertificateManager();
        private static readonly IFileSystem defaultFileSystem = new FileSystem();

        /// <summary>
        /// Command line option defines the ID of the agent to use with telemetry data reported from the system.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateAgentIdOption(bool required = false, object defaultValue = null)
        {
            Option<string> option = new Option<string>(new string[] { "--agent-id", "--agentId", "--agentid", "--agent", "--client-id", "--clientId", "--clientid", "--client", "--a" })
            {
                Name = "AgentId",
                Description = "A name/identifier to describe the instance of the application (the agent) that will be included with all " +
                    "telemetry/data emitted during operations.",
                ArgumentHelpName = "id",
                AllowMultipleArgumentsPerToken = false
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines the port on which the local self-hosted REST API service
        /// should list for HTTP traffic.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateApiPortOption(bool required = true, object defaultValue = null)
        {
            Option<IDictionary<string, int>> option = new Option<IDictionary<string, int>>(
                new string[] { "--api-port", "--port" },
                new ParseArgument<IDictionary<string, int>>(result =>
                {
                    IDictionary<string, int> apiPorts = new Dictionary<string, int>();
                    string portsSpecified = result.Tokens.First().Value;
                    if (int.TryParse(portsSpecified, out int singlePort))
                    {
                        apiPorts.Add(nameof(ApiClientManager.DefaultApiPort), singlePort);
                    }
                    else
                    {
                        string[] portsByRole = portsSpecified.Split(",", StringSplitOptions.RemoveEmptyEntries);
                        foreach (string definition in portsByRole)
                        {
                            string[] parts = definition.Split("/", StringSplitOptions.RemoveEmptyEntries);
                            if (parts?.Length != 2 || !int.TryParse(parts[0].Trim(), out int rolePort))
                            {
                                throw new ArgumentException(
                                    "Invalid API port value. The API port can be a single integer value (e.g. 4500) or may define role-specific ports " +
                                    "delimited by a comma using the format '{Port}/{Role}' (e.g. 4500/Client,4501/Server).");
                            }

                            apiPorts.Add(parts[1].Trim(), rolePort);
                        }
                    }

                    return apiPorts;
                }))
            {
                Name = "ApiPorts",
                Description = "The port on which the local self-hosted REST API service should list for HTTP traffic. Ports for specific profile roles may be delimited by comma using the format '{Port}/{Role}' (e.g. 4500/Client,4501/Server).",
                ArgumentHelpName = "port",
                AllowMultipleArgumentsPerToken = false
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option indicates a clean/reset should be performed and defines the targets
        /// (e.g. logs, state, packages, all).
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateCleanOption(bool required = true, object defaultValue = null)
        {
            Option<IList<string>> option = new Option<IList<string>>(
                new string[] { "--clean" },
                new ParseArgument<IList<string>>(result => OptionFactory.ParseDelimitedValues(result)))
            {
                Name = "CleanTargets",
                Description = "Indicates a clean/reset should be performed and defines the targets. Valid targets are: logs, state, packages, all. Multiple targets can be defined comma-delimited (e.g. logs,state,packages).",
                ArgumentHelpName = "targets",
                AllowMultipleArgumentsPerToken = false,
                Arity = new ArgumentArity(0, 10000)
            };

            option.AddValidator(result =>
            {
                if (result.Tokens?.Any() == true)
                {
                    IList<string> targets = OptionFactory.ParseDelimitedValues(result.Tokens[0].Value);

                    IList<string> validTargets = new List<string>
                    {
                        CleanTargets.All,
                        CleanTargets.Logs,
                        CleanTargets.Packages,
                        CleanTargets.State
                    };

                    IEnumerable<string> otherTargets = targets.Except(validTargets);
                    if (otherTargets?.Any() == true)
                    {
                        throw new ArgumentException(
                            $"Unsupported clean targets: {string.Join(", ", otherTargets)}. Valid targets include the following: {string.Join(", ", validTargets)}");
                    }
                }

                return string.Empty;
            });

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines a template for the virtual folder structure to use when uploading 
        /// files to a target storage account (e.g. /{experimentId}/{agentId}/{toolName}/{role}/{scenario}).
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateContentPathTemplateOption(bool required = true, object defaultValue = null)
        {
            Option<string> option = new Option<string>(new string[] { "--content-path-template", "--contentPathTemplate", "--contentpathtemplate", "--content-path", "--contentPath", "--contentpath", "--cp" })
            {
                Name = "ContentPathTemplate",
                Description = "A template defining the virtual folder structure to use when uploading files to a target storage account. Default = /{experimentId}/{agentId}/{toolName}/{role}/{scenario}.",
                ArgumentHelpName = "template",
                AllowMultipleArgumentsPerToken = false
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines a dependency store to add to the storage options
        /// for the Virtual Client for uploading content/files.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        /// <param name="certificateManager">Optional parameter defines the certificate manager to use for accessing certificates on the system.</param>
        /// <param name="fileSystem">Optional parameter to use to validate file system paths.</param>
        public static Option CreateContentStoreOption(bool required = true, object defaultValue = null, ICertificateManager certificateManager = null, IFileSystem fileSystem = null)
        {
            // Note:
            // We will be adding support for other cloud stores in the future (e.g. AWS, Google). The logic on the command
            // line will handle this by creating different DependencyStore definitions to represent the various stores that 
            // are supported.
            Option<DependencyStore> option = new Option<DependencyStore>(
                new string[] { "--content-store", "--contentStore", "--contentstore", "--content", "--cs" },
                new ParseArgument<DependencyStore>(result => OptionFactory.ParseBlobStore(
                    result,
                    DependencyStore.Content,
                    certificateManager ?? OptionFactory.defaultCertificateManager,
                    fileSystem ?? OptionFactory.defaultFileSystem)))
            {
                Name = "ContentStore",
                Description = "An endpoint URI or connection string to the Storage Account to which content logs/files can be uploaded.",
                ArgumentHelpName = "connectionstring|sas",
                AllowMultipleArgumentsPerToken = false
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines whether debug output should be emitted on the console/terminal.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateDebugFlag(bool required = true, object defaultValue = null)
        {
            Option<bool> option = new Option<bool>(new string[] { "--debug", "--verbose" })
            {
                Name = "Debug",
                Description = "Flag indicates that verbose output should be emitted to the console/terminal.",
                ArgumentHelpName = "Flag",
                AllowMultipleArgumentsPerToken = false,
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line flag indicates only the profile dependencies should be evaluated/installed.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateDependenciesFlag(bool required = true, object defaultValue = null)
        {
            Option<bool> option = new Option<bool>(new string[] { "--dependencies" })
            {
                Name = "InstallDependencies",
                Description = "Flag indicates that only the profile dependencies should be evaluated/installed (i.e. no actions or monitors).",
                ArgumentHelpName = "Flag",
                AllowMultipleArgumentsPerToken = false
            };

            option.AddValidator(result =>
            {
                OptionFactory.ThrowIfOptionExists(
                    result,
                    "Iterations",
                    "Invalid usage. The profile iterations option cannot be used when a dependencies flag is provided.");

                OptionFactory.ThrowIfOptionExists(
                    result,
                    "Timeout",
                    "Invalid usage. The timeout option cannot be used when a dependencies flag is provided.");

                return string.Empty;
            });

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// An option to set an EventHub connection string.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        /// <param name="certificateManager">Optional parameter defines the certificate manager to use for accessing certificates on the system.</param>
        public static Option CreateEventHubStoreOption(bool required = false, object defaultValue = null, ICertificateManager certificateManager = null)
        {
            Option<DependencyEventHubStore> option = new Option<DependencyEventHubStore>(
                new string[] { "--event-hub", "--eventHub", "--eventhub", "--eh", "--eventHubConnectionString" },
                new ParseArgument<DependencyEventHubStore>(result => OptionFactory.ParseEventHubStore(
                    result,
                    DependencyStore.Telemetry,
                    certificateManager ?? OptionFactory.defaultCertificateManager)))
            {
                Name = "EventHubStore",
                Description = "An endpoint URI or connection string/access policy defining an Event Hub to which telemetry should be sent/uploaded.",
                ArgumentHelpName = "connectionstring",
                AllowMultipleArgumentsPerToken = false
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines the duration/timeout to wait for telemetry to be flushed.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateExitWaitOption(bool required = true, object defaultValue = null)
        {
            Option<TimeSpan> option = new Option<TimeSpan>(
                new string[] { "--exit-wait", "--flush-wait", "--wt" },
                new ParseArgument<TimeSpan>(arg => OptionFactory.ParseTimeSpan(arg)))
            {
                Name = "ExitWait",
                Description = "An explicit timeout to apply before exiting to allow all actions and monitors to complete and for telemetry to be flushed (i.e. to prevent loss). " +
                    "This can be a valid timespan (e.g. 01.00:00:00) or a simple numeric value representing total minutes (e.g. 1440). ",
                ArgumentHelpName = "timespan",
                AllowMultipleArgumentsPerToken = false
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines the ID of the experiment.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateExperimentIdOption(bool required = false, object defaultValue = null)
        {
            Option<string> option = new Option<string>(new string[] { "--experiment-id", "--experimentId", "--experimentid", "--experiment", "--e" })
            {
                Name = "ExperimentId",
                Description = "An identifier that will be used to correlate all operations with telemetry/data emitted by the application. If not defined, a random identifier will be used.",
                ArgumentHelpName = "id",
                AllowMultipleArgumentsPerToken = false
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines whether VC should fail fast on errors.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateFailFastFlag(bool required = true, object defaultValue = null)
        {
            Option<bool> option = new Option<bool>(new string[] { "--fail-fast", "--ff" })
            {
                Name = "FailFast",
                Description = "Flag indicates that the application should fail fast and exit immediately on any errors experienced regardless of severity.",
                ArgumentHelpName = "Flag",
                AllowMultipleArgumentsPerToken = false,
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// An option to set IP address of a Virtual Client API to target/monitor.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateIPAddressOption(bool required = true, object defaultValue = null)
        {
            Option<string> option = new Option<string>(new string[] { "--ip-address", "--ipAddress", "--ipaddress", "--ip" })
            {
                Name = "IPAddress",
                Description = "The IP address of a remote/target application API instance to monitor.",
                ArgumentHelpName = "address",
                AllowMultipleArgumentsPerToken = false
            };

            option.AddValidator(new ValidateSymbol<OptionResult>(result =>
            {
                Token parsedResult = result.Tokens.First();
                if (!IPAddress.TryParse(parsedResult.Value, out IPAddress address))
                {
                    throw new ArgumentException(
                        $"Invalid command line usage. The IP address provided is not a valid format.");
                }

                return string.Empty;
            }));

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines the number of rounds/iterations to run the profile actions.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateIterationsOption(bool required = false, object defaultValue = null)
        {
            Option<ProfileTiming> option = new Option<ProfileTiming>(
                new string[] { "--iterations", "--i" },
                new ParseArgument<ProfileTiming>(arg => OptionFactory.ParseProfileIterations(arg)))
            {
                Name = "Iterations",
                Description = "The number of full iterations/rounds to execute all profile actions before exiting. This option cannot be used with a timeout/duration option.",
                ArgumentHelpName = "count",
                AllowMultipleArgumentsPerToken = false
            };

            option.AddValidator(result =>
            {
                OptionFactory.ThrowIfOptionExists(
                    result,
                    "Timeout",
                    "Invalid usage. The profile iterations option cannot be used at the same time as the timeout option.");

                return string.Empty;
            });

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines the path to the environment layout file.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateLayoutPathOption(bool required = true, object defaultValue = null)
        {
            Option<string> option = new Option<string>(new string[] { "--layout-path", "--layout", "--layoutPath", "--layoutpath", "--lp" })
            {
                Name = "LayoutPath",
                Description = "The path to the environment layout .json file required for client/server operations. The contents of this " +
                    "file are used by the self-hosted API service for example to enable individual instances of the application running on different " +
                    "systems to synchronize with each other.",
                ArgumentHelpName = "path",
                AllowMultipleArgumentsPerToken = false
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option indicates the logging level for VC telemetry output. These levels correspond directly to the .NET LogLevel
        /// enumeration (0 = Trace, 1 = Debug, 2 = Information, 3 = Warning, 4 = Error, 5 = Critical).
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateLogLevelOption(bool required = true, object defaultValue = null)
        {
            Option<LogLevel> option = new Option<LogLevel>(new string[] { "--log-level", "--ll" })
            {
                Name = "LoggingLevel",
                Description = "indicates the logging level for telemetry output (0 = Trace, 1 = Debug, 2 = Information, 3 = Warning, 4 = Error, 5 = Critical).",
                ArgumentHelpName = "level",
                AllowMultipleArgumentsPerToken = false,
            };

            option.AddValidator(result =>
            {
                if (result.Tokens?.Any() == true)
                {
                    string value = result.Tokens.First().Value;
                    if (!Enum.TryParse<LogLevel>(value, out LogLevel level) || !Enum.IsDefined<LogLevel>(level))
                    {
                        throw new ArgumentException(
                            $"The value '{value}' is not a valid log level. Valid log levels include: " +
                            $"{string.Join(", ", Enum.GetValues<LogLevel>().Where(l => l != LogLevel.None).Select(l => $"{l} ({(int)l})"))}");
                    }
                }

                return string.Empty;
            });

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines the retention period to preserve log files on the system. When used on the
        /// command line, log files older than the retention period will be cleaned up.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateLogRetentionOption(bool required = true, object defaultValue = null)
        {
            Option<TimeSpan> option = new Option<TimeSpan>(
                new string[] { "--log-retention", "--lr" },
                new ParseArgument<TimeSpan>(arg => OptionFactory.ParseTimeSpan(arg)))
            {
                Name = "LogRetention",
                Description =
                    "Defines the retention period to preserve log files on the system. Log files older than the retention period will be deleted." +
                    "This can be a valid timespan (e.g. 10.00:00:00) or a simple numeric value representing total minutes (e.g. 14400).",
                ArgumentHelpName = "timespan",
                AllowMultipleArgumentsPerToken = false
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option indicates that the output of processes should be logged to 
        /// files in the logs directory.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateLogToFileFlag(bool required = true, object defaultValue = null)
        {
            Option<bool> option = new Option<bool>(new string[] { "--log-to-file", "--ltf" })
            {
                Name = "LogToFile",
                Description = "Flag indicates that the output of processes should be logged to files in the logs directory.",
                ArgumentHelpName = "Flag",
                AllowMultipleArgumentsPerToken = false,
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines metadata properties (key/value pairs) supplied to
        /// the application.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateMetadataOption(bool required = true, object defaultValue = null)
        {
            Option<IDictionary<string, IConvertible>> option = new Option<IDictionary<string, IConvertible>>(
                new string[] { "--metadata", "--mt" },
                new ParseArgument<IDictionary<string, IConvertible>>(arg => OptionFactory.ParseDelimitedKeyValuePairs(arg)))
            {
                Name = "Metadata",
                Description = "Metadata to include with all telemetry/data output supplied as key value pairs. Each key value pair should be separated by \",,,\" delimiters " +
                    "(e.g. property1=true,,,property2=123).",
                ArgumentHelpName = "p1=v1,,,p2=v2...",
                AllowMultipleArgumentsPerToken = true
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// An option to set port on which the Virtual Client API will run.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateMonitorFlag(bool required = true, object defaultValue = null)
        {
            Option<bool> option = new Option<bool>(new string[] { "--monitor", "--mon" })
            {
                Name = "Monitor",
                Description = "Indicates the Virtual Client should monitor itself or another instance via the API for heartbeats (e.g. online, offline). " +
                    "If an IP address is not provided, the local self-hosted API will be monitored. Otherwise the remote API at the IP address provided will be monitored. " +
                    "Note that this is used primarily for manually debugging API connectivity issues.",
                ArgumentHelpName = "Flag",
                AllowMultipleArgumentsPerToken = false
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines the logical name of a package (e.g. any.package.1.0.0.zip -> any.package).
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateNameOption(bool required = false, object defaultValue = null)
        {
            Option<string> option = new Option<string>(new string[] { "--name", "--n" })
            {
                Name = "Name",
                Description = "The logical name of a package as it should be registered on the system (e.g. anypackage.1.0.0.zip -> anypackage).",
                ArgumentHelpName = "name",
                AllowMultipleArgumentsPerToken = false
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines the directory to which file output should be written.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateOutputDirectoryOption(bool required = false, object defaultValue = null)
        {
            Option<string> option = new Option<string>(new string[] { "--output-path", "--output", "--path" })
            {
                Name = "OutputPath",
                Description = "The directory to which file output should be written.",
                ArgumentHelpName = "path",
                AllowMultipleArgumentsPerToken = false
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines the name of a package (e.g. any.package.1.0.0.zip).
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreatePackageOption(bool required = false, object defaultValue = null)
        {
            Option<string> option = new Option<string>(new string[] { "--package", "--pkg" })
            {
                Name = "Package",
                Description = "The physical name of a package to bootstrap/install as it is defined in a package store (e.g. anypackage.1.0.0.zip).",
                ArgumentHelpName = "name",
                AllowMultipleArgumentsPerToken = false
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines a dependency store to add to the storage options
        /// for the Virtual Client for downloading dependency packages. Supported stores include: Packages, Content.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        /// <param name="certificateManager">Optional parameter defines the certificate manager to use for accessing certificates on the system.</param>
        /// <param name="fileSystem">Optional parameter to use to validate file system paths.</param>
        public static Option CreatePackageStoreOption(bool required = true, object defaultValue = null, ICertificateManager certificateManager = null, IFileSystem fileSystem = null)
        {
            Option<DependencyStore> option = new Option<DependencyStore>(
                new string[] { "--package-store", "--packageStore", "--packagestore", "--packages", "--ps" },
                new ParseArgument<DependencyStore>(result => OptionFactory.ParseBlobStore(
                    result,
                    DependencyStore.Packages,
                    certificateManager ?? OptionFactory.defaultCertificateManager,
                    fileSystem ?? OptionFactory.defaultFileSystem)))
            {
                Name = "PackageStore",
                Description = "An endpoint URI or connection string to the Storage Account from which dependency packages can be downloaded and installed.",
                ArgumentHelpName = "connectionstring|sas",
                AllowMultipleArgumentsPerToken = false
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines additional or override parameters (key/value pairs) to
        /// pass to the profile on execution.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateParametersOption(bool required = true, object defaultValue = null)
        {
            Option<IDictionary<string, IConvertible>> option = new Option<IDictionary<string, IConvertible>>(
                new string[] { "--parameters", "--pm" },
                new ParseArgument<IDictionary<string, IConvertible>>(arg => OptionFactory.ParseDelimitedKeyValuePairs(arg)))
            {
                Name = "Parameters",
                Description = "Parameters or parameter overrides to supply to the profile on execution. Each key value pair should be separated by \",,,\" delimiters " +
                    "(e.g. parameter1=true,,,parameter2=123).",
                ArgumentHelpName = "p1=v1,,,p2=v2...",
                AllowMultipleArgumentsPerToken = true
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines the port on which the local self-hosted REST API service
        /// should list for HTTP traffic.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreatePortOption(bool required = true, object defaultValue = null)
        {
            Option<IEnumerable<int>> option = new Option<IEnumerable<int>>(
                new string[] { "--port" },
                new ParseArgument<IEnumerable<int>>(result =>
                {
                    return result.Tokens.FirstOrDefault()?.Value.Split(new char[] { ',', ';' }, StringSplitOptions.RemoveEmptyEntries).Select(port => int.Parse(port.Trim()));
                }))
            {
                Name = "Ports",
                Description = "The port on which the local self-hosted REST API service should list for HTTP traffic. Client and server ports may be explicitly defined delimited by a comma (e.g. 4500,4501).",
                ArgumentHelpName = "integer",
                AllowMultipleArgumentsPerToken = false
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines the workload profile to execute (e.g. PERF-CPU-OPENSSL.json).
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        /// <param name="certificateManager">Optional parameter defines the certificate manager to use for accessing certificates on the system.</param>
        /// <param name="fileSystem">Optional parameter to use to validate file system paths.</param>
        public static Option CreateProfileOption(bool required = true, object defaultValue = null, ICertificateManager certificateManager = null, IFileSystem fileSystem = null)
        {
            Option<IEnumerable<DependencyProfileReference>> option = new Option<IEnumerable<DependencyProfileReference>>(
                new string[] { "--profile", "--p" },
                new ParseArgument<IEnumerable<DependencyProfileReference>>(result => OptionFactory.ParseProfiles(
                    result,
                    certificateManager ?? OptionFactory.defaultCertificateManager,
                    fileSystem ?? OptionFactory.defaultFileSystem)))
            {
                Name = "Profiles",
                Description = "The workload or monitoring profile(s) to execute.",
                ArgumentHelpName = "path",
                AllowMultipleArgumentsPerToken = true
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines the URI to a proxy API service where the application can download dependencies 
        /// and upload content and telemetry.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateProxyApiOption(bool required = false, object defaultValue = null)
        {
            Option<Uri> option = new Option<Uri>(new string[] { "--proxy-api", "--proxy" })
            {
                Name = "ProxyApiUri",
                Description = "A URI to a proxy API service that the Virtual Client can used to download dependencies/packages as well as to upload content/files and telemetry.",
                ArgumentHelpName = "uri",
                AllowMultipleArgumentsPerToken = false
            };

            option.AddValidator(result =>
            {
                if (!Uri.TryCreate(result.Tokens.First().Value, UriKind.Absolute, out Uri validUri))
                {
                    throw new ArgumentException($"Invalid URI format. The URI supplied for the proxy API option must be an absolute URI (e.g. http:/any.proxy:5000).");
                }

                OptionFactory.ThrowIfOptionExists(
                    result,
                    "PackageStore",
                    "Invalid usage. A package store option cannot be supplied at the same time as a proxy API option. When using a proxy API, all packages are downloaded through the proxy.");

                OptionFactory.ThrowIfOptionExists(
                    result,
                    "ContentStore",
                    "Invalid usage. A content store option cannot be supplied at the same time as a proxy API option. When using a proxy API, all content/files are uploaded through the proxy.");

                OptionFactory.ThrowIfOptionExists(
                    result,
                    "EventHubStore",
                    "Invalid usage. An Event Hub option cannot be supplied at the same time as a proxy API option. When using a proxy API, all telemetry is uploaded through the proxy.");

                return string.Empty;
            });

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines the scenarios/tests to target as part of a profile execution.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateScenariosOption(bool required = false, object defaultValue = null)
        {
            Option<IEnumerable<string>> option = new Option<IEnumerable<string>>(
                new string[] { "--scenarios", "--sc" },
                new ParseArgument<IEnumerable<string>>(result =>
                {
                    return result.Tokens.FirstOrDefault()?.Value.Split(new char[] { ',', ';' }, StringSplitOptions.RemoveEmptyEntries);
                }))
            {
                Name = "Scenarios",
                Description = "A set of one or more scenarios defined within a workload profile to execute or exclude. " +
                    "To include specific scenarios, the names should be comma-delimited (e.g. scenario1,scenario2,scenario3). " +
                    "To include exlude scenarios, each names should be prefixed with a minus (-) character and be comma-delimited (e.g. -scenario1,-scenario2,-scenario3). " +
                    "Scenarios included take priority over scenarios excluded in the case of a matching name.",
                ArgumentHelpName = "name,name...",
                AllowMultipleArgumentsPerToken = true
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines a seed that can be used to guarantee identical randomization 
        /// bases for workloads that require it.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateSeedOption(bool required = true, object defaultValue = null)
        {
            Option<int> option = new Option<int>(new string[] { "--seed", "--sd" })
            {
                Name = "RandomizationSeed",
                Description = "A seed that can be used to guarantee identical randomization bases for workloads that require it.",
                ArgumentHelpName = "integer",
                AllowMultipleArgumentsPerToken = false
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines the execution system/environment platform (e.g. Azure).
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateSystemOption(bool required = true, object defaultValue = null)
        {
            Option<string> option = new Option<string>(new string[] { "--system", "--s" })
            {
                Name = "ExecutionSystem",
                Description = "The execution system/environment platform (e.g. Azure).",
                ArgumentHelpName = "system",
                AllowMultipleArgumentsPerToken = false
            };

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// Command line option defines the duration/timeout for running the operation (e.g. workload execution timeout).
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        /// <param name="defaultValue">Sets the default value when none is provided.</param>
        public static Option CreateTimeoutOption(bool required = true, object defaultValue = null)
        {
            Option<ProfileTiming> option = new Option<ProfileTiming>(
                new string[] { "--timeout", "--t" },
                new ParseArgument<ProfileTiming>(arg => OptionFactory.ParseProfileTimeout(arg)))
            {
                Name = "Timeout",
                Description = "An explicit timeout to apply to profile operations (e.g. action/workload execution timeout). " +
                    "This can be a valid timespan (e.g. 01.00:00:00) or a simple numeric value representing total minutes (e.g. 1440). " +
                    "To set the application to timeout only after a current running action completes, include a 'deterministic' instruction (e.g. 1440,deterministic). " +
                    "To set the application to timeout only after all profile actions complete, include a 'deterministic*' instruction (e.g. 1440,deterministic*). " +
                    "This option cannot be used with a profile iterations option.",
                ArgumentHelpName = "timespan",
                AllowMultipleArgumentsPerToken = false
            };

            option.AddValidator(result =>
            {
                OptionFactory.ThrowIfOptionExists(
                    result,
                    "Iterations",
                    "Invalid usage. The timeout option cannot be used at the same time as the profile iterations option.");

                return string.Empty;
            });

            OptionFactory.SetOptionRequirements(option, required, defaultValue);

            return option;
        }

        /// <summary>
        /// An option to display the current build version of the application.
        /// </summary>
        /// <param name="required">Sets this option as required.</param>
        public static Option CreateVersionOption(bool required = false)
        {
            Option<bool> option = new Option<bool>(new string[] { "--version" })
            {
                Name = "Version",
                Description = "The current build version of the application.",
                AllowMultipleArgumentsPerToken = false
            };

            OptionFactory.SetOptionRequirements(option, required);

            return option;
        }

        private static IList<string> ParseDelimitedValues(string parsedResult)
        {
            // Example Format:
            // --name=package1.zip,package2.zip

            List<string> values = new List<string>();
            if (!string.IsNullOrWhiteSpace(parsedResult))
            {
                string[] delimitedValues = parsedResult.Split(VirtualClientComponent.CommonDelimiters, StringSplitOptions.RemoveEmptyEntries);

                if (delimitedValues?.Any() == true)
                {
                    foreach (string value in delimitedValues)
                    {
                        values.Add(value.Trim());
                    }
                }
            }

            return values;
        }

        private static IList<string> ParseDelimitedValues(ArgumentResult parsedResult)
        {
            // Example Format:
            // --name=package1.zip,package2.zip

            List<string> values = new List<string>();
            foreach (Token token in parsedResult.Tokens)
            {
                if (!string.IsNullOrWhiteSpace(token.Value))
                {
                    string[] delimitedValues = token.Value.Split(VirtualClientComponent.CommonDelimiters, StringSplitOptions.RemoveEmptyEntries);

                    if (delimitedValues?.Any() == true)
                    {
                        foreach (string value in delimitedValues)
                        {
                            values.Add(value.Trim());
                        }
                    }
                }
            }

            return values;
        }

        private static IDictionary<string, IConvertible> ParseDelimitedKeyValuePairs(ArgumentResult parsedResult)
        {
            // Example Format:
            // --metadata=Property1=true,,,Property2=1234,,,Property3=value1,value2

            IDictionary<string, IConvertible> delimitedValues = new Dictionary<string, IConvertible>(StringComparer.OrdinalIgnoreCase);
            foreach (Token token in parsedResult.Tokens)
            {
                if (!string.IsNullOrWhiteSpace(token.Value))
                {
                    delimitedValues.AddRange(TextParsingExtensions.ParseDelimitedValues(token.Value));
                }
            }

            return delimitedValues;
        }

        private static DependencyStore ParseBlobStore(ArgumentResult parsedResult, string storeName, ICertificateManager certificateManager, IFileSystem fileSystem)
        {
            DependencyStore store = null;
            string endpoint = parsedResult.Tokens.First().Value.Trim(new char[] { '\'', '"', ' ' });

            if (EndpointUtility.IsFullyQualifiedFilePath(endpoint))
            {
                store = new DependencyFileStore(storeName, Path.GetFullPath(endpoint));
            }
            else
            {
                store = EndpointUtility.CreateBlobStoreReference(storeName, endpoint, certificateManager);
            }

            // If the certificate is not found, the certificate manager will throw and exception. The logic that follows
            // here would happen if the user provided invalid information that precedes the search for the actual certificate.
            if (store == null)
            {
                throw new SchemaException(
                    $"The value provided for the Storage Account endpoint is invalid. The value must be one of the following supported identifiers:{Environment.NewLine}" +
                    $"1) A valid storage account or blob container SAS URI{Environment.NewLine}" +
                    $"2) A URI with Microsoft Entra ID/App identity information (e.g. using certificate-based authentication){Environment.NewLine}" +
                    $"3) A URI with Microsoft Azure Managed Identity information{Environment.NewLine}" +
                    $"4) A directory path that exists on the system.{Environment.NewLine}{Environment.NewLine}{Environment.NewLine}" +
                    $"See the following documentation for additional details and examples:{Environment.NewLine}" +
                    $"- https://microsoft.github.io/VirtualClient/docs/guides/0010-command-line/{Environment.NewLine}" +
                    $"- https://microsoft.github.io/VirtualClient/docs/guides/0600-integration-blob-storage/{Environment.NewLine}");
            }


            return store;
        }

        private static DependencyEventHubStore ParseEventHubStore(ArgumentResult parsedResult, string storeName, ICertificateManager certificateManager)
        {
            string endpoint = parsedResult.Tokens.First().Value.Trim(new char[] { '\'', '"', ' ' });
            DependencyEventHubStore store = EndpointUtility.CreateEventHubStoreReference(storeName, endpoint, certificateManager);

            if (store == null)
            {
                throw new SchemaException(
                    $"The value provided for the Event Hub endpoint is invalid. The value must be one of the following supported identifiers:{Environment.NewLine}" +
                    $"1) A valid Event Hub namespace access policy/connection string{Environment.NewLine}" +
                    $"2) A URI with Microsoft Entra ID/App identity information(e.g. using certificate-based authentication){Environment.NewLine}" +
                    $"3) A URI with Microsoft Azure Managed Identity information{Environment.NewLine}{Environment.NewLine}" +
                    $"See the following documentation for additional details and examples:{Environment.NewLine}" +
                    $"- https://microsoft.github.io/VirtualClient/docs/guides/0010-command-line/{Environment.NewLine}" +
                    $"- https://microsoft.github.io/VirtualClient/docs/guides/0610-integration-event-hub/{Environment.NewLine}");
            }

            return store;
        }

        private static IEnumerable<DependencyProfileReference> ParseProfiles(ArgumentResult parsedResult, ICertificateManager certificateManager, IFileSystem fileSystem)
        {
            List<DependencyProfileReference> profiles = new List<DependencyProfileReference>();

            foreach (Token argument in parsedResult.Tokens)
            {
                string profileReference = argument.Value?.Trim(new char[] { '\'', '"', ' ' });

                if (PlatformSpecifics.IsFullyQualifiedPath(profileReference))
                {
                    profiles.Add(new DependencyProfileReference(profileReference));
                }
                else if (!Uri.TryCreate(profileReference, UriKind.Absolute, out Uri profileUri)
                    && !EndpointUtility.IsCustomConnectionString(profileReference)
                    && !EndpointUtility.IsStorageAccountConnectionString(profileReference))
                {
                    if (PlatformSpecifics.IsFullyQualifiedPath(profileReference))
                    {
                        profiles.Add(new DependencyProfileReference(profileReference));
                    }
                    else
                    {
                        string directoryName = Path.GetDirectoryName(profileReference);
                        if (string.IsNullOrWhiteSpace(directoryName))
                        {
                            profiles.Add(new DependencyProfileReference(profileReference));
                        }
                        else
                        {
                            string fullPath = Path.GetFullPath(profileReference);
                            profiles.Add(new DependencyProfileReference(fullPath));
                        }
                    } 
                }
                else
                {
                    profiles.Add(EndpointUtility.CreateProfileReference(profileReference, certificateManager));
                }
            }

            return profiles;
        }

        private static TimeSpan ParseTimeSpan(ArgumentResult parsedResult)
        {
            // Example Format:
            // --flush-wait=00:10:00
            // --flush-wait=60

            string argument = parsedResult.Tokens.First().Value;
            TimeSpan timeout = TimeSpan.Zero;

            try
            {
                if (int.TryParse(argument, out int minutes))
                {
                    // The value is an integer representing minutes.
                    timeout = TimeSpan.FromMinutes(minutes);
                }
                else
                {
                    // The value is a timespan format: 01.00:00:00.
                    timeout = TimeSpan.Parse(argument);
                }
            }
            catch (FormatException)
            {
                throw new ArgumentException(
                    $"Invalid timespan value provided. The parameter must be " +
                    $"either a valid timespan or numeric value (e.g. 01.00:00:00 or 1440).");
            }

            return timeout;
        }

        private static ProfileTiming ParseProfileIterations(ArgumentResult parsedResult)
        {
            string argument = parsedResult.Tokens.First().Value;
            if (!int.TryParse(argument, out int iterations))
            {
                throw new ArgumentException(
                    $"Invalid value provided for the iterations option. The iterations parameter must be a valid " +
                    $"numeric value (e.g. 3).");
            }

            if (iterations <= 0)
            {
                throw new ArgumentException(
                    $"Invalid value provided for the iterations option. The iterations parameter must be greater than zero.");
            }

            return new ProfileTiming(iterations);
        }

        private static ProfileTiming ParseProfileTimeout(ArgumentResult parsedResult)
        {
            // Example Format:
            // --timeout=1440
            // --timeout=1440,deterministic
            // --timeout=1440,deterministic*
            // 
            // --timeout=01:00:00
            // --timeout=01:00:00,deterministic
            // --timeout=01:00:00,deterministic*

            ProfileTiming timing = null;
            string argument = parsedResult.Tokens.First().Value;
            string[] parts = argument.Split(VirtualClientComponent.CommonDelimiters, StringSplitOptions.RemoveEmptyEntries);

            TimeSpan timeout = TimeSpan.Zero;
            try
            {
                if (int.TryParse(parts[0], out int minutes))
                {
                    // The value is an integer representing minutes.
                    timeout = TimeSpan.FromMinutes(minutes);
                }
                else
                {
                    // The value is a timespan format: 01.00:00:00.
                    timeout = TimeSpan.Parse(parts[0]);
                }
            }
            catch (FormatException)
            {
                throw new ArgumentException(
                    $"Invalid timespan value provided for the timeout/duration option. The duration/timeout parameter must be " +
                    $"either a valid timespan or numeric value (e.g. 01.00:00:00 or 1440).");
            }

            if (parts.Length == 1)
            {
                timing = new ProfileTiming(timeout);
            }
            else if (parts.Length == 2)
            {
                DeterminismScope levelOfDeterminism = DeterminismScope.Undefined;
                string determinismScope = parts[1].ToLowerInvariant();
                switch (determinismScope)
                {
                    case "deterministic":
                        levelOfDeterminism = DeterminismScope.IndividualAction;
                        break;

                    case "deterministic*":
                        levelOfDeterminism = DeterminismScope.AllActions;
                        break;

                    default:
                        throw new ArgumentException(
                            $"Invalid level of determinism value defined for the timeout/duration option. " +
                            $"Supported values include 'deterministic' and 'deterministic*' (e.g. --timeout=1440,deterministic, --timeout=1440,deterministic*).");
                }

                timing = new ProfileTiming(timeout, levelOfDeterminism);
            }
            else
            {
                throw new ArgumentException(
                    $"Invalid level of determinism value defined for the timeout/duration option. " +
                    $"Supported values include 'deterministic' and 'deterministic*' (e.g. --timeout=1440,deterministic, --timeout=1440,deterministic*).");
            }

            return timing;
        }

        private static Option SetOptionRequirements(Option option, bool required = false, object defaultValue = null, ValidateSymbol<OptionResult> validator = null)
        {
            option.IsRequired = required;

            if (defaultValue != null)
            {
                option.SetDefaultValue(defaultValue);
            }

            if (validator != null)
            {
                option.AddValidator(validator);
            }

            return option;
        }

        private static void ThrowIfOptionExists(OptionResult parsedResult, string optionName, string errorMessage)
        {
            if (parsedResult.Parent?.Children?.Any(option => string.Equals(option.Symbol.Name, optionName, StringComparison.OrdinalIgnoreCase)) == true)
            {
                throw new ArgumentException(errorMessage);
            }
        }
    }
}
