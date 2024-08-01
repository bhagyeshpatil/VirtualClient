"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[3210],{4231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(4848),i=n(8453);const a={},r="Usage: Command Line Examples",l={id:"guides/0200-usage-examples",title:"Usage: Command Line Examples",description:"The following documentation covers a range of usage scenarios that apply to the Virtual Client. The sections that follow are meant",source:"@site/docs/guides/0200-usage-examples.md",sourceDirName:"guides",slug:"/guides/0200-usage-examples",permalink:"/VirtualClient/docs/guides/0200-usage-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/guides/0200-usage-examples.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data/Telemetry Support",permalink:"/VirtualClient/docs/guides/0040-telemetry"},next:{title:"Usage: Testing Disks",permalink:"/VirtualClient/docs/guides/0220-usage-testing-disks"}},s={},c=[{value:"Scenario: Running a Simple Workload",id:"scenario-running-a-simple-workload",level:2},{value:"Scenario: Running a Client Server Workload",id:"scenario-running-a-client-server-workload",level:2},{value:"Scenario: Pass in Metadata for Correlation",id:"scenario-pass-in-metadata-for-correlation",level:2},{value:"Scenario: Instruct the Application to Fail Fast",id:"scenario-instruct-the-application-to-fail-fast",level:2},{value:"Scenario: Write the Output of Processes to the File System",id:"scenario-write-the-output-of-processes-to-the-file-system",level:2},{value:"Scenario: Instruct the Appliction to Perform an Initial Cleanup",id:"scenario-instruct-the-appliction-to-perform-an-initial-cleanup",level:2},{value:"Scenario: Upload Metrics and Logs to an Event Hub",id:"scenario-upload-metrics-and-logs-to-an-event-hub",level:2},{value:"Scenario: Upload Log Files to a Content Store",id:"scenario-upload-log-files-to-a-content-store",level:2},{value:"Scenario: Change the Amount of Operational Trace Telemetry Emitted",id:"scenario-change-the-amount-of-operational-trace-telemetry-emitted",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"usage-command-line-examples",children:"Usage: Command Line Examples"}),"\n",(0,o.jsx)(t.p,{children:"The following documentation covers a range of usage scenarios that apply to the Virtual Client. The sections that follow are meant\nto illustrate how to use Virtual Client within these various scenarios as well as what to expect."}),"\n",(0,o.jsx)(t.h2,{id:"scenario-running-a-simple-workload",children:"Scenario: Running a Simple Workload"}),"\n",(0,o.jsx)(t.p,{children:"One of the first things that users of the Virtual Client want to do is to run the application to see how it works. This is a very\nbasic example where we are supplying the minimum number of parameters to the Virtual Client. The '--debug' option instructs the\nVirtual Client to output verbose tracing information to the console."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'# Run a COREMARK workload profile. The workload package itself containing the COREMARK executables will\n# be downloaded from the VC workload package store.\n#\n# On Windows\nVirtualClient.exe --profile=PERF-CPU-COREMARK.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}"\n\n# On Linux\n./VirtualClient --profile=PERF-CPU-COREMARK.json --timeout=03:00:00 --packages="{BlobStoreConnectionString|SAS URI}"\n\n# Run the workload profile for a single iteration.\n./VirtualClient --profile=PERF-CPU-COREMARK.json --iterations=1 --packages="{BlobStoreConnectionString|SAS URI}"\n'})}),"\n",(0,o.jsx)(t.h2,{id:"scenario-running-a-client-server-workload",children:"Scenario: Running a Client Server Workload"}),"\n",(0,o.jsx)(t.p,{children:"Some workload profiles require multiple systems to operate. For example the CPS, NTttcp and SockPerf workloads requires a client system and a server\nsystem to be valid. Multi-system workload profiles require and environment layout to be supplied to the Virtual Client. An environment\nlayout describes the topology...where the other Virtual Client instances are and what roles they will play. To get familiar\nwith defining an environment layouts, see the documentation below. Note that each of the workload profiles has documentation that\nprovides examples of a valid environment layout for that particular workload profile/workload."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/VirtualClient/docs/guides/0020-client-server",children:"Environment Layouts"})}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'# Run the workload using the default port for hosting the REST API\nVirtualClient.exe --profile=PERF-NETWORK.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --layoutPath=C:\\any\\path\\to\\layout.json\n\n# Run the workload using a specific port for hosting the REST API\nVirtualClient.exe --profile=PERF-NETWORK.json --timeout=180 --api-port=4501 --packages="{BlobStoreConnectionString|SAS URI}" --layoutPath=C:\\any\\path\\to\\layout.json\n\n# Run the workload using a specific port for hosting the REST API different for the Client and Server roles\nVirtualClient.exe --profile=PERF-NETWORK.json --timeout=180 --api-port=4501/Client,4502/Server --packages="{BlobStoreConnectionString|SAS URI}" --layoutPath=C:\\any\\path\\to\\layout.json\n'})}),"\n",(0,o.jsx)(t.h2,{id:"scenario-pass-in-metadata-for-correlation",children:"Scenario: Pass in Metadata for Correlation"}),"\n",(0,o.jsx)(t.p,{children:"The Virtual Client is designed to be generally agnostic to the nomenclature of the automation/execution system that runs it. However, to ensure that the data emitted by\nthe application can be correlated with the data captured by the automation system executing it, metadata can be supplied on the command line. Every metadata property emitted\nwill be included in ALL metrics, counters, logs etc... telemetry that is emitted by the application."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'VirtualClient.exe --profile=PERF-CPU-GEEKBENCH.json --timeout=03:00:00 --packages="{BlobStoreConnectionString|SAS URI}" --metadata="experimentGroup=Group A,,,nodeId=eB3fc2d9-157b-4efc-b39c-a454a0779a5b,,,tipSessionId=73e8ae54-e0a0-48b6-9bda-4a269672b9b1,,,cluster=cluster01,,,region=East US 2"\n'})}),"\n",(0,o.jsx)(t.h2,{id:"scenario-instruct-the-application-to-fail-fast",children:"Scenario: Instruct the Application to Fail Fast"}),"\n",(0,o.jsx)(t.p,{children:"Virtual Client typically will continue to retry the execution of actions within a profile in the event that one of the actions fails\nfor a non-terminal reason. Users may want to instruct the application to promptly exit on any errors regardless of the severity (terminal or not).\nNote that this generally refers to 'Actions' in the profile. The application always fails fast on the failure of 'Dependencies'. 'Monitors' are\ntypically implemented to handle exceptions due to the requirement they continue to operate in the background even on failure."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'VirtualClient.exe --profile=PERF-CPU-GEEKBENCH.json --timeout=03:00:00 --packages="{BlobStoreConnectionString|SAS URI}" --fail-fast\n'})}),"\n",(0,o.jsx)(t.h2,{id:"scenario-write-the-output-of-processes-to-the-file-system",children:"Scenario: Write the Output of Processes to the File System"}),"\n",(0,o.jsx)(t.p,{children:"Virtual Client runs a wide range of workloads, monitors and dependency handlers when executing a given profile. The following examples show\nhow to instruct the application to log the output of processes to files in the logs directory on the file system."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'# Log the workload process output to the file system.\n#\n# On Windows\nVirtualClient.exe --profile=PERF-IO-FIO.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --log-to-file\n\n# On Linux\n./VirtualClient --profile=PERF-IO-FIO.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --log-to-file\n'})}),"\n",(0,o.jsx)(t.h2,{id:"scenario-instruct-the-appliction-to-perform-an-initial-cleanup",children:"Scenario: Instruct the Appliction to Perform an Initial Cleanup"}),"\n",(0,o.jsx)(t.p,{children:'Virtual Client writes various types of content to the file system. Some common types of content include log files, package downloads and\nfiles used to represent state for managing repeat operations/idempotency. Over time the count and size of the file content on the file\nsystem can grow to where it becomes desirable to cleanup some of the files. For example, a user might want to cleanup up the log files\nin order to minimize the overall size of the log content on the file system (...no one wants to run a drive out of space). Additionally,\na user might want to perform a "reset" to force Virtual Client to treat a given profile as a "first run" again. In this scenario, the\nuser would want to cleanup the local state files. The following examples show how to perform an initial cleanup on the system.'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'# Perform a full clean. This will remove ALL log files/directories, any packages previously downloaded minus\n# those that are "built-in" or part of the Virtual Client package itself and any state files previously written.\n# This essentially resets Virtual Client back to the state it was in before the first run on the system.\n./VirtualClient --profile=PERF-CPU-COREMARK.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --clean\n./VirtualClient --profile=PERF-CPU-COREMARK.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --clean=all\n\n# Clean specific target resources.\n./VirtualClient --profile=PERF-CPU-COREMARK.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --clean=logs\n./VirtualClient --profile=PERF-CPU-COREMARK.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --clean=packages\n./VirtualClient --profile=PERF-CPU-COREMARK.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --clean=state\n\n# Clean multiple specific target resources all together.\n./VirtualClient --profile=PERF-CPU-COREMARK.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --clean=logs,state\n./VirtualClient --profile=PERF-CPU-COREMARK.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --clean=logs,packages,state\n\n# Apply a log retention period to the log files. This will cause log files older than the period to\n# be removed but will preserve any remaining. Note that this is the same as --clean=logs --log-retention=02.00:00:00.\n./VirtualClient --profile=PERF-CPU-COREMARK.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --log-retention=02.00:00:00\n\n# Log retentions can be in \'minutes\' as well (e.g. 2800 minutes = 2 days). Note that this is the same as --clean=logs --log-retention=2880.\n./VirtualClient --profile=PERF-CPU-COREMARK.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --log-retention=2880\n'})}),"\n",(0,o.jsx)(t.h2,{id:"scenario-upload-metrics-and-logs-to-an-event-hub",children:"Scenario: Upload Metrics and Logs to an Event Hub"}),"\n",(0,o.jsxs)(t.p,{children:["The Virtual Client supports the ability to upload metrics, counters, logs etc... to an ",(0,o.jsx)(t.a,{href:"https://azure.microsoft.com/en-us/services/event-hubs/?OCID=AID2200277_SEM_092bba0f3fec11eb8ce6dbef46f6464a:G:s&ef_id=092bba0f3fec11eb8ce6dbef46f6464a:G:s&msclkid=092bba0f3fec11eb8ce6dbef46f6464a",children:"Azure Event Hub"}),".\nEvent Hubs are a highly-scalable messaging platform in the Azure Cloud that can be integrated out-of-the-box with other big-data platforms such as Azure Data Explorer (ADX/Kusto).\nNote that the Virtual Client does have a set of explicit expectations for how the Event Hubs are setup. The following documentation covers what is required:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/VirtualClient/docs/guides/0610-integration-event-hub",children:"Event Hub Integration"})}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'# To send data to an Event Hub, supply a connection string to the Event Hub namespace on the command line.\nVirtualClient.exe --profile=PERF-CPU-OPENSSL.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --eventHub="{EventHubConnectionString}"\n'})}),"\n",(0,o.jsx)(t.h2,{id:"scenario-upload-log-files-to-a-content-store",children:"Scenario: Upload Log Files to a Content Store"}),"\n",(0,o.jsx)(t.p,{children:"Most components in the Virtual Client allow the user to upload information or files produced by the execution of workloads and monitors to\na cloud Blob store. In order to enable this, the connection string or SAS URI to the Blob store should be supplied on the command line. See the documentation\non monitor profiles below for additional details on which profiles support this."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/VirtualClient/docs/guides/0600-integration-blob-storage",children:"Blob Store Support"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/VirtualClient/docs/monitors/0200-monitor-profiles",children:"Monitor Profiles"})}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'VirtualClient.exe --profile=PERF-NETWORK.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --content="{BlobStoreConnectionString|SAS URI}" --parameters=ProfilingEnabled=true,,,ProfilingMode=Interval\n'})}),"\n",(0,o.jsx)(t.h2,{id:"scenario-change-the-amount-of-operational-trace-telemetry-emitted",children:"Scenario: Change the Amount of Operational Trace Telemetry Emitted"}),"\n",(0,o.jsx)(t.p,{children:"Virtual Client emits quite a bit of operational traces while running in order to provide good information to the user. There are times when this\namount of information is not desirable. The logging level (or severity) can be changed on the command line. The default logging level is 'Information'."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"# Emit traces for 'Warning' level and above only.\nVirtualClient.exe --profile=PERF-CPU-GEEKBENCH.json --timeout=03:00:00 --packages=\"{BlobStoreConnectionString|SAS URI}\" --log-level=Warning\n\n# Emit traces for 'Error' level and above only.\nVirtualClient.exe --profile=PERF-CPU-GEEKBENCH.json --timeout=03:00:00 --packages=\"{BlobStoreConnectionString|SAS URI}\" --log-level=Error\n\n# Emit traces for 'Critical' level and above only.\nVirtualClient.exe --profile=PERF-CPU-GEEKBENCH.json --timeout=03:00:00 --packages=\"{BlobStoreConnectionString|SAS URI}\" --log-level=Critical\n"})}),"\n",(0,o.jsx)(t.p,{children:"Correspondingly, there are times when more operational traces are desirable (e.g. for debugging scenarios). The default logging level is 'Information'."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'# Emit all traces (...the most verbose option)\nVirtualClient.exe --profile=PERF-CPU-GEEKBENCH.json --timeout=03:00:00 --packages="{BlobStoreConnectionString|SAS URI}" --log-level=Trace\n\n# Emit traces for \'Debug\' level and above.\nVirtualClient.exe --profile=PERF-CPU-GEEKBENCH.json --timeout=03:00:00 --packages="{BlobStoreConnectionString|SAS URI}" --log-level=Debug\n\n# Emit traces for \'Information\' level and above only.\nVirtualClient.exe --profile=PERF-CPU-GEEKBENCH.json --timeout=03:00:00 --packages="{BlobStoreConnectionString|SAS URI}" --log-level=Information\n'})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var o=n(6540);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);