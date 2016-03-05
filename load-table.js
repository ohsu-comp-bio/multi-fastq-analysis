
function loadTable(event) {
//	console.log('loadFile');
	alasql('SELECT * FROM FILE(?,{headers:true})',[event],function(data)
	{
		return JSON.stringify(data);
	});
}

