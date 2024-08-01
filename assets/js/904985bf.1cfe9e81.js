"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[7116],{5801:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(4848),o=t(8453);const s={},r="Client/Server Support",a={id:"guides/0020-client-server",title:"Client/Server Support",description:'The Virtual Client supports workloads that run across more than 1 systems. These are often called "client/server" workloads. For example the networking',source:"@site/docs/guides/0020-client-server.md",sourceDirName:"guides",slug:"/guides/0020-client-server",permalink:"/VirtualClient/docs/guides/0020-client-server",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/guides/0020-client-server.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Profiles",permalink:"/VirtualClient/docs/guides/0011-profiles"},next:{title:"Run Commercial Workloads: Bring Your Own Package",permalink:"/VirtualClient/docs/guides/0030-commercial-workloads"}},l={},d=[{value:"Environment Layouts",id:"environment-layouts",level:2},{value:"Environment Layout Example",id:"environment-layout-example",level:2},{value:"Virtual Client REST API",id:"virtual-client-rest-api",level:2}];function h(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"clientserver-support",children:"Client/Server Support"}),"\n",(0,i.jsx)(n.p,{children:'The Virtual Client supports workloads that run across more than 1 systems. These are often called "client/server" workloads. For example the networking\nworkload suite requires 2 systems in order to operate the workload. One system performs the role of the "Client" and one the role of the "Server". The Client\nissues calls to the Server and both sides measure various aspects of network performance. The systems required to conduct client/server workloads cannot be easily\ndiscovered by the Virtual Client when the application starts. In order to describe the environment/systems involved, the Virtual Client must be passed an\n"environment layout" on the command line.'}),"\n",(0,i.jsx)(n.p,{children:"Note that the documentation for each profile will designate whether the workload or monitor requires or supports multi-system, client/server operations."}),"\n",(0,i.jsx)(n.h2,{id:"environment-layouts",children:"Environment Layouts"}),"\n",(0,i.jsx)(n.p,{children:"An environment layout is a file containing a description of all systems required by the workload operations. The description is JSON-formatted and provides additional\ninformation to the Virtual Client in support of the needs of the workload. The following table describes the parts of the JSON document and provides an example."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Required"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:'Defines the name/ID of the system. This is how the Virtual Client will "lookup itself" in the list of instances. If an agent ID is passed in on the command line, that is the name that should be used. Otherwise, the machine name (as defined by the operating system) should be used.'}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ipAddress"}),(0,i.jsx)(n.td,{children:"Defines the IP address of the system. Virtual Client instances use this IP address to"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'# The layout file path is passed in on the command line.\nVirtualClient.exe --profile=PERF-NETWORK.json --system=Demo --timeout=180 --layout="C:\\users\\any\\vc\\layout.json" --packages="{BlobStoreConnectionString|SAS URI}"\n\n# Contents of the \'layout.json\' file\n{\n    "clients": [\n        {\n            "name": "{agent_id_or_machine_name_1}",\n            "ipAddress": "{ip_address_1}",\n            "role": "{role_1}"\n        },\n        {\n            "name": "{agent_id_or_machine_name_2}",\n            "ipAddress": "{ip_address_2}",\n            "role": "{role_2}"\n        },\n        # ...N-additional clients in the environment\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"environment-layout-example",children:"Environment Layout Example"}),"\n",(0,i.jsx)(n.p,{children:'In client/server workloads, each client instance in the environment layout will have a specific "role" assigned. These roles are specific to each different\nworkload profile/workload and can be determined by looking at the documentation for that particular profile.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'# The following examples are JSON representation of an environment layout. Environment layouts are supplied to the \n# Virtual Client in a JSON file that is referenced on the command line.\n\n# Example Environment Layout 1\n# Command line reference to the environment layout:\nVirtualClient.exe --profile=PERF-NETWORK.json --system=Demo --timeout=1440 --layoutPath="C:\\any\\path\\to\\layout.json" --packages="{BlobStoreConnectionString|SAS URI}"\n\n# Contents of the \'layout.json\' file:\n# In the PERF-NETWORKING.json workload profile, there are 2 roles: Client and Server. They must be named exactly that in\n# the environment layout.\n{\n    "clients": [\n        {\n            "name": "vm-e46ae74e-0",\n            "role": "Client",\n            "privateIPAddress": "10.1.0.1"\n        },\n        {\n            "name": "vm-e46ae74e-1",\n            "role": "Server",\n            "privateIPAddress": "10.1.0.2"\n        }\n    ]\n}\n\n# Example Environment Layout 2\n# Command line reference to the environment layout:\nVirtualClient.exe --profile=PERF-WEB-NGINX.json --system=Demo --timeout=1440 --layoutPath="C:\\any\\path\\to\\layout.json" --packages="{BlobStoreConnectionString|SAS URI}"\n\n# Contents of the \'layout.json\' file:\n# In the PERF-WEB-NGINX.json workload profile, there are 3 possible roles: Client, Server and ReverseProxy. They must be named exactly that in\n# the environment layout.\n{\n    "clients": [\n        {\n            "name": "vm-e46ae74e-0",\n            "role": "Client",\n            "privateIPAddress": "10.1.0.1"\n        },\n        {\n            "name": "vm-e46ae74e-1",\n            "role": "Server",\n            "privateIPAddress": "10.1.0.2"\n        },\n        {\n            "name": "vm-e46ae74e-2",\n            "role": "ReverseProxy",\n            "privateIPAddress": "10.1.0.3"\n        }\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"virtual-client-rest-api",children:"Virtual Client REST API"}),"\n",(0,i.jsx)(n.p,{children:"The Virtual Client supports hosting a REST API within its process. The REST API enables instances of the Virtual Client running on different systems to communicate\nwith each other via HTTP protocol. For example, instances of the Virtual Client running in client/server scenarios often need the ability to determine if the other\ninstances are online and running, to send instructions and to save state in between important operations. The REST API provides endpoints for the following aspects\nrequired to facility reliable operations across different systems:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Heartbeats"}),(0,i.jsx)(n.br,{}),"\n","The heartbeat API is used by instances of the Virtual Client to determine when other instances of the application are online and running. This is often the very\nfirst thing that happens when multiple instances of the Virtual Client are trying to synchronize with each other."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Instructions/Eventing"}),(0,i.jsx)(n.br,{}),"\n","The instructions/eventing API is used by instances of the Virtual Client to send/receive instructions from other instances of the Virtual Client. For example, it\nis common for instances in a client role to send instructions to instances in the server role to indicate which server-side workloads to run."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"State"}),(0,i.jsx)(n.br,{}),"\n","The state API is used to enable instances of the Virtual Client to save information that can be used at later points to make decisions on the order of operations.\nThis is often used for example by instances in the server role to persist information that the client instances can poll for when making decisions on the execution\nof client-side workloads."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The Virtual Client REST API runs on port 4500 by default and is listening for basic HTTP traffic on that port. In order to communicate on this port, the firewall on\nthe system must be modified to allow for it. This means that any client/server workload that will be utilizing the REST API ",(0,i.jsx)(n.strong,{children:"MUST be run in elevated/privileged mode"}),".\nOn Windows systems, the workload should be ran under an account with access to modify the firewall settings or with 'Administrative' privileges. Similarly, on Linux systems,\nthe workload should be ran under an account with access to modify the firewall settings or with ",(0,i.jsx)(n.code,{children:"sudo"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The port in wich the REST API uses can be changed if needed. For example, it is possible that some other application running on the system is already using the default\nport. The following examples illustrate how to use a different port:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/VirtualClient/docs/guides/0010-command-line",children:"Command Line Options"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Use a different port by specifying the --api-port\nVirtualClient.exe --profile=PERF-NETWORK.json --system=Demo --timeout=1440 --api-port=4501 --layoutPath="C:\\any\\path\\to\\layout.json" --packages="{BlobStoreConnectionString|SAS URI}"\n\n# Use a different port for each of the workload roles\nVirtualClient.exe --profile=PERF-NETWORK.json --system=Demo --timeout=1440 --api-port=4501/Client,4502/Server --layoutPath="C:\\any\\path\\to\\layout.json" --packages="{BlobStoreConnectionString|SAS URI}"\n'})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);