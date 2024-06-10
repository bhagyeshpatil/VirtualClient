"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[883],{6466:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var t=n(5893),r=n(3905);const a={},i="Sysbench OLTP",l={id:"workloads/sysbench/sysbench",title:"Sysbench OLTP",description:"Sysbench is an open-source multi-threaded database benchmark tool for database online transacation processing (OLTP) operations against a",source:"@site/docs/workloads/sysbench/sysbench.md",sourceDirName:"workloads/sysbench",slug:"/workloads/sysbench/",permalink:"/VirtualClient/docs/workloads/sysbench/",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/sysbench/sysbench.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SuperBenchmark Workload Profiles",permalink:"/VirtualClient/docs/workloads/superbenchmark/superbenchmark-profiles"},next:{title:"Sysbench OLTP Client/Server Addendum",permalink:"/VirtualClient/docs/workloads/sysbench/sysbench-addendum"}},d={},o=[{value:"What is Being Measured?",id:"what-is-being-measured",level:2},{value:"Workload Metrics",id:"workload-metrics",level:2},{value:"Useful MySQL Server Commands",id:"useful-mysql-server-commands",level:2},{value:"Creating and Distributing a Sysbench Database",id:"creating-and-distributing-a-sysbench-database",level:2}];function c(e){const s={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"sysbench-oltp",children:"Sysbench OLTP"}),"\n",(0,t.jsx)(s.p,{children:"Sysbench is an open-source multi-threaded database benchmark tool for database online transacation processing (OLTP) operations against a\nMySQL database."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/akopytov/sysbench",children:"Sysbench GitHub"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://www.flamingbytes.com/posts/sysbench/",children:"Example Sysbench Uses"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"what-is-being-measured",children:"What is Being Measured?"}),"\n",(0,t.jsx)(s.p,{children:"The Sysbench test suite executes varied transactions on the database system including reads, writes, and other queries. The list of OLTP benchmarks\nsupported by Sysbench are as follows:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Benchmark Name"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"oltp_read_write"}),(0,t.jsx)(s.td,{children:"Measures performance of read and write queries on MySQL database"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"oltp_read_only"}),(0,t.jsx)(s.td,{children:"Measures performance of only read queries on MySQL database"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"oltp_write_only"}),(0,t.jsx)(s.td,{children:"Measures performance of only write queries on MySQL database"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"oltp_delete"}),(0,t.jsx)(s.td,{children:"Measures performance of only delete queries on the MySQL database"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"oltp_insert"}),(0,t.jsx)(s.td,{children:"Measures performance of only insert queries on MySQL database"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"oltp_update_index"}),(0,t.jsx)(s.td,{children:"Measures performance of index updates on the MySQL database"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"oltp_update_non_index"}),(0,t.jsx)(s.td,{children:"Measures performance of non-index updates on the MySQL database"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"select_random_points"}),(0,t.jsx)(s.td,{children:"Measures performance of random point select on the MySQL database"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"select_random_ranges"}),(0,t.jsx)(s.td,{children:"Measures performance of random range select on the MySQL database"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"tpcc"}),(0,t.jsxs)(s.td,{children:["Runs the TPCC workload on the MySQL database. ",(0,t.jsx)(s.strong,{children:"Only TPCC Workload Available"})]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"workload-metrics",children:"Workload Metrics"}),"\n",(0,t.jsx)(s.p,{children:"The following metrics are examples of those captured by the Virtual Client when running the Sysbench OLTP workload"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Execution Profile"}),(0,t.jsx)(s.th,{children:"Test Name"}),(0,t.jsx)(s.th,{children:"Metric Name"}),(0,t.jsx)(s.th,{children:"Example Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PERF-MYSQL-SYSBENCH-OLTP.json"}),(0,t.jsx)(s.td,{children:"Sysbench OLTP"}),(0,t.jsx)(s.td,{children:"# read queries"}),(0,t.jsx)(s.td,{children:"5503894"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PERF-MYSQL-SYSBENCH-OLTP.json"}),(0,t.jsx)(s.td,{children:"Sysbench OLTP"}),(0,t.jsx)(s.td,{children:"# write queries"}),(0,t.jsx)(s.td,{children:"259534"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PERF-MYSQL-SYSBENCH-OLTP.json"}),(0,t.jsx)(s.td,{children:"Sysbench OLTP"}),(0,t.jsx)(s.td,{children:"# other queries"}),(0,t.jsx)(s.td,{children:"1284332"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PERF-MYSQL-SYSBENCH-OLTP.json"}),(0,t.jsx)(s.td,{children:"Sysbench OLTP"}),(0,t.jsx)(s.td,{children:"# transactions"}),(0,t.jsx)(s.td,{children:"257421"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PERF-MYSQL-SYSBENCH-OLTP.json"}),(0,t.jsx)(s.td,{children:"Sysbench OLTP"}),(0,t.jsx)(s.td,{children:"transactions/sec"}),(0,t.jsx)(s.td,{children:"153.01"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PERF-MYSQL-SYSBENCH-OLTP.json"}),(0,t.jsx)(s.td,{children:"Sysbench OLTP"}),(0,t.jsx)(s.td,{children:"# queries"}),(0,t.jsx)(s.td,{children:"5948220"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PERF-MYSQL-SYSBENCH-OLTP.json"}),(0,t.jsx)(s.td,{children:"Sysbench OLTP"}),(0,t.jsx)(s.td,{children:"queries/sec"}),(0,t.jsx)(s.td,{children:"2850.17"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PERF-MYSQL-SYSBENCH-OLTP.json"}),(0,t.jsx)(s.td,{children:"Sysbench OLTP"}),(0,t.jsx)(s.td,{children:"# ignored errors"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PERF-MYSQL-SYSBENCH-OLTP.json"}),(0,t.jsx)(s.td,{children:"Sysbench OLTP"}),(0,t.jsx)(s.td,{children:"ignored errors/sec"}),(0,t.jsx)(s.td,{children:"0.00"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PERF-MYSQL-SYSBENCH-OLTP.json"}),(0,t.jsx)(s.td,{children:"Sysbench OLTP"}),(0,t.jsx)(s.td,{children:"# reconnects"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PERF-MYSQL-SYSBENCH-OLTP.json"}),(0,t.jsx)(s.td,{children:"Sysbench OLTP"}),(0,t.jsx)(s.td,{children:"reconnects/sec"}),(0,t.jsx)(s.td,{children:"0.00"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PERF-MYSQL-SYSBENCH-OLTP.json"}),(0,t.jsx)(s.td,{children:"Sysbench OLTP"}),(0,t.jsx)(s.td,{children:"elapsed time"}),(0,t.jsx)(s.td,{children:"1800.0012"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PERF-MYSQL-SYSBENCH-OLTP.json"}),(0,t.jsx)(s.td,{children:"Sysbench OLTP"}),(0,t.jsx)(s.td,{children:"latency min"}),(0,t.jsx)(s.td,{children:"7.19"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PERF-MYSQL-SYSBENCH-OLTP.json"}),(0,t.jsx)(s.td,{children:"Sysbench OLTP"}),(0,t.jsx)(s.td,{children:"latency avg"}),(0,t.jsx)(s.td,{children:"26.97"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PERF-MYSQL-SYSBENCH-OLTP.json"}),(0,t.jsx)(s.td,{children:"Sysbench OLTP"}),(0,t.jsx)(s.td,{children:"latency max"}),(0,t.jsx)(s.td,{children:"682.33"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PERF-MYSQL-SYSBENCH-OLTP.json"}),(0,t.jsx)(s.td,{children:"Sysbench OLTP"}),(0,t.jsx)(s.td,{children:"latency 95p"}),(0,t.jsx)(s.td,{children:"67.58"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PERF-MYSQL-SYSBENCH-OLTP.json"}),(0,t.jsx)(s.td,{children:"Sysbench OLTP"}),(0,t.jsx)(s.td,{children:"latency sum"}),(0,t.jsx)(s.td,{children:"7458935.25"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"useful-mysql-server-commands",children:"Useful MySQL Server Commands"}),"\n",(0,t.jsx)(s.p,{children:"The following section contains commands that were useful when onboarding this workload that help in the process of investigations and debugging."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# Show MySQL server online status. Use the password for the current logged in user.\n/etc/init.d/mysql status\n\n# or\nsudo mysqladmin -p status\n\n# Show MySQL service/daemon status.\nsudo systemctl status mysql.service\n\n# or\nsudo systemctl --type=service | grep mysql\n\n# Show user/account under which the MySQL service is running.\nsystemctl show -p UID -p User mysql.service\n\n# Show all users for a MySQL Server. Sysbench requires the user match the name of the database (e.g. sbtest).\nmysql> SELECT User, Host, Select_priv, Insert_priv, Update_priv, Delete_priv, Create_priv, Drop_priv, File_priv, Grant_priv, References_priv, Index_priv, Alter_priv, Show_db_priv, Super_priv FROM mysql.user;\n\n# Show current user\nmysql> SELECT user();\n\n# List MySQL database table fields\nmysql> desc mysql.user;\n\nmysql> Use sbtest;\nmysql> desc sbtest.sbtest1;\n\n# Show the information schema tables for the database.\nmysql> Use information_schema;\nmysql> SHOW TABLES;\n\n# Drop sysbench database\n~/vc_tools/sysbench/src$ ./sysbench oltp_common --threads=1 --tables=10 --table-size=1 --mysql-db=sbtest --mysql-host=localhost cleanup\n\n# Create sysbench database\n~/vc_tools/sysbench/src$ ./sysbench oltp_common --threads=1 --tables=10 --table-size=1 --mysql-db=sbtest --mysql-host=localhost prepare\n\n# Show MySQL configuration file contents\n~/vc_tools/sysbench/src$ cat /etc/mysql/mysql.conf.d/mysqld.cnf\n\n# Show MySQL database tables (i.e. sbtest1.ibd, sbtest2.ibd, sbtest3.ibd...)\n~/vc_tools/sysbench/src$ sudo ls -a /var/lib/mysql/sbtest\n"})}),"\n",(0,t.jsx)(s.h2,{id:"creating-and-distributing-a-sysbench-database",children:"Creating and Distributing a Sysbench Database"}),"\n",(0,t.jsx)(s.p,{children:"The following process can be used to create and then move the sysbench database. Virtual Client programmatically does then whenever there are extra disks on the\nsystem beyond the OS disk."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/option-files.html",children:"MySQL Option Files"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/innodb-moving-data-files-offline.html",children:"Moving Data Files Offline"})}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The following steps show how to create the Sysbench database and then move/distribute it across multiple disks."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Set 'innodb_directories' variable in mysqld.cnf (e.g. /etc/mysql/mysql.conf.d/mysqld.cnf)"}),(0,t.jsx)(s.br,{}),"\n","This variable must be set to instruct the innodb engine to look for database table files in a location other\nthan the default data directory."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# Set 'innodb_directories' variable in mysqld.cnf (e.g. /etc/mysql/mysql.conf.d/mysqld.cnf)\n#\n# e.g.\n# Here is entries for some specific programs\n# The following values assume you have at least 32M ram\n\n[mysqld]\n#\n# * Basic Settings\n#\nuser          = mysql\npid-file      = /var/run/mysqld/mysqld.pid\nsocket        = /var/run/mysqld/mysqld.sock\nport          = 3306\ndatadir       = /var/lib/mysql\ninnodb_directories=/home/junovmadmin/mnt_vc/sdc1;/home/junovmadmin/mnt_vc/sdd1;/home/junovmadmin/mnt_vc/sde1\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Disable Apparmor for the MySQL server (i.e. for the mysqld service)"})}),"\n",(0,t.jsx)(s.p,{children:"The Apparmor service will prevent the MySQL server service from having permissions to create the Sysbench database table\nfiles on the data disk location. You will know when Apparmor is preventing MySQL from creating the table files because you\nwill receive the following error:"}),"\n",(0,t.jsx)(s.p,{children:"ERROR 1030 (HY000): Got error 168 - 'Unknown (generic) error from engine' from storage engine"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# Disable Apparmor for MySQL\nsudo ln -s /etc/apparmor.d/usr.sbin.mysqld /etc/apparmor.d/disable/\nsudo apparmor_parser -R /etc/apparmor.d/usr.sbin.mysqld\n\n# Verify that MySQL is no longer in the list of protected apps. If MySQL is disabled, you should not see '/var/lib/mysql' in the\n# output of the following command.\nsudo aa-status\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Update SQL 'Create' command in Sysbench oltp_common.lua file"}),(0,t.jsx)(s.br,{}),"\n","In the Sysbench repo directory (after compilation), change the /src/lua/oltp_common.lua file to use an SQL 'CREATE IF NOT EXISTS'\nstatement vs. a 'CREATE' statement. The latter will cause Sysbench to fail when attempting to populate an existing database in steps\nbelow."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# The script file will look like this before the change.\nCREATE TABLE sbtest%d(\n  id %s,\n  k INTEGER DEFAULT '0' NOT NULL,\n  c CHAR(120) DEFAULT '' NOT NULL,\n  pad CHAR(60) DEFAULT '' NOT NULL,\n  %s (id)\n)\n\n# It should look like this afterwards. Note we have added the 'IF NOT EXISTS' clause.\nCREATE TABLE IF NOT EXISTS sbtest%d(\n  id %s,\n  k INTEGER DEFAULT '0' NOT NULL,\n  c CHAR(120) DEFAULT '' NOT NULL,\n  pad CHAR(60) DEFAULT '' NOT NULL,\n  %s (id)\n)\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Create a very small/minimal Sysbench database"}),(0,t.jsx)(s.br,{}),"\n","We have to use sysbench to create the database. However, we only want to create a database with schema and a bare minimum\nnumber of records, so that we can efficiently move it afterwards. Unfortunately, Sysbench is going to create the database\nin the default data directory location. Out of box, that is the OS drive."]}),"\n",(0,t.jsx)(s.p,{children:"Note that the settings used here for --tables should match the number of tables ultimately desired. In a later step below, we\nare populating the database tables. The number of tables defined here should match between both steps."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# Drop an existing Sysbench database\n~/vc_tools/sysbench/src$ ./sysbench oltp_common --threads=1 --tables=10 --table-size=1 --mysql-db=sbtest --mysql-host=localhost cleanup\n\n# Create Sysbench database\n~/vc_tools/sysbench/src$ ./sysbench oltp_common --threads=1 --tables=10 --table-size=1 --mysql-db=sbtest --mysql-host=localhost prepare\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Create exact copies of the Sysbench table files on the target data disk(s)"}),(0,t.jsx)(s.br,{}),"\n","The process here involves copying the table files (e.g. sbtest1.ibd, sbtest2.ibd...) to the data disk locations using a different\nname for the table, dropping the original and then renaming the tables copied to the original names (e.g. sbtest1_move -> sbtest1)."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"# Open the MySQL console.\nsudo mysql\n\n# Copy the table files to the new disk locations using out-of-box SQL commands. In this example we are distributing\n# 10 tables across 3 disks/locations.\nmysql> CREATE TABLE sbtest1_move DATA DIRECTORY = '/home/junovmadmin/mnt_vc/sdc1' AS (SELECT * FROM sbtest1);\nmysql> CREATE TABLE sbtest2_move DATA DIRECTORY = '/home/junovmadmin/mnt_vc/sdc1' AS (SELECT * FROM sbtest2);\nmysql> CREATE TABLE sbtest3_move DATA DIRECTORY = '/home/junovmadmin/mnt_vc/sdc1' AS (SELECT * FROM sbtest3);\nmysql> CREATE TABLE sbtest4_move DATA DIRECTORY = '/home/junovmadmin/mnt_vc/sdc1' AS (SELECT * FROM sbtest4);\n\nmysql> CREATE TABLE sbtest5_move DATA DIRECTORY = '/home/junovmadmin/mnt_vc/sdd1' AS (SELECT * FROM sbtest5);\nmysql> CREATE TABLE sbtest6_move DATA DIRECTORY = '/home/junovmadmin/mnt_vc/sdd1' AS (SELECT * FROM sbtest6);\nmysql> CREATE TABLE sbtest7_move DATA DIRECTORY = '/home/junovmadmin/mnt_vc/sdd1' AS (SELECT * FROM sbtest7);\n\nmysql> CREATE TABLE sbtest8_move DATA DIRECTORY = '/home/junovmadmin/mnt_vc/sde1' AS (SELECT * FROM sbtest8);\nmysql> CREATE TABLE sbtest9_move DATA DIRECTORY = '/home/junovmadmin/mnt_vc/sde1' AS (SELECT * FROM sbtest9);\nmysql> CREATE TABLE sbtest10_move DATA DIRECTORY = '/home/junovmadmin/mnt_vc/sde1' AS (SELECT * FROM sbtest10);\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Drop the original Sysbench tables"}),(0,t.jsx)(s.br,{}),"\n","We will drop the original tables first so they are deleted from the original location. In this example, we have 10\ntotal Sysbench tables to drop."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"mysql> DROP TABLE sbtest1;\nmysql> DROP TABLE sbtest2;\nmysql> DROP TABLE sbtest3;\nmysql> DROP TABLE sbtest4;\nmysql> DROP TABLE sbtest5;\nmysql> DROP TABLE sbtest6;\nmysql> DROP TABLE sbtest7;\nmysql> DROP TABLE sbtest8;\nmysql> DROP TABLE sbtest9;\nmysql> DROP TABLE sbtest10;\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Rename the tables copied to the original table names (i.e. matching the ones just dropped)"}),(0,t.jsx)(s.br,{}),"\n","Once the previous tables have been dropped/deleted, we can simply rename the copied tables to the original\nnames and we will have effectively moved the database."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"mysql> RENAME TABLE sbtest1_move TO sbtest1;\nmysql> RENAME TABLE sbtest2_move TO sbtest2;\nmysql> RENAME TABLE sbtest3_move TO sbtest3;\nmysql> RENAME TABLE sbtest4_move TO sbtest4;\nmysql> RENAME TABLE sbtest5_move TO sbtest5;\nmysql> RENAME TABLE sbtest6_move TO sbtest6;\nmysql> RENAME TABLE sbtest7_move TO sbtest7;\nmysql> RENAME TABLE sbtest8_move TO sbtest8;\nmysql> RENAME TABLE sbtest9_move TO sbtest9;\nmysql> RENAME TABLE sbtest10_move TO sbtest10;\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Populate the Sysbench database with the desired amount of data"}),(0,t.jsx)(s.br,{}),"\n","We created a minimal sized Sysbench database in earlier steps so that we could efficiently move it and distribute the table files across\nthe data disks. In this step we populate the database with the full set of records."]}),"\n",(0,t.jsx)(s.p,{children:"Note here that the value used for --tables in the step above where we created the initial database before moving it should match here."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# Fully populate the Sysbench database with records.\n~/vc_tools/sysbench/src$ ./sysbench oltp_common --threads=1 --tables=10 --table-size=100000 --mysql-db=sbtest --mysql-host=localhost prepare\n"})}),"\n",(0,t.jsx)(s.p,{children:"For reference, the approximate size of a database created by Sysbench for a 10-table database is 1MB + 10kB per record."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.ah)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3905:(e,s,n)=>{n.d(s,{ah:()=>o});var t=n(7294);function r(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function a(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?a(Object(n),!0).forEach((function(s){r(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}function l(e,s){if(null==e)return{};var n,t,r=function(e,s){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],s.indexOf(n)>=0||(r[n]=e[n]);return r}(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=t.createContext({}),o=function(e){var s=t.useContext(d),n=s;return e&&(n="function"==typeof e?e(s):i(i({},s),e)),n},c={inlineCode:"code",wrapper:function(e){var s=e.children;return t.createElement(t.Fragment,{},s)}},h=t.forwardRef((function(e,s){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),b=o(n),m=r,y=b["".concat(d,".").concat(m)]||b[m]||c[m]||a;return n?t.createElement(y,i(i({ref:s},h),{},{components:n})):t.createElement(y,i({ref:s},h))}));h.displayName="MDXCreateElement"}}]);