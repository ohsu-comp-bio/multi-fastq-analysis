var data;

function loadFile(event)
{
//	console.log('loadFile');
	alasql('SELECT * FROM FILE(?,{headers:true})',[event],function(res)
    {
		data = res;
		document.getElementById("res").textContent = JSON.stringify(res);
	});
    
    // alasql
        // .promise('SELECT * FROM CSV("my.csv", {headers:true})')
        // .then(function(data)
            // {
                // console.log(data);
            // })
        // .catch(function(err)
            // {
                // console.log('Error:', err);
            // });
}

function saveFile() {
	console.log('saveFile');
	alasql('SELECT * INTO XLSX("myfile.xlsx",{headers:true}) FROM ?',[data]);
}
