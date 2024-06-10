"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[6862],{7258:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(5893),r=t(3905);const a={},o="Sysbench OLTP Client/Server Addendum",i={id:"workloads/sysbench/sysbench-addendum",title:"Sysbench OLTP Client/Server Addendum",description:"All SQL workloads tend to have a lot of moving parts and complexities. Below details a comprehensive look into the lifecycle of this workload, in order to offer a clearer look as to what is happening under the hood when VC runs the Sysbench workload on a MySQL server.",source:"@site/docs/workloads/sysbench/sysbench-addendum.md",sourceDirName:"workloads/sysbench",slug:"/workloads/sysbench/sysbench-addendum",permalink:"/VirtualClient/docs/workloads/sysbench/sysbench-addendum",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/sysbench/sysbench-addendum.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sysbench OLTP",permalink:"/VirtualClient/docs/workloads/sysbench/"},next:{title:"Sysbench OLTP Workload Profiles",permalink:"/VirtualClient/docs/workloads/sysbench/sysbench-profiles"}},l={},c=[{value:"MySQL Database Installation and Configuration",id:"mysql-database-installation-and-configuration",level:2},{value:"Common MySQL Issues",id:"common-mysql-issues",level:3},{value:"Setting Up Disks",id:"setting-up-disks",level:2},{value:"About Sysbench",id:"about-sysbench",level:2},{value:"Parameters",id:"parameters",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sysbench-oltp-clientserver-addendum",children:"Sysbench OLTP Client/Server Addendum"}),"\n",(0,s.jsx)(n.p,{children:"All SQL workloads tend to have a lot of moving parts and complexities. Below details a comprehensive look into the lifecycle of this workload, in order to offer a clearer look as to what is happening under the hood when VC runs the Sysbench workload on a MySQL server."}),"\n",(0,s.jsx)(n.h2,{id:"mysql-database-installation-and-configuration",children:"MySQL Database Installation and Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Using the ",(0,s.jsx)(n.a,{href:"/VirtualClient/docs/dependencies/0060-install-mysql",children:"LinuxPackageInstallation"}),", ",(0,s.jsx)(n.a,{href:"/VirtualClient/docs/dependencies/0060-install-mysql",children:"MySQLServerInstallation"}),", and ",(0,s.jsx)(n.a,{href:"/VirtualClient/docs/dependencies/0060-configure-mysql",children:"MySQLServerConfiguration"})," dependencies, VC can install and create a fresh, new database for the purpose of running Sysbench. Additionally, a user can provide their own database and skip database creation. However, if opting for this, take note that Sysbench will only successfully run against databases with its expected table naming conventions (ie. sbtest1, sbtest2, ...) and schema. That is, Sysbench will not run against any random database. Its workload scripts are specifically designed to recognize databases of a certain setup."]}),"\n",(0,s.jsx)(n.p,{children:"Regardless of if a user chooses to create a database through VC or bring their own, three MySQL commands are required for seamless Sysbench execution: RaisedStatementCount, ConfigureUser, and ConfigureNetwork (though the last two are not required for single-system runs). RaisedStatementCount increases the MySQL variable max_prepared_stmt_count to its maximum value, which is essential in Sysbench execution; the workload generator prepares MySQL statements in advance for execution, and if this variable is not high enough, Sysbench will fail even on reasonably high thread counts. The ConfigureUser setting grants all permissions to the client on the database; ConfigureNetwork edits the bind-address in /etc/mysql/mysql.conf.d/mysqld.cnf to allow for connections from other servers on the network."}),"\n",(0,s.jsx)(n.p,{children:"To run these commands manually, execute the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# ConfigureNetwork commands\nsed -i \\\"s/.*bind-address.*/bind-address = {serverIPAddress}/\\\" /etc/mysql/mysql.conf.d/mysqld.cnf\nsystemctl restart mysql.service\n\n# CreateUser MySQL commands\nDROP USER IF EXISTS '{databaseName}'@'{clientIp}'\nCREATE USER '{databaseName}'@'{clientIp}'\nGRANT ALL ON *.* TO '{databaseName}'@'{clientIp}'\n\n# RaisedStatementCount MySQL command\nSET GLOBAL MAX_PREPARED_STMT_COUNT=100000;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"common-mysql-issues",children:"Common MySQL Issues"}),"\n",(0,s.jsx)(n.p,{children:"Should VC throw an error that the MySQL server has failed to start, usually this means there an issue with the MySQL configuration file. The config file is a very delicate thing, and too many changes may altogether destroy the integrity of the service. From experience, it can be very difficult to debug and find a root cause for the service failing to start. In this case, it may be easiest to uninstall the MySQL server altogether an allow VC to re-install it. Furthermore, ensure that the state json (state/sysbencholtpstate.json) is removed on both the server and client; the SysbenchOLTPServerExecutor takes care of some required database preparation on its side, and should the state not be reset, the server will believe it ran MySQL configuration and bypass a necessary step. More on this later."}),"\n",(0,s.jsx)(n.p,{children:"To purge the mysql-server, run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get purge --auto-remove mysql-server\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-disks",children:"Setting Up Disks"}),"\n",(0,s.jsxs)(n.p,{children:["A user will likely want to run Sysbench on one or multiple disks. In that case, VC is able to ",(0,s.jsx)(n.a,{href:"/VirtualClient/docs/dependencies/0070-format-disks",children:"FormatDisks"})," and ",(0,s.jsx)(n.a,{href:"/VirtualClient/docs/dependencies/0071-mount-disks",children:"MountDisks"})," for the user. VC will then use the mount points it created to store the testing database. VC will run Sysbench on up to five disks."]}),"\n",(0,s.jsx)(n.h2,{id:"about-sysbench",children:"About Sysbench"}),"\n",(0,s.jsxs)(n.p,{children:["Sysbench prepares queries to test a MySQL server. Sysbench has various benchmark types (executed by lua scripts) it can run against the server, listed ",(0,s.jsx)(n.a,{href:"./sysbench-oltp.md",children:"here"}),".\nSysbench exposes parameters that allow a user to execute the workload in single-server and client-server scenarios. However, any disk configuration must be done by the user themselves. That is, Sysbench does not expose any parameter to distribute the tables to one or multiple disks (ie. a data directory). If MySQL is not setup beforehand to prepare the server to put the database on one or multiple disks, Sysbench will go ahead and place the tables in the default location, the OS disk.\nSysbench also configures a few parameters, covered in depth below."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Threads"}),": The Sysbench workload generator prepares a list of statements to run on MySQL. MySQL can only accept so many prepared statements. We already max out this variable in a scenario in the MySQLConfiguation dependency, but even when setting the max_prepared_stmt_count to a large number, Sysbench can throw a 'too many connections' error. This has shown to be the case even on VMs with high core counts and equipped with the ability for high thread counts. User caution is advised for thread counts > 176; the VC team has only successfully seen Sysbench run with thread counts less than that number."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"RecordCount and NumTables"}),": Sysbench does not configure its database by size, only by record and table counts. The number of records can be configured in the Default scenario, and can be programmatically determined in the Balanced Scenario. More on what each scenario offers can be found in the ",(0,s.jsx)(n.a,{href:"./sysbench-oltp-profiles.md",children:"profiles section"}),". Note: the select_random_* workloads only run on 1 table."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Duration"}),": Recommended execution time is 20 minutes; it is advised to run the workload for at least 10 to 15 minutes for stable, consistent results."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If interested in running sysbench manually for familiarity reasons, here are examples of the three main commands VC executes with sysbench per execution (cleanup, prepare, and run) in a client-server scenario."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# drops all existing tables in the given database\nsysbench oltp_common --tables=10 --table-size=100 --mysql-db=sbtest --mysql-host=1.2.3.4 cleanup\n\n# creates n fresh tables\nsysbench oltp_common --tables=10 --table-size=100 --mysql-db=sbtest --mysql-host=1.2.3.4 prepare\n\n# running the oltp_write_only workload\nsysbench oltp_write_only --threads=10 --tables=10 --table-size=100 --mysql-db=sbtest --mysql-host=1.2.3.4 --time=600 run\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3905:(e,n,t)=>{t.d(n,{ah:()=>c});var s=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=s.createContext({}),c=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},h=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?s.createElement(b,o(o({ref:n},h),{},{components:t})):s.createElement(b,o({ref:n},h))}));h.displayName="MDXCreateElement"}}]);