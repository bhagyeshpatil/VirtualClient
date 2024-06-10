"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[774],{9168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(5893),s=n(3905);const i={},r="Azure Event Hub Integration",o={id:"guides/0610-integration-event-hub",title:"Azure Event Hub Integration",description:"Azure Event Hubs is a highly scalable Azure cloud messaging hub/proxy that has out-of-the-box integration with a number of other Azure data/data",source:"@site/docs/guides/0610-integration-event-hub.md",sourceDirName:"guides",slug:"/guides/0610-integration-event-hub",permalink:"/VirtualClient/docs/guides/0610-integration-event-hub",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/guides/0610-integration-event-hub.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Azure Storage Account Integration",permalink:"/VirtualClient/docs/guides/0600-integration-blob-storage"},next:{title:"Workloads",permalink:"/VirtualClient/docs/category/workloads"}},l={},c=[{value:"Event Hubs integration",id:"event-hubs-integration",level:2},{value:"Event Hubs Authentication",id:"event-hubs-authentication",level:2},{value:"Create Event Hub Namespace",id:"create-event-hub-namespace",level:3},{value:"Create Event Hubs",id:"create-event-hubs",level:3},{value:"Event Hubs and Azure Data Explorer integration",id:"event-hubs-and-azure-data-explorer-integration",level:2},{value:"Create Event Hub Consumer Groups",id:"create-event-hub-consumer-groups",level:3},{value:"Create Databases and Tables",id:"create-databases-and-tables",level:3},{value:"Create the JSON Ingestion Mappings",id:"create-the-json-ingestion-mappings",level:3},{value:"Create Data Connectors",id:"create-data-connectors",level:3},{value:"Configure ADX Cluster Ingestion Settings",id:"configure-adx-cluster-ingestion-settings",level:3}];function d(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.ah)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"azure-event-hub-integration",children:"Azure Event Hub Integration"}),"\n",(0,a.jsx)(t.p,{children:"Azure Event Hubs is a highly scalable Azure cloud messaging hub/proxy that has out-of-the-box integration with a number of other Azure data/data\npipeline resources (e.g. Azure Data Explorer/Kusto, Azure Storage Account). Virtual Client allows the user to supply a connection string to an Event Hubs namespace on the command line. The remainder of this document\ncovers the requirements for using an Event Hub including the setup."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/VirtualClient/docs/guides/0040-telemetry",children:"Data/Telemetry Basics"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://azure.microsoft.com/en-us/services/event-hubs/?OCID=AID2200277_SEM_e21e0a74b99318c95ac66be89b11ec19:G:s&ef_id=e21e0a74b99318c95ac66be89b11ec19:G:s&msclkid=e21e0a74b99318c95ac66be89b11ec19",children:"Event Hub Documentation"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"event-hubs-integration",children:"Event Hubs integration"}),"\n",(0,a.jsx)(t.p,{children:"Event Hub is a highly scalable Azure cloud messaging hub/proxy that has out-of-the-box integration with a number of other Azure data/data\npipeline resources (e.g. Azure Data Explorer/Kusto, Azure Storage Account). Virtual Client allows the user to supply a connection string to an Event Hubs namespace on the command line. The remainder of this document\ncovers the requirements for using an Event Hub including the setup."}),"\n",(0,a.jsx)(t.h2,{id:"event-hubs-authentication",children:"Event Hubs Authentication"}),"\n",(0,a.jsx)(t.p,{children:"Virtual Client supports the following authentication options for eventhubs:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Azure Entra Id + Certificate using thumbprint"}),"\nVC uses certificate to authenticate with an Azure Entra ID (AAD) application, which has read access to the package store.\nThis method uses certificate thumbprint to search for the certificate. Required parameters are:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"CertificateThumbprint"}),"\n",(0,a.jsx)(t.li,{children:"ClientId"}),"\n",(0,a.jsx)(t.li,{children:"TenantId"}),"\n",(0,a.jsx)(t.li,{children:"EventHubNamespace"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"--eventhub=CertificateThumbprint=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA;ClientId=BBBBBBBB-BBBB-BBBB-BBBB-BBBBBBBBBBBB;TenantId=CCCCCCCC-CCCC-CCCC-CCCC-CCCCCCCCCCCC;EventHubNamespace=aaa.servicebus.windows.net"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Azure Entra Id + Certificate using issuer + subject"}),"\nVC uses certificate to authenticate with an Azure Entra ID (AAD) application, which has read access to the package store.\nThis method uses certificate issuer + subject to search for the certificate. This has the benefit of supporting frequent cert rotation with no argument changes. The issuer can be a substring of the exact issuer appearing in the certificate. The search only looks for contains.\nRequired parameters are:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"CertificateIssuer"}),"\n",(0,a.jsx)(t.li,{children:"CertificateSubject"}),"\n",(0,a.jsx)(t.li,{children:"ClientId"}),"\n",(0,a.jsx)(t.li,{children:"TenantId"}),"\n",(0,a.jsx)(t.li,{children:"EventHubNamespace"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"--eventhub=CertificateIssuer=XXX CA Authority;CertificateSubject=aaa.bbb.com;ClientId=BBBBBBBB-BBBB-BBBB-BBBB-BBBBBBBBBBBB;TenantId=CCCCCCCC-CCCC-CCCC-CCCC-CCCCCCCCCCCC;EventHubNamespace=aaa.servicebus.windows.net"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Azure Managed Identity"}),"\nThis method uses Azure managed identity to authenticate. An id is required to support cases where a machine have multiple identities."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"--eventhub=ManagedIdentityId=AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA;EventHubNamespace=aaa.servicebus.windows.net"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"EventHub connection string"}),(0,a.jsx)(t.br,{}),"\n","This is a ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-get-connection-string",children:"event hub connection string"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"(e.g. Endpoint=sb://aaa.servicebus.windows.net/;SharedAccessKeyName=TelemetrySharedAccessKey;SharedAccessKey=bbbbbbbbbb...)"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"create-event-hub-namespace",children:"Create Event Hub Namespace"}),"\n",(0,a.jsx)(t.p,{children:"The Virtual Client emits data for each one of these categories into a distinct/singular target Event Hub within an Event Hub namespace (a 1-to-1 mapping).\nIn order to use Event Hub with the Virtual Client, an Event Hub namespace must be setup. The following recommendations relate to the Event Hub namespace itself."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Throughput Units"}),(0,a.jsx)(t.br,{}),"\n","Throughput units control the capacity for each individual Event Hub created in the namespace. It is recommended that you set this\nto at least 20 for production scenarios. For non-production scale scenarios, this can be set to between 5 and 10. Fortunately, this\nsetting can be changed at any point to enable the Event Hubs in the namespace to handle additional message volume."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"create-event-hubs",children:"Create Event Hubs"}),"\n",(0,a.jsx)(t.p,{children:"The Event Hub namespace will need 4 Event Hubs to be created. The following steps describe requirements and recommendations. These are general recommendations\nbased upon the VC team's experience that are designed to support high volumes of telemetry (e.g. hundreds of millions of events per day per hub)."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"telemetry-events"}),(0,a.jsx)(t.br,{}),"\n","Create an Event Hub named 'telemetry-events' to intake system events data emitted by the Virtual Client. The following specifications should be used when creating\nthis Event Hub."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Message Retention: 2 days"}),"\n",(0,a.jsx)(t.li,{children:"Partition Count: Production Scale = 32, Non-Production/Test Scale = 10"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"telemetry-logs"}),(0,a.jsx)(t.br,{}),"\n","Create an Event Hub named 'telemetry-logs' to intake logs/traces data emitted by the Virtual Client. The following specifications should be used when creating\nthis Event Hub."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Message Retention: 2 days"}),"\n",(0,a.jsx)(t.li,{children:"Partition Count: Production Scale = 32, Non-Production/Test Scale = 10"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"telemetry-metrics"}),(0,a.jsx)(t.br,{}),"\n","Create an Event Hub named 'telemetry-metrics' to intake workload metrics/measurements data emitted by the Virtual Client. The following specifications should be used when creating\nthis Event Hub."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Message Retention: 2 days"}),"\n",(0,a.jsx)(t.li,{children:"Partition Count: Production Scale = 32, Non-Production/Test Scale = 10"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{alt:"Event Hub Namespace Throughput Units",src:n(5949).Z+"",width:"1140",height:"500"}),"\n",(0,a.jsx)(t.img,{alt:"Event Hub Namespace Throughput Units",src:n(5798).Z+"",width:"1136",height:"728"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"event-hubs-and-azure-data-explorer-integration",children:"Event Hubs and Azure Data Explorer integration"}),"\n",(0,a.jsx)(t.p,{children:'The following section describes how to setup an existing Azure Data Explorer (ADX) cluster to support ingesting Virtual Client data/telemetry\nfrom the set of Event Hubs describe above. Azure Data Explorer has out-of-box support for defining "data connectors" that will handle the ingestion\nof the data on a rapid cadence with little to no data loss. The data from Virtual Client will be ingested into tables within the ADX cluster in a 1-to-1\nmapping with the Event Hubs noted above.'}),"\n",(0,a.jsx)(t.h3,{id:"create-event-hub-consumer-groups",children:"Create Event Hub Consumer Groups"}),"\n",(0,a.jsx)(t.p,{children:"On each of the Event Hubs created/noted above (e.g. telemetry-logs, telemetry-metrics) in the Event Hub namespace, create a consumer group named\n'adx-ingestion'. This consumer group will be used exclusively by the ADX data connectors described below to ingest data from the Event Hubs\ninto the ADX cluster database tables."}),"\n",(0,a.jsx)(t.h3,{id:"create-databases-and-tables",children:"Create Databases and Tables"}),"\n",(0,a.jsx)(t.p,{children:"The following steps describe the databases and tables required."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Create a Database for Logs/Traces Data"}),(0,a.jsx)(t.br,{}),"\n","Create a database to host tables that maintain logs/traces data. Data retention periods are defined at the database level in Azure Data Explorer.\nVirtual Client logs/traces data is useful for debugging necessities but not typically needed to be kept for very long periods of time (vs. performance and monitoring)\ndata. Set the data retention period to a value that makes sense for your process. For example, the VC team maintains logs/traces data for 30 days.\nYou can name the database whatever you like. The VC team uses the name 'WorkloadDiagnostics' for this database."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Add Managed Identity to the 'Database Ingestor' Role"}),(0,a.jsx)(t.br,{}),"\n","Add the managed identity created above to the access permissions for the ADX/Kusto database in which the tables below will be created with the\nrole 'Database Ingestor'."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Create the Tables for Logs/Traces Data"}),(0,a.jsx)(t.br,{}),"\n","Data retention periods are defined at the database level in Azure Data Explorer. As such, a different database should be used to host this data\nversus the database used to host performance and monitoring data. Set the data retention period to a value that makes sense for your process.\nFor example, the VC team maintains logs/traces data for 30 days."]}),"\n",(0,a.jsx)(t.p,{children:"Run the following Kusto Query Language (KQL) commands to create the tables required for ingesting Virtual Client data."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kusto",children:"// Create the table for capturing traces/logs/errors\n.create table Traces (\n    Timestamp: datetime,\n    ExperimentId: string,\n    ClientId: string,\n    Profile: string,\n    ProfileName: string,\n    Message: string,\n    SeverityLevel: int,\n    ItemType: string,\n    ExecutionSystem: string,\n    OperatingSystemPlatform: string, \n    OperationId: string,\n    OperationParentId: string,\n    AppName: string,\n    AppHost: string,\n    AppVersion: string,\n    AppTelemetryVersion: string,\n    CustomDimensions: dynamic\n)\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Create a Database for Performance and Monitoring Data"}),(0,a.jsx)(t.br,{}),"\n","Create a database to host tables that maintain performance and monitoring data. This data is useful for analyzing the performance of the system as well\nas resource usage and is typically desirable to keep for a longer period of time. Set the data retention period to a value that makes sense for your process. For example,\nthe VC team maintains performance and monitoring data for 10 years/3,650 days. You can name the database whatever you like. The VC team uses the name 'WorkloadPerformance'\nfor this database."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Add Managed Identity to the 'Database Ingestor' Role"}),(0,a.jsx)(t.br,{}),"\n","Add the managed identity created above to the access permissions for the ADX/Kusto database in which the tables below will be created with the\nrole 'Database Ingestor'."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Create the Tables for Performance and Monitoring Data"}),(0,a.jsx)(t.br,{}),"\n","As noted above, it is typically desirable to maintain . Performance and monitoring data are useful over long periods of time\nto analyze historical trends."]}),"\n",(0,a.jsx)(t.p,{children:"Run the following Kusto Query Language (KQL) commands to create the tables required for ingesting Virtual Client data."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kusto",children:"// Create the table that will maintain important system events information.\n.create table Events (\n    Timestamp: datetime,\n    ExperimentId: string,\n    ClientId: string,\n    Profile: string,\n    ProfileName: string,\n    EventType: string,\n    EventInfo: dynamic,\n    SeverityLevel: int,\n    ItemType: string,\n    ExecutionSystem: string,\n    OperatingSystemPlatform: string,\n    OperationId: string,\n    OperationParentId: string,\n    AppName: string,\n    AppHost: string,\n    AppVersion: string,\n    AppTelemetryVersion: string,\n    Tags: string,\n    CustomDimensions: dynamic\n)\n\n// Create the table to maintain workload and system metrics/counters.\n.create table Metrics (\n    Timestamp: datetime,\n    ExperimentId: string,\n    ClientId: string,\n    Profile: string,\n    ProfileName: string,\n    ToolName: string,\n    ScenarioName: string,\n    ScenarioStartTime: datetime,\n    ScenarioEndTime: datetime,\n    MetricCategorization: string,\n    MetricName: string,\n    MetricValue: real,\n    MetricUnit: string,\n    ExecutionSystem: string,\n    OperatingSystemPlatform: string,\n    OperationId: string,\n    OperationParentId: string,\n    AppName: string,\n    AppHost: string,\n    AppVersion: string,\n    AppTelemetryVersion: string,\n    Tags: string,\n    CustomDimensions: dynamic\n)\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"create-the-json-ingestion-mappings",children:"Create the JSON Ingestion Mappings"}),"\n",(0,a.jsx)(t.p,{children:"JSON ingestion mappings define how to map the information in the structure of the events on the Event Hub with the table columns in the\nADX databases."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Create the Ingestion Mappings for the Logs/Traces Data"}),(0,a.jsx)(t.br,{}),"\n","Run the following Kusto Query Language (KQL) commands to create the JSON ingestion mappings required for ingesting Virtual Client logs/traces data."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kusto",children:'// 1) Create the ingestion mappings for the \'Traces\' table\n.create table Traces ingestion json mapping \'IngestionMapping\' \'[{"column":"Timestamp","path":"$.timestamp","datatype":"","transform":null},{"column":"ExperimentId","path":"$.customDimensions.experimentId","datatype":"","transform":null},{"column":"ClientId","path":"$.customDimensions.metadata.agentId","datatype":"","transform":null},{"column":"Profile","path":"$.customDimensions.executionProfile","datatype":"","transform":null},{"column":"ProfileName","path":"$.customDimensions.executionProfileName","datatype":"","transform":null},{"column":"Message","path":"$.message","datatype":"","transform":null},{"column":"SeverityLevel","path":"$.severityLevel","datatype":"","transform":null},{"column":"ItemType","path":"$.itemType","datatype":"","transform":null},{"column":"ExecutionSystem","path":"$.customDimensions.executionSystem","datatype":"","transform":null},{"column":"OperatingSystemPlatform","path":"$.customDimensions.operatingSystemPlatform","datatype":"","transform":null},{"column":"OperationId","path":"$.operation_Id","datatype":"","transform":null},{"column":"OperationParentId","path":"$.operation_ParentId","datatype":"","transform":null},{"column":"AppName","path":"$.appName","datatype":"","transform":null},{"column":"AppHost","path":"$.appHost","datatype":"","transform":null},{"column":"AppVersion","path":"$.customDimensions.appVersion","datatype":"","transform":null},{"column":"AppTelemetryVersion","path":"$.sdkVersion","datatype":"","transform":null},{"column":"CustomDimensions","path":"$.customDimensions","datatype":"","transform":null}]\'\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Create the Ingestion Mappings for the Performance and Monitoring Data"}),(0,a.jsx)(t.br,{}),"\n","Run the following Kusto Query Language (KQL) commands to create the JSON ingestion mappings required for ingesting Virtual Client performance and monitoring data."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kusto",children:'// 1) Create the ingestion mappings for the \'Events\' table\n.create table Events ingestion json mapping \'IngestionMapping\' \'[{"column":"Timestamp","path":"$.timestamp","datatype":"","transform":null},{"column":"ExperimentId","path":"$.customDimensions.experimentId","datatype":"","transform":null},{"column":"ClientId","path":"$.customDimensions.metadata.agentId","datatype":"","transform":null},{"column":"Profile","path":"$.customDimensions.executionProfile","datatype":"","transform":null},{"column":"ProfileName","path":"$.customDimensions.executionProfileName","datatype":"","transform":null},{"column":"EventType","path":"$.customDimensions.eventType","datatype":"","transform":null},{"column":"EventInfo","path":"$.customDimensions.eventInfo","datatype":"","transform":null},{"column":"SeverityLevel","path":"$.severityLevel","datatype":"","transform":null},{"column":"ItemType","path":"$.itemType","datatype":"","transform":null},{"column":"ExecutionSystem","path":"$.customDimensions.executionSystem","datatype":"","transform":null},{"column":"OperatingSystemPlatform","path":"$.customDimensions.operatingSystemPlatform","datatype":"","transform":null},{"column":"OperationId","path":"$.operation_Id","datatype":"","transform":null},{"column":"OperationParentId","path":"$.operation_ParentId","datatype":"","transform":null},{"column":"AppName","path":"$.appName","datatype":"","transform":null},{"column":"AppHost","path":"$.appHost","datatype":"","transform":null},{"column":"AppVersion","path":"$.customDimensions.appVersion","datatype":"","transform":null},{"column":"AppTelemetryVersion","path":"$.sdkVersion","datatype":"","transform":null},{"column":"Tags","path":"$.customDimensions.tags","datatype":"","transform":null},{"column":"CustomDimensions","path":"$.customDimensions","datatype":"","transform":null}]\'\n\n// 2) Create the ingestion mappings for the \'Metrics\' table\n.create table Metrics ingestion json mapping \'IngestionMapping\' \'[{"column":"Timestamp","path":"$.timestamp","datatype":"","transform":null},{"column":"ExperimentId","path":"$.customDimensions.experimentId","datatype":"","transform":null},{"column":"ClientId","path":"$.customDimensions.metadata.agentId","datatype":"","transform":null},{"column":"Profile","path":"$.customDimensions.executionProfile","datatype":"","transform":null},{"column":"ProfileName","path":"$.customDimensions.executionProfileName","datatype":"","transform":null},{"column":"ToolName","path":"$.customDimensions.toolName","datatype":"","transform":null},{"column":"ScenarioName","path":"$.customDimensions.scenarioName","datatype":"","transform":null},{"column":"ScenarioStartTime","path":"$.customDimensions.scenarioStartTime","datatype":"","transform":null},{"column":"ScenarioEndTime","path":"$.customDimensions.scenarioEndTime","datatype":"","transform":null},{"column":"MetricCategorization","path":"$.customDimensions.metricCategorization","datatype":"","transform":null},{"column":"MetricName","path":"$.customDimensions.metricName","datatype":"","transform":null},{"column":"MetricValue","path":"$.customDimensions.metricValue","datatype":"","transform":null},{"column":"MetricUnit","path":"$.customDimensions.metricUnit","datatype":"","transform":null},{"column":"ExecutionSystem","path":"$.customDimensions.executionSystem","datatype":"","transform":null},{"column":"OperatingSystemPlatform","path":"$.customDimensions.operatingSystemPlatform","datatype":"","transform":null},{"column":"OperationId","path":"$.operation_Id","datatype":"","transform":null},{"column":"OperationParentId","path":"$.operation_ParentId","datatype":"","transform":null},{"column":"AppName","path":"$.appName","datatype":"","transform":null},{"column":"AppHost","path":"$.appHost","datatype":"","transform":null},{"column":"AppVersion","path":"$.customDimensions.appVersion","datatype":"","transform":null},{"column":"AppTelemetryVersion","path":"$.sdkVersion","datatype":"","transform":null},{"column":"Tags","path":"$.customDimensions.tags","datatype":"","transform":null},{"column":"CustomDimensions","path":"$.customDimensions","datatype":"","transform":null}]\'\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"create-data-connectors",children:"Create Data Connectors"}),"\n",(0,a.jsx)(t.p,{children:"The following steps describe the data connectors required to ingest data from the Event Hubs into the ADX tables."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Create Data Connector for Events Data"}),(0,a.jsx)(t.br,{}),"\n","This data connector ingests data from the 'telemetry-events' Event Hub into the VirtualClientEvents table. Use the following\nsettings during the creation of the data connector after you have selected the appropriate Event Hub information:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Event Hub = telemetry-events"}),"\n",(0,a.jsx)(t.li,{children:"Consumer group = adx-ingestion"}),"\n",(0,a.jsx)(t.li,{children:"Event system properties = 0/none"}),"\n",(0,a.jsx)(t.li,{children:"Compression = None"}),"\n",(0,a.jsx)(t.li,{children:"Assign managed identity = (the managed identity created above)"}),"\n",(0,a.jsx)(t.li,{children:"Table Name = Events (or whatever name was used above when creating the table)"}),"\n",(0,a.jsx)(t.li,{children:"Data format = JSON"}),"\n",(0,a.jsx)(t.li,{children:"Mapping name = IngestionMapping (or whatever name was used above when creating the ingestion JSON mapping)"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Create Data Connector for Logs/Traces Data"}),(0,a.jsx)(t.br,{}),"\n","This data connector ingests data from the 'telemetry-logs' Event Hub into the VirtualClientLogs table. Use the following\nsettings during the creation of the data connector after you have selected the appropriate Event Hub information:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Event Hub = telemetry-logs"}),"\n",(0,a.jsx)(t.li,{children:"Consumer group = adx-ingestion"}),"\n",(0,a.jsx)(t.li,{children:"Event system properties = 0/none"}),"\n",(0,a.jsx)(t.li,{children:"Compression = None"}),"\n",(0,a.jsx)(t.li,{children:"Assign managed identity = (the managed identity created above)"}),"\n",(0,a.jsx)(t.li,{children:"Table Name = Traces (or whatever name was used above when creating the table)"}),"\n",(0,a.jsx)(t.li,{children:"Data format = JSON"}),"\n",(0,a.jsx)(t.li,{children:"Mapping name = IngestionMapping (or whatever name was used above when creating the ingestion JSON mapping)"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Create Data Connector for Metrics Data"}),(0,a.jsx)(t.br,{}),"\n","This data connector ingests data from the 'telemetry-metrics' Event Hub into the VirtualClientMetrics table. Use the following\nsettings during the creation of the data connector after you have selected the appropriate Event Hub information:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Event Hub = telemetry-metrics"}),"\n",(0,a.jsx)(t.li,{children:"Consumer group = adx-ingestion"}),"\n",(0,a.jsx)(t.li,{children:"Event system properties = 0/none"}),"\n",(0,a.jsx)(t.li,{children:"Compression = None"}),"\n",(0,a.jsx)(t.li,{children:"Assign managed identity = (the managed identity created above)"}),"\n",(0,a.jsx)(t.li,{children:"Table Name = Metrics (or whatever name was used above when creating the table)"}),"\n",(0,a.jsx)(t.li,{children:"Data format = JSON"}),"\n",(0,a.jsx)(t.li,{children:"Mapping name = IngestionMapping (or whatever name was used above when creating the ingestion JSON mapping)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"configure-adx-cluster-ingestion-settings",children:"Configure ADX Cluster Ingestion Settings"}),"\n",(0,a.jsx)(t.p,{children:"The following steps configure the Azure Data Explorer (ADX) cluster data ingestion settings."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Configure the Ingestion Cadence"}),(0,a.jsx)(t.br,{}),"\n","Run the following command against the ADX cluster to configure how often the data ingestion jobs will run. ADX/Kusto can ingest\ndata in near-realtime intervals."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/data-explorer/kusto/management/batchingpolicy",children:"https://docs.microsoft.com/en-us/azure/data-explorer/kusto/management/batchingpolicy"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kusto",children:"// Update the ingestion batching policies on each of the databases. This updates the cadence for ingesting data \n// to be every 1 minute.\n.alter database {DatabaseName} policy ingestionbatching @\"{ 'MaximumBatchingTimeSpan': '00:01:00', 'MaximumNumberOfItems': 500, 'MaximumRawDataSizeMB': 1024 }\"\n\n// View the ingestion batching policy\n.show database {DatabaseName} policy ingestionbatching\n"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.ah)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>c});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(n),m=s,p=h["".concat(l,".").concat(m)]||h[m]||d[m]||i;return n?a.createElement(p,r(r({ref:t},u),{},{components:n})):a.createElement(p,r({ref:t},u))}));u.displayName="MDXCreateElement"},5949:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/eventhub-integration-1-71bfdd9bf8129bf173dc4e260c59a66e.png"},5798:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/eventhub-integration-2-612eb5fdb6b3c969802d581660c787b2.png"}}]);