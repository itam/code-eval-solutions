var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var lineArray =  line.split("");
        
        for(var i = 0; i < line.length; i++) {
            var filtered = lineArray.filter(function(value) { return value === line[i]; });
            if(filtered.length < 2) {
                console.log(line[i]);
                return;
            }
        }
    }
});
