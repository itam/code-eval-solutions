var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var lookupTable = {
            zero: 0,
            one: 1,
            two: 2,
            three: 3,
            four: 4,
            five: 5,
            six: 6,
            seven: 7,
            eight: 8,
            nine: 9
        };
        
        var splitArray = line.split(';');
        var solution = "";
        
        splitArray.forEach(function(word) {
            solution += lookupTable[word];
        });

        console.log(solution);
    }
});
