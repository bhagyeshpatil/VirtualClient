"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[4313],{4756:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var s=i(4848),r=i(8453);const t={},l="SPECviewperf Workload Profiles",o={id:"workloads/specview/specview-profiles",title:"SPECviewperf Workload Profiles",description:"The following profile runs the SPECviewperf Workloads.",source:"@site/docs/workloads/specview/specview-profiles.md",sourceDirName:"workloads/specview",slug:"/workloads/specview/specview-profiles",permalink:"/VirtualClient/docs/workloads/specview/specview-profiles",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/specview/specview-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SPECviewperf",permalink:"/VirtualClient/docs/workloads/specview/"},next:{title:"Stress-ng",permalink:"/VirtualClient/docs/workloads/stress-ng/"}},c={},d=[{value:"PERF-GPU-SPECVIEW-AMD.json",id:"perf-gpu-specview-amdjson",level:2}];function a(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"specviewperf-workload-profiles",children:"SPECviewperf Workload Profiles"}),"\n",(0,s.jsx)(n.p,{children:"The following profile runs the SPECviewperf Workloads."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/VirtualClient/docs/workloads/specview/",children:"Workload Details"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"perf-gpu-specview-amdjson",children:"PERF-GPU-SPECVIEW-AMD.json"}),"\n",(0,s.jsx)(n.p,{children:"Runs the stock SPECviewperf Workloads."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-GPU-SPECVIEW-AMD.json",children:"Workload Profile"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Supported Platform/Architectures"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"win-x64"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Supports Disconnected Scenarios"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No. Internet connection required."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Dependencies"}),(0,s.jsx)(n.br,{}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Internet connection."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/",children:"Installing Dependencies"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Profile Parameters"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Purpose"}),(0,s.jsx)(n.th,{children:"Default Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GpuModel"}),(0,s.jsx)(n.td,{children:"Required. Specify which GPU driver should be installed. Currently supports [AMD v620, AMD mi25]"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Viewsets"}),(0,s.jsxs)(n.td,{children:["Optional. Specify which particular benchmarks should be run. See the list of viewsets in the ",(0,s.jsx)(n.a,{href:"https://gwpg.spec.org/benchmarks/benchmark/specviewperf-2020-v3-1/",children:"Workload Details"})," section."]}),(0,s.jsx)(n.td,{children:'"3dsmax,catia"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PsExecSession"}),(0,s.jsx)(n.td,{children:"Optional. If specified, specviewperf will be started by PsExec in the specified session."}),(0,s.jsx)(n.td,{children:"-1, specviewperf runs in the current session without psExec."})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Profile Runtimes"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The SPECviewperf package zip file is around 30GB. Downloading and extracting this file take about 30 minutes to complete."}),"\n",(0,s.jsx)(n.li,{children:"Each SPECviewperf viewset takes about 5 min to complete on a machine with a single AMD v620 GPU. Running all eight viewsets takes about 40 minutes to complete."}),"\n",(0,s.jsx)(n.li,{children:"The exact numbers may vary depending on the system and the internet performance."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage Examples"}),(0,s.jsx)(n.br,{}),"\n","The following section provides a few basic examples of how to use the workload profile."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Execute the workload profile\nVirtualClient.exe --profile=PERF-GPU-SPECVIEW-AMD.json --pm="GpuModel=v620" --system=Demo --packageStore="{BlobConnectionString|SAS Uri}"\n\n# Override the profile default parameters to include all viewsets\nVirtualClient.exe --profile=PERF-GPU-SPECVIEW-AMD.json --pm="GpuModel=v620,,,Viewset=3dsmax,catia,creo,energy,maya,medical,snx,sw" --system=Demo --packageStore="{BlobConnectionString|SAS Uri}"\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);