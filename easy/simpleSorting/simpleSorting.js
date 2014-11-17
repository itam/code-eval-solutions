var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitArray = line.split(" ");
        
        console.log(splitArray.sort(function(a, b) {
            return a - b;
        }).join(" "));
    }
});
