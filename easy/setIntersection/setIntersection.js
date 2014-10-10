var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitArray = line.split(';');
        
        var firstArray = splitArray[0].split(',');
        var secondArray = splitArray[1].split(',');
        
        var solution = [];
        
        firstArray.forEach(function(number) {
            if(secondArray.indexOf(number) >= 0) {
                solution.push(number);
            }
        });
        
        console.log(solution.join(','));
    }
});
