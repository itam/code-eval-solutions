// Not sure if this is what they are looking for...
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var numbers = line.split(" ");
        var lastPos = numbers.length - 1;
        var solution = [];
        
        numbers.forEach(function(n, i) {
            if((i % 2) === (lastPos % 2) )
                solution.push(n);
        });
        
        console.log(solution.reverse().join(" "));
    }
});
