

        alasql('SELECT * FROM FILE(?,{headers:true})',[event],function(res){
        data = res;
        document.getElementById("res").textContent = JSON.stringify(res);
