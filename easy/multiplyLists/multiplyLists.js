var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitArray = line.split('|');
        var secondArray = splitArray[1].split(" ").filter(Boolean);
        var solution = [];
        
        splitArray[0].split(" ").filter(Boolean).forEach(function(value, index) {
            solution.push(value * secondArray[index]);
        });
        
        console.log(solution.join(" "));
    }
});
