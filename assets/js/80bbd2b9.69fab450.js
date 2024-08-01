"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[9450],{1223:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var n=s(4848),t=s(8453);const r={},i="LMbench",c={id:"workloads/lmbench/lmbench",title:"LMbench",description:"LMbench (version 3) is a suite of simple, portable benchmarks ANSI/C microbenchmarks for UNIX/POSIX. In general, it measures two key",source:"@site/docs/workloads/lmbench/lmbench.md",sourceDirName:"workloads/lmbench",slug:"/workloads/lmbench/",permalink:"/VirtualClient/docs/workloads/lmbench/",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/lmbench/lmbench.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LAPACK Workload Profiles",permalink:"/VirtualClient/docs/workloads/lapack/lapack-profiles"},next:{title:"LMbench Workload Profiles",permalink:"/VirtualClient/docs/workloads/lmbench/lmbench-profiles"}},l={},h=[{value:"System Requirements",id:"system-requirements",level:2},{value:"What is Being Tested?",id:"what-is-being-tested",level:2},{value:"Workload Metrics",id:"workload-metrics",level:2}];function x(e){const d={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.h1,{id:"lmbench",children:"LMbench"}),"\n",(0,n.jsx)(d.p,{children:"LMbench (version 3) is a suite of simple, portable benchmarks ANSI/C microbenchmarks for UNIX/POSIX. In general, it measures two key\nfeatures: component bandwidth and latency. LMbench is intended to provide system developers insights into basic performance and costs\nof key system operations."}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:(0,n.jsx)(d.a,{href:"http://www.bitmover.com/lmbench/whatis_lmbench.html",children:"LMbench Documentation"})}),"\n",(0,n.jsx)(d.li,{children:(0,n.jsx)(d.a,{href:"http://www.bitmover.com/lmbench/man_lmbench.html",children:"LMbench Manual"})}),"\n"]}),"\n",(0,n.jsx)(d.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,n.jsx)(d.p,{children:"The following section provides special considerations required for the system on which the LMbench workload will be run."}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:"Physical Memory = 16 GB minimum"}),"\n",(0,n.jsx)(d.li,{children:"Disk Space = At least 20 MB of free space on the OS disk"}),"\n"]}),"\n",(0,n.jsx)(d.h2,{id:"what-is-being-tested",children:"What is Being Tested?"}),"\n",(0,n.jsx)(d.p,{children:"The following performance analysis tests are ran as part of the LMbench workload. Note that although LMbench runs benchmarks covering\nvarious aspects of the system, the memory performance benchmarks are the ones that are most interesting for net impact analysis."}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.a,{href:"http://www.bitmover.com/lmbench/man_lmbench.html",children:"http://www.bitmover.com/lmbench/man_lmbench.html"})}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Bandwidth Benchmark"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Cached file read"}),(0,n.jsx)(d.td,{children:"Measures times for reading and summing a file"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Memory copy (bcopy)"}),(0,n.jsx)(d.td,{children:"Measures memory copy operation speeds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Memory read"}),(0,n.jsx)(d.td,{children:"Measures memory read operation speeds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Memory write"}),(0,n.jsx)(d.td,{children:"Measures memory write operation speeds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Pipe"}),(0,n.jsx)(d.td,{children:"Measures data movement times through named pipes"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TCP"}),(0,n.jsx)(d.td,{children:"Measures data movement times through TCP/IP sockets"})]})]})]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Latency Benchmark"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Context switching"}),(0,n.jsx)(d.td,{children:"Measures context switching time for processes on the system"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Networking: connection establishment, pipe, TCP, UDP, and RPC hot potato"}),(0,n.jsx)(d.td,{children:"Measures inter-process connection latency via communications sockets"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"File system creates and deletes"}),(0,n.jsx)(d.td,{children:"Measures file system create/delete performance"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Process creation"}),(0,n.jsx)(d.td,{children:"Measures the time the system takes to create new processes"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"System call overhead"}),(0,n.jsx)(d.td,{children:"Measures the time it takes to make simple operating system calls"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Memory read latency"}),(0,n.jsx)(d.td,{children:"Measures memory read latency"})]})]})]}),"\n",(0,n.jsx)(d.h2,{id:"workload-metrics",children:"Workload Metrics"}),"\n",(0,n.jsx)(d.p,{children:"The following metrics are examples of those captured by the Virtual Client when running the LMbench workload."}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Metric Name"}),(0,n.jsx)(d.th,{children:"Example Value (min)"}),(0,n.jsx)(d.th,{children:"Example Value (max)"}),(0,n.jsx)(d.th,{children:"Example Value (avg)"}),(0,n.jsx)(d.th,{children:"Unit"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ProcessorTimes-Mhz"}),(0,n.jsx)(d.td,{children:"2494"}),(0,n.jsx)(d.td,{children:"2494"}),(0,n.jsx)(d.td,{children:"2494"}),(0,n.jsx)(d.td,{children:"Mhz"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ProcessorTimes-null call"}),(0,n.jsx)(d.td,{children:"3.41"}),(0,n.jsx)(d.td,{children:"3.41"}),(0,n.jsx)(d.td,{children:"3.41"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ProcessorTimes-null I/O"}),(0,n.jsx)(d.td,{children:"3.58"}),(0,n.jsx)(d.td,{children:"3.58"}),(0,n.jsx)(d.td,{children:"3.58"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ProcessorTimes-stat"}),(0,n.jsx)(d.td,{children:"4.46"}),(0,n.jsx)(d.td,{children:"4.46"}),(0,n.jsx)(d.td,{children:"4.46"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ProcessorTimes-open clos"}),(0,n.jsx)(d.td,{children:"9.54"}),(0,n.jsx)(d.td,{children:"9.54"}),(0,n.jsx)(d.td,{children:"9.54"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ProcessorTimes-slct TCP"}),(0,n.jsx)(d.td,{children:"7.01"}),(0,n.jsx)(d.td,{children:"7.01"}),(0,n.jsx)(d.td,{children:"7.01"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ProcessorTimes-sig inst"}),(0,n.jsx)(d.td,{children:"3.58"}),(0,n.jsx)(d.td,{children:"7.01"}),(0,n.jsx)(d.td,{children:"7.01"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ProcessorTimes-sig hndl"}),(0,n.jsx)(d.td,{children:"9.62"}),(0,n.jsx)(d.td,{children:"9.62"}),(0,n.jsx)(d.td,{children:"9.62"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ProcessorTimes-fork proc"}),(0,n.jsx)(d.td,{children:"370"}),(0,n.jsx)(d.td,{children:"370"}),(0,n.jsx)(d.td,{children:"370"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ProcessorTimes-exec proc"}),(0,n.jsx)(d.td,{children:"946"}),(0,n.jsx)(d.td,{children:"946"}),(0,n.jsx)(d.td,{children:"946"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ProcessorTimes-sh proc"}),(0,n.jsx)(d.td,{children:"2281"}),(0,n.jsx)(d.td,{children:"2281"}),(0,n.jsx)(d.td,{children:"2281"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"BasicInt-intgr bit"}),(0,n.jsx)(d.td,{children:"0.27"}),(0,n.jsx)(d.td,{children:"0.27"}),(0,n.jsx)(d.td,{children:"0.27"}),(0,n.jsx)(d.td,{children:"nanoseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"BasicInt-intgr add"}),(0,n.jsx)(d.td,{children:"0.1"}),(0,n.jsx)(d.td,{children:"0.27"}),(0,n.jsx)(d.td,{children:"0.27"}),(0,n.jsx)(d.td,{children:"nanoseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"BasicInt-intgr mul"}),(0,n.jsx)(d.td,{children:"0.01"}),(0,n.jsx)(d.td,{children:"0.01"}),(0,n.jsx)(d.td,{children:"0.01"}),(0,n.jsx)(d.td,{children:"nanoseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"BasicInt-intgr div"}),(0,n.jsx)(d.td,{children:"7.23"}),(0,n.jsx)(d.td,{children:"7.23"}),(0,n.jsx)(d.td,{children:"7.23"}),(0,n.jsx)(d.td,{children:"nanoseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"BasicInt-intgr mod"}),(0,n.jsx)(d.td,{children:"7.23"}),(0,n.jsx)(d.td,{children:"7.23"}),(0,n.jsx)(d.td,{children:"7.55"}),(0,n.jsx)(d.td,{children:"nanoseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"BasicFloat-float add"}),(0,n.jsx)(d.td,{children:"2.41"}),(0,n.jsx)(d.td,{children:"2.41"}),(0,n.jsx)(d.td,{children:"2.41"}),(0,n.jsx)(d.td,{children:"nanoseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"BasicFloat-float mul"}),(0,n.jsx)(d.td,{children:"2.41"}),(0,n.jsx)(d.td,{children:"2.41"}),(0,n.jsx)(d.td,{children:"2.41"}),(0,n.jsx)(d.td,{children:"nanoseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"BasicFloat-float div"}),(0,n.jsx)(d.td,{children:"2.41"}),(0,n.jsx)(d.td,{children:"6.42"}),(0,n.jsx)(d.td,{children:"6.42"}),(0,n.jsx)(d.td,{children:"nanoseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"BasicFloat-float bogo"}),(0,n.jsx)(d.td,{children:"6.83"}),(0,n.jsx)(d.td,{children:"6.83"}),(0,n.jsx)(d.td,{children:"6.83"}),(0,n.jsx)(d.td,{children:"nanoseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"BasicDouble-double add"}),(0,n.jsx)(d.td,{children:"2.41"}),(0,n.jsx)(d.td,{children:"2.41"}),(0,n.jsx)(d.td,{children:"2.41"}),(0,n.jsx)(d.td,{children:"nanoseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"BasicDouble-double mul"}),(0,n.jsx)(d.td,{children:"2.41"}),(0,n.jsx)(d.td,{children:"2.41"}),(0,n.jsx)(d.td,{children:"2.41"}),(0,n.jsx)(d.td,{children:"nanoseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"BasicDouble-double div"}),(0,n.jsx)(d.td,{children:"9.25"}),(0,n.jsx)(d.td,{children:"9.25"}),(0,n.jsx)(d.td,{children:"9.25"}),(0,n.jsx)(d.td,{children:"nanoseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"BasicDouble-double bogo"}),(0,n.jsx)(d.td,{children:"9.67"}),(0,n.jsx)(d.td,{children:"9.67"}),(0,n.jsx)(d.td,{children:"9.67"}),(0,n.jsx)(d.td,{children:"nanoseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CommunicationBandwidth-AF UNIX"}),(0,n.jsx)(d.td,{children:"4242.0"}),(0,n.jsx)(d.td,{children:"4633.0"}),(0,n.jsx)(d.td,{children:"4471.421052631579"}),(0,n.jsx)(d.td,{children:"MB/s"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CommunicationBandwidth-Bcopy (hand)"}),(0,n.jsx)(d.td,{children:"3974.3"}),(0,n.jsx)(d.td,{children:"4541.9"}),(0,n.jsx)(d.td,{children:"4446.0999999999999"}),(0,n.jsx)(d.td,{children:"MB/s"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CommunicationBandwidth-Bcopy (libc)"}),(0,n.jsx)(d.td,{children:"7753.3"}),(0,n.jsx)(d.td,{children:"8069.6"}),(0,n.jsx)(d.td,{children:"7936.668421052632"}),(0,n.jsx)(d.td,{children:"MB/s"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CommunicationBandwidth-File reread"}),(0,n.jsx)(d.td,{children:"5077.3"}),(0,n.jsx)(d.td,{children:"5358.9"}),(0,n.jsx)(d.td,{children:"5291.463157894737"}),(0,n.jsx)(d.td,{children:"MB/s"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CommunicationBandwidth-Mem reread"}),(0,n.jsx)(d.td,{children:"8005.0"}),(0,n.jsx)(d.td,{children:"8406.0"}),(0,n.jsx)(d.td,{children:"8251.473684210527"}),(0,n.jsx)(d.td,{children:"MB/s"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CommunicationBandwidth-Mem write"}),(0,n.jsx)(d.td,{children:"6262.0"}),(0,n.jsx)(d.td,{children:"6702.0"}),(0,n.jsx)(d.td,{children:"6591.315789473684"}),(0,n.jsx)(d.td,{children:"MB/s"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CommunicationBandwidth-Mmap reread"}),(0,n.jsx)(d.td,{children:"7987.9"}),(0,n.jsx)(d.td,{children:"8240.2"}),(0,n.jsx)(d.td,{children:"8100.952631578946"}),(0,n.jsx)(d.td,{children:"MB/s"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CommunicationBandwidth-Pipe"}),(0,n.jsx)(d.td,{children:"2114.0"}),(0,n.jsx)(d.td,{children:"2461.0"}),(0,n.jsx)(d.td,{children:"2357.2631578947368"}),(0,n.jsx)(d.td,{children:"MB/s"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CommunicationBandwidth-TCP"}),(0,n.jsx)(d.td,{children:"2920.0"}),(0,n.jsx)(d.td,{children:"3757.0"}),(0,n.jsx)(d.td,{children:"3350.157894736842"}),(0,n.jsx)(d.td,{children:"MB/s"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CommunicationLatency-2p/0K ctxsw"}),(0,n.jsx)(d.td,{children:"10.5"}),(0,n.jsx)(d.td,{children:"13.4"}),(0,n.jsx)(d.td,{children:"11.742105263157895"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CommunicationLatency-AF UNIX"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CommunicationLatency-Pipe"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CommunicationLatency-RPC/TCP"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CommunicationLatency-RPC/UDP"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CommunicationLatency-TCP"}),(0,n.jsx)(d.td,{children:"35.5"}),(0,n.jsx)(d.td,{children:"41.5"}),(0,n.jsx)(d.td,{children:"37.52105263157895"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CommunicationLatency-TCP conn"}),(0,n.jsx)(d.td,{children:"22.0"}),(0,n.jsx)(d.td,{children:"66.0"}),(0,n.jsx)(d.td,{children:"38.89473684210526"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CommunicationLatency-UDP"}),(0,n.jsx)(d.td,{children:"30.1"}),(0,n.jsx)(d.td,{children:"35.4"}),(0,n.jsx)(d.td,{children:"32.71578947368421"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ContextSwitching-16p/16K ctxsw"}),(0,n.jsx)(d.td,{children:"11.3"}),(0,n.jsx)(d.td,{children:"14.8"}),(0,n.jsx)(d.td,{children:"13.173684210526315"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ContextSwitching-16p/64K ctxsw"}),(0,n.jsx)(d.td,{children:"12.3"}),(0,n.jsx)(d.td,{children:"15.8"}),(0,n.jsx)(d.td,{children:"13.942105263157897"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ContextSwitching-2p/0K ctxsw"}),(0,n.jsx)(d.td,{children:"10.5"}),(0,n.jsx)(d.td,{children:"13.4"}),(0,n.jsx)(d.td,{children:"11.742105263157895"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ContextSwitching-2p/16K ctxsw"}),(0,n.jsx)(d.td,{children:"9.66"}),(0,n.jsx)(d.td,{children:"13.9"}),(0,n.jsx)(d.td,{children:"11.792631578947369"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ContextSwitching-2p/64K ctxsw"}),(0,n.jsx)(d.td,{children:"10.5"}),(0,n.jsx)(d.td,{children:"14.4"}),(0,n.jsx)(d.td,{children:"11.715789473684211"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ContextSwitching-8p/16K ctxsw"}),(0,n.jsx)(d.td,{children:"11.1"}),(0,n.jsx)(d.td,{children:"14.2"}),(0,n.jsx)(d.td,{children:"12.88421052631579"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ContextSwitching-8p/64K ctxsw"}),(0,n.jsx)(d.td,{children:"11.4"}),(0,n.jsx)(d.td,{children:"15.2"}),(0,n.jsx)(d.td,{children:"13.605263157894737"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"FileVmLatency-0K File Create"}),(0,n.jsx)(d.td,{children:"6.6518"}),(0,n.jsx)(d.td,{children:"15.9"}),(0,n.jsx)(d.td,{children:"8.161615789473684"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"FileVmLatency-0K File Delete"}),(0,n.jsx)(d.td,{children:"4.6205"}),(0,n.jsx)(d.td,{children:"8.9458"}),(0,n.jsx)(d.td,{children:"6.006173684210525"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"FileVmLatency-100fd select"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"FileVmLatency-10K File Create"}),(0,n.jsx)(d.td,{children:"13.2"}),(0,n.jsx)(d.td,{children:"21.3"}),(0,n.jsx)(d.td,{children:"16.194736842105266"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"FileVmLatency-10K File Delete"}),(0,n.jsx)(d.td,{children:"6.8272"}),(0,n.jsx)(d.td,{children:"22.1"}),(0,n.jsx)(d.td,{children:"9.763121052631576"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"FileVmLatency-Mmap Latency"}),(0,n.jsx)(d.td,{children:"62500.0"}),(0,n.jsx)(d.td,{children:"322800.0"}),(0,n.jsx)(d.td,{children:"84189.47368421052"}),(0,n.jsx)(d.td,{children:"microseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"FileVmLatency-Page Fault"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"Count"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"FileVmLatency-Prot Fault"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"Count"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"MemoryLatency-L1"}),(0,n.jsx)(d.td,{children:"1.138"}),(0,n.jsx)(d.td,{children:"1.161"}),(0,n.jsx)(d.td,{children:"1.1445789473684208"}),(0,n.jsx)(d.td,{children:"nanoseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"MemoryLatency-L2"}),(0,n.jsx)(d.td,{children:"7.935"}),(0,n.jsx)(d.td,{children:"9.571"}),(0,n.jsx)(d.td,{children:"8.73215789473684"}),(0,n.jsx)(d.td,{children:"nanoseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"MemoryLatency-Main mem"}),(0,n.jsx)(d.td,{children:"28.7"}),(0,n.jsx)(d.td,{children:"30.0"}),(0,n.jsx)(d.td,{children:"29.22631578947368"}),(0,n.jsx)(d.td,{children:"nanoseconds"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"MemoryLatency-Mhz"}),(0,n.jsx)(d.td,{children:"-1.0"}),(0,n.jsx)(d.td,{children:"1801.0"}),(0,n.jsx)(d.td,{children:"932.5263157894736"}),(0,n.jsx)(d.td,{children:"Mhz"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"MemoryLatency-Rand mem"}),(0,n.jsx)(d.td,{children:"0.0"}),(0,n.jsx)(d.td,{children:"119.0"}),(0,n.jsx)(d.td,{children:"97.67894736842107"}),(0,n.jsx)(d.td,{children:"nanoseconds"})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},8453:(e,d,s)=>{s.d(d,{R:()=>i,x:()=>c});var n=s(6540);const t={},r=n.createContext(t);function i(e){const d=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:d},e.children)}}}]);