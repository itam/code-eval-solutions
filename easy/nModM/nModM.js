var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitLine = line.split(',');
        var n = splitLine[0];
        var m = splitLine[1];
        
        console.log(n - (m * Math.floor(n/m)));
    }
});
