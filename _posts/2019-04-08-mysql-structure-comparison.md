---
layout: post
title: 'Table Structure Comparion SQL'
date: 2019-04-08 13:47:27 +0800
tags: MySQL
color: rgb(255,210,32)
cover: '../assets/pics/wabisabi.jpg'
excerpt: WE ARE ASSISTANT TO THE DBA
pic-name: 'Wabi Sabi by Michael Driver'
---
WE ARE THE ASSISTANT TO THE DBA

## Table structure comparison
* d1: database_1
* d2: database_2
* t: table to be compared

```sql
SELECT  column_name,ordinal_position,data_type,column_type FROM
(
    SELECT column_name,ordinal_position,data_type,column_type,COUNT(1) rowcount
    FROM information_schema.columns
    WHERE
    (
        (table_schema='{d1}' AND table_name='{t}') OR
        (table_schema='{d2}' AND table_name='{t}')
    )
    GROUP BY column_name,ordinal_position,data_type,column_type
    HAVING COUNT(1)=1
) A;
```

## Find different records
* columns: honestly all columns in the table
* primary_key: is basically primary key

```sql
SELECT {columns}
FROM
 (
  SELECT a.*
  FROM {d1.t} as a
  UNION ALL
  SELECT b.*
  FROM {d2.t} as b
)  t
GROUP BY {columns}
HAVING COUNT(*) = 1
ORDER BY {primary_key};
```