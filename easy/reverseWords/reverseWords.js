var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitArray = line.split(' ');
        var solution = [];
        
        while(splitArray.length) {
             solution.push(splitArray.pop());
        }
        
        console.log(solution.join(" "));
    }
});
