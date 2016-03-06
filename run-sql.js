var tm = Date.now();
var db = new alasql.Database('database');

var data = "";
event = [];

var testvar;

function closed()
{
	console.log("in closed" + data);
}

$("#run-query").on('click',function()
{
	sql_string = $("#sql-string").val();
	console.log("sql_string: " + sql_string);
	runSQL(sql_string);
});

$("#load-file").on('change',function(event)
{
	for (var i = 0 ; i < event.length ; i++)
	{
		console.log("event " + i + ": " + e);
	}
	console.log("in onclick");
	//loadFile(event);
	closed()
});

$("#save-file").on('click',function(){saveTable();});

function loadFile(event) {
	console.log('loadFile');
	alasql('SELECT * FROM FILE(?,{headers:true})',[event],function(res){
		data = res;
		document.getElementById("res").textContent = JSON.stringify(res);
	});
}


//function loadFile(event) {
	//console.log('loadFile');
	//for (var i = 0 ; i < event.length ; i++)
	//{
		//console.log("event " + i + ": " + e);
	//}
	//alasql('SELECT * FROM FILE(?,{headers:true})',[event],function(res){
		//data = res;
		//document.getElementById("res").textContent = JSON.stringify(res);
		//console.log("after setting test content: " + data);
		//closed();
	//});
	//console.log(data);
//}

function saveFile() {
	console.log('saveFile');
	alasql('SELECT * INTO XLSX("myfile.xlsx",{headers:true}) FROM ?',[data]);
}


//function saveTable(type)
//{	
	//type = typeof type != 'undefined' ? type : "XLSX";
	//console.log("saving table");
    
    ///*
    //type.toUpperCase(type);
    //var extension = "";
    
    //switch (type)
    //{
        //case "CSV":
            //extension = "CSV";
            //break;
        //case "XLS":
            //extension = "XLSX";
            //break;
        //case "XLSX":
            //extension = "XLSX";
            //break;
        //default:
            //alert("Export type must be CSV or XLSX");
            //return false;
    //}
    
    //var substrings = filename.split('.'); // split the string at '.'
    
    //if (substrings.length > 1)
    //{
        //extension = substrings[-1];
        //substrings.pop();
        //filenamename = substrings.join(""); // rejoin the remaining elements without separator
    //}
    
    //filename = filename + "." + extension.toLowerCase();
    //*/
    
    //filename = "table.xlsx";
    
    //alasql("SELECT * INTO " + extension + " ('" + filename + "') FROM ?",[data]);
//}

function runSQL(sql_string)
{
	var s = '';
	//var sql_string = document.getElementById('sql-string').value;
	console.log(sql_string);
	commands = sql_string.split(';');
	console.log("commands: " + commands);
	
	commands.forEach(function(command)
	{
		console.log("command: " + command);
		command = command.trim();
		
		if (command)
		{
			//var result = db.exec(command);
			var result = alasql(command, data);
			//		console.log(document.getElementById('sql').value);
			s += '<table style="border:1px solid black">';
			s += '<tr>';

			for (var key in result[0])
			{
				s += '<th style="width:100px">' + key;
			}

			result.forEach(function(row)
			{
				s += '<tr>';
				for (var key in row)
				{
					s += '<td>' + (typeof row[key] == 'undefined' ? '' : row[key]);
				}
			});

			s += '</table>';

		}
	});
	
	document.getElementById('result').innerHTML = s;
	
}


function makeTableFromJSON(table_name, data)
{
	
	
}


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
//runSQL();


