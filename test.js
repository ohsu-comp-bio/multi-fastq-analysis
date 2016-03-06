var data;

function loadFile(event) {
//	console.log('loadFile');
	alasql('SELECT * FROM FILE(?,{headers:true})',[event],function(res){
		data = res;
		document.getElementById("res").textContent = JSON.stringify(res);
	});
}

function saveFile() {
	console.log('saveFile');
	alasql('SELECT * INTO XLSX("myfile.xlsx",{headers:true}) FROM ?',[data]);
}
