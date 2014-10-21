var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitArray = line.split("|");
        var code = splitArray[0];
        var positions = splitArray[1].split(" ").filter(Boolean);
        
        var solution = "";
        
        positions.forEach(function(pos) {
            solution += code.charAt(parseInt(pos) - 1);
        });
        
        console.log(solution);
    }
});
