var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitArray = line.split(";");
        var numberArray = splitArray[0].split(",");
        var sum = parseInt(splitArray[1]);
        
        var solution = [];
        
        numberArray.forEach(function(number, numberIndex) {
            var index = numberArray.indexOf((sum - number).toString());
            
            if(index > 0 && (index != numberIndex)) {
                delete numberArray[index];
                solution.push(number + ',' + (sum - number));
            }
        });
        
        console.log(solution.length ? solution.join(";") : "NULL");
    }
});
