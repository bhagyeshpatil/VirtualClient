"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[829],{6622:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=t(4848),s=t(8453);const i={},o="AspNetBench Workload Profiles",l={id:"workloads/aspnetbench/aspnetbench-profiles",title:"AspNetBench Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the AspNetBench workload.",source:"@site/docs/workloads/aspnetbench/aspnetbench-profiles.md",sourceDirName:"workloads/aspnetbench",slug:"/workloads/aspnetbench/aspnetbench-profiles",permalink:"/VirtualClient/docs/workloads/aspnetbench/aspnetbench-profiles",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/aspnetbench/aspnetbench-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AspNetBenchmark",permalink:"/VirtualClient/docs/workloads/aspnetbench/"},next:{title:"Blender Benchmark",permalink:"/VirtualClient/docs/workloads/blenderbenchmark/"}},c={},a=[{value:"PERF-ASPNETBENCH.json",id:"perf-aspnetbenchjson",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"aspnetbench-workload-profiles",children:"AspNetBench Workload Profiles"}),"\n",(0,r.jsx)(n.p,{children:"The following profiles run customer-representative or benchmarking scenarios using the AspNetBench workload."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/VirtualClient/docs/workloads/aspnetbench/",children:"Workload Details"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"perf-aspnetbenchjson",children:"PERF-ASPNETBENCH.json"}),"\n",(0,r.jsx)(n.p,{children:"Runs the AspNetBench benchmark workload to assess the performance of an ASP.NET Server."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-ASPNETBENCH.json",children:"Workload Profile"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Supported Platform/Architectures"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"linux-x64"}),"\n",(0,r.jsx)(n.li,{children:"linux-arm64"}),"\n",(0,r.jsx)(n.li,{children:"win-x64"}),"\n",(0,r.jsx)(n.li,{children:"win-arm64"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Supports Disconnected Scenarios"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No. Internet connection required."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Dependencies"}),(0,r.jsx)(n.br,{}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Internet connection."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/",children:"Installing Dependencies"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Profile Parameters"}),(0,r.jsx)(n.br,{}),"\n","The following parameters can be optionally supplied on the command line to modify the behaviors of the workload."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Purpose"}),(0,r.jsx)(n.th,{children:"Default Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"DotNetVersion"}),(0,r.jsxs)(n.td,{children:["Optional. The version of the ",(0,r.jsx)(n.a,{href:"https://dotnet.microsoft.com/en-us/download/visual-studio-sdks",children:".NET SDK to download and install"}),"."]}),(0,r.jsx)(n.td,{children:"7.0.100"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TargetFramework"}),(0,r.jsxs)(n.td,{children:["Optional. The ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/standard/frameworks",children:".NET target framework"})," to run (e.g. net6.0, net7.0)."]}),(0,r.jsx)(n.td,{children:"net7.0"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Profile Runtimes"}),(0,r.jsx)(n.br,{}),"\n","See the 'Metadata' section of the profile for estimated runtimes. These timings represent the length of time required to run a single round of profile\nactions. These timings can be used to determine minimum required runtimes for the Virtual Client in order to get results. These are often estimates based on the\nnumber of system cores."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Usage Examples"}),(0,r.jsx)(n.br,{}),"\n","The following section provides a few basic examples of how to use the workload profile."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Execute the workload profile\nVirtualClient.exe --profile=PERF-ASPNETBENCH.json --system=Demo --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n\n# Override the profile default parameters to use a different .NET SDK version\nVirtualClient.exe --profile=PERF-ASPNETBENCH.json --system=Demo --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}" --parameters="DotNetVersion=7.0.307"\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(6540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);