"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[2345],{1293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var i=n(4848),o=n(8453);const l={},r="Install Chocolatey",s={id:"dependencies/0020-install-chocolatey",title:"Install Chocolatey",description:"Virtual Client has a dependency component that can be added to a workload or monitor profile to install dependency packages from a package store. The following section illustrates the",source:"@site/docs/dependencies/0020-install-chocolatey.md",sourceDirName:"dependencies",slug:"/dependencies/0020-install-chocolatey",permalink:"/VirtualClient/docs/dependencies/0020-install-chocolatey",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/dependencies/0020-install-chocolatey.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Install Snap Packages",permalink:"/VirtualClient/docs/dependencies/0011-install-snap-packages"},next:{title:"Installation Chocolatey Packages",permalink:"/VirtualClient/docs/dependencies/0030-install-chocolatey-packages"}},a={},c=[{value:"Supported Platform/Architectures",id:"supported-platformarchitectures",level:2},{value:"Profile Component Parameters",id:"profile-component-parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"install-chocolatey",children:"Install Chocolatey"}),"\n",(0,i.jsx)(t.p,{children:"Virtual Client has a dependency component that can be added to a workload or monitor profile to install dependency packages from a package store. The following section illustrates the\ndetails for integrating this into the profile."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://chocolatey.org/",children:"Chocolatey Official Page"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://community.chocolatey.org/packages",children:"Chocolatey Packages"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"supported-platformarchitectures",children:"Supported Platform/Architectures"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"win-x64"}),"\n",(0,i.jsx)(t.li,{children:"win-arm64"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"profile-component-parameters",children:"Profile Component Parameters"}),"\n",(0,i.jsx)(t.p,{children:"The following section describes the parameters used by the individual component in the profile."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Parameter"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Required"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Description"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PackageName"}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:"The logical name of the package that will be registered with the Virtual Client runtime. This name can be used by other profile components to reference the installation parent directory location for Chocolatey."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Scenario"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"A name/identifier for the specific component in the profile. This is used for telemetry purposes only with components in dependency sections of the profile (i.e. cannot be used with --scenarios option on the command line)."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"The following sections provides examples for how to integrate the component into a profile."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-CPU-LAPACK.json",children:"Profile Example"})}),"\n",(0,i.jsx)("div",{class:"code-section",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "Type": "ChocolateyInstallation",\n    "Parameters": {\n        "Scenario": "InstallChocolatey",\n        "PackageName": "choco"\n    }\n}\n'})})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(6540);const o={},l=i.createContext(o);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);