# 常用sql

## 帆软报表

### sqlserver获取周数

```sql
-- 获取周数
SELECT
	'2024-10-20' AS today,
CASE
		WHEN datepart( weekday, '2024-10-20' ) IN ( 2, 3, 4, 5, 6, 7 ) 
		AND DATEPART( WEEKday, datename( YEAR, '2024-10-20' ) + '-01-01' ) = 1 THEN
			datepart( week, '2024-10-20' ) + 1 
			WHEN datepart( weekday, '2024-10-20' ) = 1 
			AND DATEPART( WEEKday, datename( YEAR, '2024-10-20' ) + '-01-01' ) = 1 THEN
				datepart( week, '2024-10-20' ) 
				WHEN datepart( weekday, '2024-10-20' ) IN ( 2, 3, 4, 5, 6, 7 ) THEN
			datepart( week, '2024-10-20' ) ELSE datepart( week, '2024-10-20' ) - 1 
	END AS week
```

### 多人力/部门查询公用sql

```sql
RIGHT (
	(SELECT
			',' + lastname 
		FROM
			HrmResource 
		WHERE
			id IN (SELECT * FROM F_split (人力 id, ',' )) FOR xml path ( '' )
	),
	LEN(
		(SELECT ',' + lastname FROM HrmResource 
			WHERE
				id IN (SELECT * FROM F_split (人力 id, ',' )) FOR xml path ( '' ))
		 ) - 1 
	) AS '多人力名称'
```

### 动态if条件

```sql
${if(len(xdbm) == 0 ,""," and cl.first_dept = '" + xdbm + "'")}  -- 限定部门
```

### 判断参数是否存在多人力或部门字段中

```sql
${if(len(djbm) == 0 ,""," and CHARINDEX(','+'" + djbm + "'+',',','+cast(ZL.djbm as VARCHAR)+',') > 0 ")}  -- 限定对接部门
```

### 当前日期格式化

```sql
select left(CONVERT(VARCHAR,GETDATE(),120),10) as '当前日期'
```



------

## 泛微OA

### 查询下拉列表

```
LEFT JOIN (select selectvalue,selectname from workflow_SelectItem where fieldid = '35244') as ws1 on ws1.selectvalue = 下拉框参数
```

### 根据登陆人信息查询登录人所在的一级部门/独立二级部门

```sql
SELECT
	departmentname 
FROM
	HrmDepartment 
WHERE
	id = (
	SELECT
		( CASE WHEN dm.firstDept = '99' THEN dm.secondDept ELSE dm.firstDept END ) AS '一级部门/独立二级部门' 
	FROM
		formtable_main_202 AS DM
		LEFT JOIN HrmResource AS HR ON HR.departmentid = DM.dept 
	WHERE
	HR.loginid = '017258' 
	)
```

### 去掉字符串中非数字

```sql
WITH cet AS (
	SELECT
		(
		SELECT CAST
			(
				CAST ((
					SELECT SUBSTRING
						( positionNumber, Number, 1 ) 
					FROM
						master..spt_values 
					WHERE
						Type = 'p' 
						AND Number <= LEN( positionNumber ) 
						AND SUBSTRING ( positionNumber, Number, 1 ) LIKE '[0-9]' FOR XML Path ( '' )) AS xml 
				) AS VARCHAR ( MAX ))) AS positionNumber 
	FROM
		uf_RD_bacterialStr 
	WHERE
		bacterialStrain = 'FPP11' 
	GROUP BY
		bacterialStrain,positionNumber 
	) 
SELECT MAX( positionNumber ) AS positionNumber FROM cet
```

