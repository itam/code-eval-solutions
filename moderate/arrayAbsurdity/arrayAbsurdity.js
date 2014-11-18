var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitArray = line.split(";");
        var dupedArray = splitArray[1].split(',');
        
        for(var i = 0; i < dupedArray.length; i++) {
            var filtered = dupedArray.filter(function(item) {
                return dupedArray[i] === item;
            });
            
            if(filtered.length > 1) {
                console.log(dupedArray[i]);
                return;
            }
        }
    }
});
