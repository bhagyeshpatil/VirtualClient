"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[1752],{8332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(5893),s=n(3905);const i={},o="Memcached Workload Profiles",l={id:"workloads/memcached/memcached-profiles",title:"Memcached Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the Memtier workload against a",source:"@site/docs/workloads/memcached/memcached-profiles.md",sourceDirName:"workloads/memcached",slug:"/workloads/memcached/memcached-profiles",permalink:"/VirtualClient/docs/workloads/memcached/memcached-profiles",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/memcached/memcached-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Memcached",permalink:"/VirtualClient/docs/workloads/memcached/"},next:{title:"MLPerf",permalink:"/VirtualClient/docs/workloads/mlperf/"}},a={},c=[{value:"Client/Server Topology Support",id:"clientserver-topology-support",level:2},{value:"PERF-MEMCACHED.json",id:"perf-memcachedjson",level:2}];function d(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"memcached-workload-profiles",children:"Memcached Workload Profiles"}),"\n",(0,r.jsx)(t.p,{children:"The following profiles run customer-representative or benchmarking scenarios using the Memtier workload against a\nMemcached server."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/VirtualClient/docs/workloads/memcached/",children:"Workload Details"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/VirtualClient/docs/guides/0020-client-server",children:"Client/Server Workloads"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"clientserver-topology-support",children:"Client/Server Topology Support"}),"\n",(0,r.jsx)(t.p,{children:"Memcached workload profiles support running the workload on both a single system as well as in a client/server topology. This means that the workload supports\noperation on a single system or on 2 distinct systems. The client/server topology is typically used when it is desirable to include a network component in the\noverall performance evaluation. In a client/server topology, one system operates in the 'Client' role making calls to the system operating in the 'Server' role.\nThe Virtual Client instances running on the client and server systems will synchronize with each other before running the workload. In order to support a client/server topology,\nan environment layout file MUST be supplied to each instance of the Virtual Client on the command line to describe the IP address/location of other Virtual Client instances. An\nenvironment layout file is not required for the single system topology."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/VirtualClient/docs/guides/0020-client-server",children:"Environment Layouts"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:'In the environment layout file provided to the Virtual Client, define the role of the client system/VM as "Client" and the role of the server system(s)/VM(s) as "Server".\nThe spelling of the roles must be exact. The IP addresses of the systems/VMs must be correct as well. The following example illustrates the\nidea. The name of the client must match the name of the system or the value of the agent ID passed in on the command line.'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# Single System (environment layout not required)\n./VirtualClient --profile=PERF-MEMCACHED.json --system=Demo --timeout=1440\n\n# Multi-System\n# On Client role system...\n./VirtualClient --profile=PERF-MEMCACHED.json --system=Demo --timeout=1440 --clientId=Client01 --layoutPath=/any/path/to/layout.json\n\n# On Server role system...\n./VirtualClient --profile=PERF-MEMCACHED.json --system=Demo --timeout=1440 --clientId=Server01 --layoutPath=/any/path/to/layout.json\n\n# Example contents of the \'layout.json\' file:\n{\n    "clients": [\n        {\n            "name": "Client01",\n            "role": "Client",\n            "ipAddress": "10.1.0.1"\n        },\n        {\n            "name": "Server01",\n            "role": "Server",\n            "ipAddress": "10.1.0.2"\n        }\n    ]\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"perf-memcachedjson",children:"PERF-MEMCACHED.json"}),"\n",(0,r.jsx)(t.p,{children:"Runs the Memtier workload against to generate various network traffic patterns against a Memcached server."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-MEMCACHED.json",children:"Workload Profile"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Supported Platform/Architectures"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"linux-x64"}),"\n",(0,r.jsx)(t.li,{children:"linux-arm64"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Supports Disconnected Scenarios"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"No. Internet connection required."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Dependencies"}),(0,r.jsx)(t.br,{}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Internet connection."}),"\n",(0,r.jsx)(t.li,{children:"The IP addresses defined in the environment layout (see above) for the Client and Server systems must be correct."}),"\n",(0,r.jsx)(t.li,{children:"The name of the Client and Server instances defined in the environment layout must match the agent/client IDs supplied on the command line (e.g. --agentId)\nor must match the name of the system as defined by the operating system itself."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/",children:"Installing Dependencies"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Profile Parameters"}),(0,r.jsx)(t.br,{}),"\n","The following parameters can be optionally supplied on the command line to modify the behaviors of the workload."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Purpose"}),(0,r.jsx)(t.th,{children:"Default Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Username"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)("mark",{children:"Required when Virtual Client itself is launched by any process running as 'root' (e.g. a daemon)."}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Defines a specific username under which to run the Memcached server."]}),(0,r.jsx)(t.td,{children:"The user account for the process that launches Virtual Client."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ClientInstances"}),(0,r.jsx)(t.td,{children:"Optional. Defines the number of distinct client instances that to execute requests against the server concurrently."}),(0,r.jsx)(t.td,{children:"8"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"EmitAggregateMetrics"}),(0,r.jsx)(t.td,{children:'Optional. "True" to emit aggregate/rollup metrics from all individual Memtier client/Redis server request streams. The profile executes a Redis server per logical processor on the system and can thus emit a lot of metrics. As such emitting the metrics as aggregates of all Redis server processes may be desirable.'}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"EmitRawMetrics"}),(0,r.jsx)(t.td,{children:'Optional. "True" to emit the raw metrics from each individual Memtier client/Redis server request stream. This is the default option..'}),(0,r.jsx)(t.td,{children:"true"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Duration"}),(0,r.jsx)(t.td,{children:"Optional. Defines the length of time to execute the Memtier benchmark operations against the Memcached server for each scenario in the profile."}),(0,r.jsx)(t.td,{children:"2 mins"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ServerMaxConnections"}),(0,r.jsx)(t.td,{children:"Optional. The Maxium number of connections the Memcached server will allow. This allows the user to adjust alongside the number of client instances for higher scale situations."}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ServerPort"}),(0,r.jsx)(t.td,{children:"Optional. The initial port on which the Memcached server will listen for traffic."}),(0,r.jsx)(t.td,{children:"6379"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Component Parameters"}),(0,r.jsx)(t.br,{}),"\n","The following parameters describe the parameters within the profile components."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Server Role Parameter"}),(0,r.jsx)(t.th,{children:"Purpose"}),(0,r.jsx)(t.th,{children:"Default Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Scenario"}),(0,r.jsx)(t.td,{children:"Scenario use to define the purpose of the action in the profile. This can be used to specify exact actions to run or exclude from the profile."}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"BindToCores"}),(0,r.jsx)(t.td,{children:"True to instruct the Memcached servers to bind to explicit cores on the system (e.g. 0, 1, 2, 3 )"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CommandLine"}),(0,r.jsx)(t.td,{children:"The command line to use for executing the Memcached server."}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PackageName"}),(0,r.jsx)(t.td,{children:"The name of the package that contains the Memcached server binaries/scripts."}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Port"}),(0,r.jsx)(t.td,{children:"The initial port on which the Memcached servers will listen for traffic. Additional ports will be used for each 1 server instance defined in a sequental manner (e.g. 6379, 6380, 6381)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ServerThreadCount"}),(0,r.jsx)(t.td,{children:"The number of threads to use by the Memcached server to handle operations."}),(0,r.jsx)(t.td,{children:"4"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ServerMaxConnections"}),(0,r.jsx)(t.td,{children:"The maximum number of connections the Memcached server will allow in total."}),(0,r.jsx)(t.td,{children:"16384"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Username"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)("mark",{children:"Required when Virtual Client itself is launched by any process running as 'root' (e.g. a daemon)."}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Defines a specific username under which to run the Memcached server."]}),(0,r.jsx)(t.td,{children:"The user account for the process that launches Virtual Client."})]})]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Client Role Parameter"}),(0,r.jsx)(t.th,{children:"Purpose"}),(0,r.jsx)(t.th,{children:"Default Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Scenario"}),(0,r.jsx)(t.td,{children:"Scenario use to define the purpose of the action in the profile. This can be used to specify exact actions to run or exclude from the profile."}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ClientInstances"}),(0,r.jsx)(t.td,{children:"Defines the number of concurrent Memtier processes to start for execution of requests against the Memcached server. Note that each client instance will open 1 connection against the server for each --thread and --clients definition (e.g. --threads 16 --clients 16 == 256 connections). Ensure the Memcached server OS limits exceed this number of connections (e.g. ulimit -Sn on Linux)."}),(0,r.jsx)(t.td,{children:"8"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"EmitAggregateMetrics"}),(0,r.jsx)(t.td,{children:'Optional. "True" to emit aggregate/rollup metrics from all individual Memtier client/Redis server request streams. The profile executes a Redis server per logical processor on the system and can thus emit a lot of metrics. As such emitting the metrics as aggregates of all Redis server processes may be desirable.'}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"EmitRawMetrics"}),(0,r.jsx)(t.td,{children:'Optional. "True" to emit the raw metrics from each individual Memtier client/Redis server request stream. This is the default option..'}),(0,r.jsx)(t.td,{children:"true"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CommandLine"}),(0,r.jsx)(t.td,{children:"The command line to use for executing the Memtier workload against the Memcached server. Note that the --port and --server options will be added automatically by the executor. For the --key-pattern option, 'S' means sequential distribution, 'R' means uniform random distribution and 'G' means Gaussian distribution of object."}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PackageName"}),(0,r.jsx)(t.td,{children:"The name of the package that contains the Memtier benchmark binaries/scripts."}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"WarmUp"}),(0,r.jsx)(t.td,{children:"True if the component/action is meant to be used to warmup the Memcached server. Metrics will not be captured in warmup steps."}),(0,r.jsx)(t.td,{children:"false"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Profile Runtimes"}),(0,r.jsx)(t.br,{}),"\n","See the 'Metadata' section of the profile for estimated runtimes. These timings represent the length of time required to run a single round of profile\nactions. These timings can be used to determine minimum required runtimes for the Virtual Client in order to get results. These are often estimates based on the\nnumber of system cores."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Usage Examples"}),(0,r.jsx)(t.br,{}),"\n","The following section provides a few basic examples of how to use the workload profile."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# When running on a single system (environment layout not required)\n./VirtualClient --profile=PERF-MEMCACHED.json --system=Demo --timeout=250 --packageStore="{BlobConnectionString|SAS Uri}"\n\n# When running in a client/server environment\n./VirtualClient --profile=PERF-MEMCACHED.json --system=Demo --timeout=1440 --clientId=Client01 --parameters="Username=testuser" --layoutPath="/any/path/to/layout.json" --packageStore="{BlobConnectionString|SAS Uri}"\n./VirtualClient --profile=PERF-MEMCACHED.json --system=Demo --timeout=1440 --clientId=Server01 --parameters="Username=testuser" --layoutPath="/any/path/to/layout.json" --packageStore="{BlobConnectionString|SAS Uri}"\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>c});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,a=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=s,p=m["".concat(a,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(p,o(o({ref:t},h),{},{components:n})):r.createElement(p,o({ref:t},h))}));h.displayName="MDXCreateElement"}}]);