var tm = Date.now();
var db = new alasql.Database();

var runsql = function() {
  var s = '';
  var sqls = document.getElementById('sql').value;
  //		console.log(sqls.split(';'));
  sqls.split(';').forEach(function(sql) {
    sql = sql.trim();
    if (sql) {
      var res = db.exec(sql);
      //		console.log(document.getElementById('sql').value);
      s += '<table style="border:1px solid black">';
      s += '<tr>';
      for (var key in res[0]) {
        s += '<th style="width:100px">' + key;
      }
      res.forEach(function(row) {
        s += '<tr>';
        for (var key in row) {
          s += '<td>' + (typeof row[key] == 'undefined' ? '' : row[key]);
        }
      });
      s += '</table>';
    }
  });
  document.getElementById('result').innerHTML = s;
};
db.exec("DROP TABLE IF EXISTS employees");
db.exec("CREATE TABLE employees( id integer,  name text,\
                          designation text,     manager integer,\
                          hired_on    date,     salary  integer,\
                          commission  float,    dept    integer)");
db.exec("INSERT INTO employees VALUES (1,'JOHNSON','ADMIN',6,'1990-12-17',18000,NULL,4);");
db.exec("INSERT INTO employees VALUES (2,'HARDING','MANAGER',9,'1998-02-02',52000,300,3);");
db.exec("INSERT INTO employees VALUES (3,'TAFT','SALES I',2,'1996-01-02',25000,500,3);");
db.exec("INSERT INTO employees VALUES (4,'HOOVER','SALES I',2,'1990-04-02',27000,NULL,3);");
db.exec("INSERT INTO employees VALUES (5,'LINCOLN','TECH',6,'1994-06-23',22500,1400,4);");
db.exec("INSERT INTO employees VALUES (6,'GARFIELD','MANAGER',9,'1993-05-01',54000,NULL,4);");
db.exec("INSERT INTO employees VALUES (7,'POLK','TECH',6,'1997-09-22',25000,NULL,4);");
db.exec("INSERT INTO employees VALUES (8,'GRANT','ENGINEER',10,'1997-03-30',32000,NULL,2);");
db.exec("INSERT INTO employees VALUES (9,'JACKSON','CEO',NULL,'1990-01-01',75000,NULL,4);");
db.exec("INSERT INTO employees VALUES (10,'FILLMORE','MANAGER',9,'1994-08-09',56000,NULL,2);");
db.exec("INSERT INTO employees VALUES (11,'ADAMS','ENGINEER',10,'1996-03-15',34000,NULL,2);");
db.exec("INSERT INTO employees VALUES (12,'WASHINGTON','ADMIN',6,'1998-04-16',18000,NULL,4);");
db.exec("INSERT INTO employees VALUES (13,'MONROE','ENGINEER',10,'2000-12-03',30000,NULL,2);");
db.exec("INSERT INTO employees VALUES (14,'ROOSEVELT','CPA',9,'1995-10-12',35000,NULL,1);");
//	SELECT designation,COUNT(*) AS nbr, (AVG(salary)) AS avg_salary FROM employees GROUP BY designation ORDER BY avg_salary DESC;
runsql();


