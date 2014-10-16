var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitArray = line.split(',');
        var n = parseInt(splitArray[1]);
        var x = parseInt(splitArray[0]);
        var solution = n;
        
        for(var i = 2; solution < x; i++) {
            solution = n * i;
        }
        
        console.log(solution);
    }
});
