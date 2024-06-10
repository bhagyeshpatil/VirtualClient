"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[2790],{7090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(5893),o=n(3905);const r={},i="Workload Selection Recommendations",a={id:"developing/0060-workload-recommendations",title:"Workload Selection Recommendations",description:"The following documentation provides guidance on the practices and fundamentals to consider when selecting (or creating) workload software",source:"@site/docs/developing/0060-workload-recommendations.md",sourceDirName:"developing",slug:"/developing/0060-workload-recommendations",permalink:"/VirtualClient/docs/developing/0060-workload-recommendations",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/developing/0060-workload-recommendations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Profiler Integration",permalink:"/VirtualClient/docs/developing/0050-develop-profiling-monitor"},next:{title:"Building Docker Containers",permalink:"/VirtualClient/docs/developing/0061-build-docker-container"}},l={},d=[{value:"Signs of a Good Workload",id:"signs-of-a-good-workload",level:2},{value:"Runs Consistently Reliable Tests",id:"runs-consistently-reliable-tests",level:4},{value:"Runs Consistently Repeatable Tests",id:"runs-consistently-repeatable-tests",level:4},{value:"Produces Objective Results",id:"produces-objective-results",level:4},{value:"Produces Structured Results",id:"produces-structured-results",level:4},{value:"Is Easy to Integrate with Other Systems",id:"is-easy-to-integrate-with-other-systems",level:4},{value:"Additional Considerations",id:"additional-considerations",level:2},{value:"Simple Command Line Tools are Preferred",id:"simple-command-line-tools-are-preferred",level:4},{value:"Written in a Cross-Platform Programming/Scripting Language",id:"written-in-a-cross-platform-programmingscripting-language",level:4},{value:"The Workload Application is Parameterized",id:"the-workload-application-is-parameterized",level:4},{value:"The Workload Application Produces a Consistent Steady-State",id:"the-workload-application-produces-a-consistent-steady-state",level:4},{value:"Runs the Same Test Every Time Given Exact Settings",id:"runs-the-same-test-every-time-given-exact-settings",level:4},{value:"The Workload Application Should be Versioned",id:"the-workload-application-should-be-versioned",level:4}];function c(e){const t={h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",ul:"ul",...(0,o.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"workload-selection-recommendations",children:"Workload Selection Recommendations"}),"\n",(0,s.jsx)(t.p,{children:"The following documentation provides guidance on the practices and fundamentals to consider when selecting (or creating) workload software\nfor the purpose of qualifying hardware systems. Good workloads are easier to onboard into the Virtual Client platform and offer better return\non investment for the work involved. There are thousands of options available, but not all of them are as well-designed. This simple guide will help."}),"\n",(0,s.jsx)(t.h2,{id:"signs-of-a-good-workload",children:"Signs of a Good Workload"}),"\n",(0,s.jsx)(t.p,{children:"The following sections describes some of the aspects of good options for workload software. At a high-level, a good workload:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.h4,{id:"runs-consistently-reliable-tests",children:"Runs Consistently Reliable Tests"}),"\n",(0,s.jsx)(t.p,{children:"The workload tests can be run consistently reliably. Tests that cannot consistently produce results time and time again produce\ntoo much variation (noise) in the outcomes to be used to accurately gauge the state of a system under test. This is about code quality and defensive\nprogramming in many ways."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.h4,{id:"runs-consistently-repeatable-tests",children:"Runs Consistently Repeatable Tests"}),"\n",(0,s.jsx)(t.p,{children:"Workload test results should be consistently repeatable. This means that the same tests run on the same system\nover and over should produce similar results given nothing has changed on the system under test. This is not to say that the results will be identical\nbut that the standard deviation of the results would be generally small given all other things being equal on the system."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.h4,{id:"produces-objective-results",children:"Produces Objective Results"}),"\n",(0,s.jsx)(t.p,{children:"The workload tests should produce definitive and objective results. The results should not make estimations as a general rule but should\ninstead attempt to measure facets of the system that are based on hardened and vetted patterns, practices and software. For example, on a Windows system\nthe performance counter and ETW sub-systems are highly refined and reliable. A workload can confidently rely upon performance counters to measure many performance\ncharacteristics of the system in a precise manner."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.h4,{id:"produces-structured-results",children:"Produces Structured Results"}),"\n",(0,s.jsx)(t.p,{children:"Workload results produced should be in a structured format. This makes it easy for the results to be parsed for meaningful\ninsights and aggregations."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.h4,{id:"is-easy-to-integrate-with-other-systems",children:"Is Easy to Integrate with Other Systems"}),"\n",(0,s.jsx)(t.p,{children:"Good workloads are generally easy to use thus making it easy to integrate into the larger execution system. This reduces the overhead required for\nteams to onboard new and valueable test scenarios."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"additional-considerations",children:"Additional Considerations"}),"\n",(0,s.jsx)(t.p,{children:"The following section offers a few other recommendations when selecting a workload for easy integrated into the Virtual Client."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.h4,{id:"simple-command-line-tools-are-preferred",children:"Simple Command Line Tools are Preferred"}),"\n",(0,s.jsx)(t.p,{children:"All platforms support executables and there is a lot of of pre-existing OS/systems integration support. Command line executables can typically be compiled\nto support multiple OS platforms (Windows vs. Linux) as well as CPU architectures. Command line executables are easy to port around (e.g. copy, download etc...).\nWorkloads that require GUI support should be generally avoided as they introduce significant challenges for automation. They are often difficult to\nintegrate into automation workflows and may not even run in certain server OS environments."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.h4,{id:"written-in-a-cross-platform-programmingscripting-language",children:"Written in a Cross-Platform Programming/Scripting Language"}),"\n",(0,s.jsx)(t.p,{children:"A good workload can run on different operating systems (e.g. Linux, Windows). This ensures versatility and coverage for a wider range of customer scenarios."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.h4,{id:"the-workload-application-is-parameterized",children:"The Workload Application is Parameterized"}),"\n",(0,s.jsx)(t.p,{children:"In order to ensure that the workload can support all necessary scenarios and configuration requirements, the workload should allow all important\nsettings to be provided (ideally on the command line)."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.h4,{id:"the-workload-application-produces-a-consistent-steady-state",children:"The Workload Application Produces a Consistent Steady-State"}),"\n",(0,s.jsx)(t.p,{children:'As mentioned above, the workload should produce consistent and reliable results. The best workloads run a "steady-state" test. A steady state\ntest will run the exact same execution workflow each time given the same settings are provided. The tests should not generally be based on algorithms that cannot produce\na steady state time and time again. Tests should also avoid testing aspects of the system that are themselves highly variable. Highly variable algorithms or aspects\nwill inevitably produce highly variable results. These results will make it difficult to ascertain differences in the system performance when changes\nare made to the system under test.'}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.h4,{id:"runs-the-same-test-every-time-given-exact-settings",children:"Runs the Same Test Every Time Given Exact Settings"}),"\n",(0,s.jsx)(t.p,{children:"A workload should run the exact same test every time given a set of specific settings. The tests ran should vary only when the settings supplied on the\ncommand line have changed."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.h4,{id:"the-workload-application-should-be-versioned",children:"The Workload Application Should be Versioned"}),"\n",(0,s.jsx)(t.p,{children:"This somewhat goes without saying, but the workload software should employ a proper versioning system."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.ah)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>d});var s=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=s.createContext({}),d=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),h=d(n),p=o,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||r;return n?s.createElement(m,i(i({ref:t},u),{},{components:n})):s.createElement(m,i({ref:t},u))}));u.displayName="MDXCreateElement"}}]);