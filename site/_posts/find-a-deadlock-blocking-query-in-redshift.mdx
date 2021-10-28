---
category: Redshift
created: 1612904099
date: '2021-02-09'
slug: /find-a-deadlock-blocking-query-in-redshift
tags: []
title: Find A Deadlock Blocking Query In Redshift
type: post
---


Run this to find deadlocks in Redshift:

```sql{numberLines: true}
select a.txn_owner, a.txn_db, a.xid, a.pid, a.txn_start, 
    a.lock_mode, a.relation as table_id,
    nvl(trim(c."name"),d.relname) as tablename, 
    a.granted,b.pid as blocking_pid,
    datediff(s,a.txn_start,getdate())/86400||' days '||
    datediff(s,a.txn_start,getdate())%86400/3600||
    ' hrs '||datediff(s,a.txn_start,getdate())%3600/60||
    ' mins '||datediff(s,a.txn_start,getdate())%60||
    ' secs' as txn_duration
from svv_transactions a 
left join (select pid,relation,granted from 
    pg_locks group by 1,2,3) b 
on a.relation=b.relation and a.granted='f' and b.granted='t' 
left join (select * from stv_tbl_perm where slice=0) c 
on a.relation=c.id 
left join pg_class d on a.relation=d.oid
where  a.relation is not null;
```



If you find one, kill it with:

```sql{numberLines: true}
select pg_terminate_backend(###);
```