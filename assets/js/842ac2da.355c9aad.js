"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[4174],{9509:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=s(4848),d=s(8453);const i={},n="CoreMark",c={id:"workloads/coremark/coremark",title:"CoreMark",description:"CoreMark is a third party tool that runs a set of benchmark tests in order to measure CPU performance. CoreMark is a preferred CPU benchmarking",source:"@site/docs/workloads/coremark/coremark.md",sourceDirName:"workloads/coremark",slug:"/workloads/coremark/",permalink:"/VirtualClient/docs/workloads/coremark/",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/coremark/coremark.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pbzip2",permalink:"/VirtualClient/docs/workloads/compression/pbzip2"},next:{title:"CoreMark Workload Profiles",permalink:"/VirtualClient/docs/workloads/coremark/coremark-profiles"}},l={},h=[{value:"What is Being Measured?",id:"what-is-being-measured",level:2},{value:"Workload Metrics",id:"workload-metrics",level:2},{value:"Workload Metrics",id:"workload-metrics-1",level:2}];function o(e){const r={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"coremark",children:"CoreMark"}),"\n",(0,t.jsx)(r.p,{children:"CoreMark is a third party tool that runs a set of benchmark tests in order to measure CPU performance. CoreMark is a preferred CPU benchmarking\ntoolset because it is compiled to be specialized for the exact physical characteristics of the CPU on the system."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://www.eembc.org/coremark/",children:"CoreMark Documentation"})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"what-is-being-measured",children:"What is Being Measured?"}),"\n",(0,t.jsx)(r.p,{children:"CoreMark is designed to be a very simple benchmarking tool. It produces a single-number score that allows users to make quick comparisons\nbetween different processors. CoreMark is compiled on the system for which it will run in order to establish a precise test to evaluate the performance\nof the CPU."}),"\n",(0,t.jsx)(r.p,{children:"CoreMark runs the following CPU-intensive algorithms in order to produce the single-number score."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"List Processing"}),(0,t.jsx)(r.td,{children:"Find and sort algorithm(s)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Matrix Manipulation"}),(0,t.jsx)(r.td,{children:"Common matrix operations"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"State Machine"}),(0,t.jsx)(r.td,{children:"Determine if an input stream contains valid numbers"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CRC"}),(0,t.jsx)(r.td,{children:"Cyclic redundancy check"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"workload-metrics",children:"Workload Metrics"}),"\n",(0,t.jsx)(r.p,{children:"The following metrics are examples of those captured by the Virtual Client when running the CoreMark workload."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Tool Name"}),(0,t.jsx)(r.th,{children:"Metric Name"}),(0,t.jsx)(r.th,{children:"Example Value (min)"}),(0,t.jsx)(r.th,{children:"Example Value (max)"}),(0,t.jsx)(r.th,{children:"Example Value (avg)"}),(0,t.jsx)(r.th,{children:"Unit"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"CoreMark Size"}),(0,t.jsx)(r.td,{children:"666.0"}),(0,t.jsx)(r.td,{children:"666.0"}),(0,t.jsx)(r.td,{children:"666.0"}),(0,t.jsx)(r.td,{children:"bytes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"Iterations"}),(0,t.jsx)(r.td,{children:"400000.0"}),(0,t.jsx)(r.td,{children:"800000.0"}),(0,t.jsx)(r.td,{children:"773160.1731601731"}),(0,t.jsx)(r.td,{children:"iterations"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"Iterations/Sec"}),(0,t.jsx)(r.td,{children:"19968.051118"}),(0,t.jsx)(r.td,{children:"33889.689062"}),(0,t.jsx)(r.td,{children:"33081.75554433839"}),(0,t.jsx)(r.td,{children:"iterations/sec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"Parallel PThreads"}),(0,t.jsx)(r.td,{children:"2.0"}),(0,t.jsx)(r.td,{children:"2.0"}),(0,t.jsx)(r.td,{children:"2.0"}),(0,t.jsx)(r.td,{children:"threads"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"Total ticks"}),(0,t.jsx)(r.td,{children:"12022.0"}),(0,t.jsx)(r.td,{children:"36126.0"}),(0,t.jsx)(r.td,{children:"23365.67617325762"}),(0,t.jsx)(r.td,{children:"ticks"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"Total time (secs)"}),(0,t.jsx)(r.td,{children:"12.022"}),(0,t.jsx)(r.td,{children:"36.126"}),(0,t.jsx)(r.td,{children:"23.365676173257606"}),(0,t.jsx)(r.td,{children:"secs"})]})]})]}),"\n",(0,t.jsx)(r.h1,{id:"coremark-pro",children:"CoreMark-Pro"}),"\n",(0,t.jsx)(r.p,{children:"CoreMark-PRO is a comprehensive, advanced processor benchmark that works with and enhances the market-proven industry-standard EEMBC CoreMark\xae benchmark. While CoreMark stresses the CPU pipeline, CoreMark-Pro tests the entire processor, adding comprehensive support for multicore technology, a combination of integer and floating-point workloads, and data sets for utilizing larger memory subsystems. Together, EEMBC CoreMark and CoreMark-PRO provide a standard benchmark covering the spectrum from low-end microcontrollers to high-performance computing processors."}),"\n",(0,t.jsx)(r.h2,{id:"workload-metrics-1",children:"Workload Metrics"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Tool Name"}),(0,t.jsx)(r.th,{children:"Metric Name"}),(0,t.jsx)(r.th,{children:"Example Value"}),(0,t.jsx)(r.th,{children:"Unit"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"MultiCore-cjpeg-rose7-preset"}),(0,t.jsx)(r.td,{children:"555.56"}),(0,t.jsx)(r.td,{children:"iterations/sec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"MultiCore-cjpeg-rose7-preset"}),(0,t.jsx)(r.td,{children:"156.25"}),(0,t.jsx)(r.td,{children:"iterations/sec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"MultiCore-cjpeg-rose7-preset"}),(0,t.jsx)(r.td,{children:"3.56"}),(0,t.jsx)(r.td,{children:"scale"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"core"}),(0,t.jsx)(r.td,{children:"4.87"}),(0,t.jsx)(r.td,{children:"iterations/sec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"core"}),(0,t.jsx)(r.td,{children:"1.30"}),(0,t.jsx)(r.td,{children:"iterations/sec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"core"}),(0,t.jsx)(r.td,{children:"3.75"}),(0,t.jsx)(r.td,{children:"scale"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"linear_alg-mid-100x100-sp"}),(0,t.jsx)(r.td,{children:"1428.57"}),(0,t.jsx)(r.td,{children:"iterations/sec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"linear_alg-mid-100x100-sp"}),(0,t.jsx)(r.td,{children:"409.84"}),(0,t.jsx)(r.td,{children:"iterations/sec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"linear_alg-mid-100x100-sp"}),(0,t.jsx)(r.td,{children:"3.49"}),(0,t.jsx)(r.td,{children:"scale"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"loops-all-mid-10k-sp"}),(0,t.jsx)(r.td,{children:"22.56"}),(0,t.jsx)(r.td,{children:"iterations/sec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"loops-all-mid-10k-sp"}),(0,t.jsx)(r.td,{children:"6.25"}),(0,t.jsx)(r.td,{children:"iterations/sec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"loops-all-mid-10k-sp"}),(0,t.jsx)(r.td,{children:"3.61"}),(0,t.jsx)(r.td,{children:"scale"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"nnet_test"}),(0,t.jsx)(r.td,{children:"33.22"}),(0,t.jsx)(r.td,{children:"iterations/sec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"nnet_test"}),(0,t.jsx)(r.td,{children:"10.56"}),(0,t.jsx)(r.td,{children:"iterations/sec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"nnet_test"}),(0,t.jsx)(r.td,{children:"3.15"}),(0,t.jsx)(r.td,{children:"scale"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"parser-125k"}),(0,t.jsx)(r.td,{children:"70.18"}),(0,t.jsx)(r.td,{children:"iterations/sec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"parser-125k"}),(0,t.jsx)(r.td,{children:"19.23"}),(0,t.jsx)(r.td,{children:"iterations/sec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"parser-125k"}),(0,t.jsx)(r.td,{children:"3.65"}),(0,t.jsx)(r.td,{children:"scale"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"radix2-big-64k"}),(0,t.jsx)(r.td,{children:"1666.67"}),(0,t.jsx)(r.td,{children:"iterations/sec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"radix2-big-64k"}),(0,t.jsx)(r.td,{children:"453.72"}),(0,t.jsx)(r.td,{children:"iterations/sec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"radix2-big-64k"}),(0,t.jsx)(r.td,{children:"3.67"}),(0,t.jsx)(r.td,{children:"scale"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"sha-test"}),(0,t.jsx)(r.td,{children:"588.24"}),(0,t.jsx)(r.td,{children:"iterations/sec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"sha-test"}),(0,t.jsx)(r.td,{children:"172.41"}),(0,t.jsx)(r.td,{children:"iterations/sec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"sha-test"}),(0,t.jsx)(r.td,{children:"3.41"}),(0,t.jsx)(r.td,{children:"scale"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"zip-test"}),(0,t.jsx)(r.td,{children:"500.00"}),(0,t.jsx)(r.td,{children:"iterations/sec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"zip-test"}),(0,t.jsx)(r.td,{children:"142.86"}),(0,t.jsx)(r.td,{children:"iterations/sec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"zip-test"}),(0,t.jsx)(r.td,{children:"3.50"}),(0,t.jsx)(r.td,{children:"scale"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"CoreMark-PRO"}),(0,t.jsx)(r.td,{children:"19183.84"}),(0,t.jsx)(r.td,{children:"Score"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"CoreMark-PRO"}),(0,t.jsx)(r.td,{children:"5439.59"}),(0,t.jsx)(r.td,{children:"Score"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CoreMark"}),(0,t.jsx)(r.td,{children:"CoreMark-PRO"}),(0,t.jsx)(r.td,{children:"3.53"}),(0,t.jsx)(r.td,{children:"scale"})]})]})]})]})}function a(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>n,x:()=>c});var t=s(6540);const d={},i=t.createContext(d);function n(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);