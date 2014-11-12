var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitArray = line.split(" ");
        var currentNumber = splitArray[0];
        var currentCount = 0;
        var solutionArray = [];
        
        splitArray.forEach(function(number) {
            if(currentNumber == number) {
                currentCount++;   
            } else {
                solutionArray.push(currentCount);
                solutionArray.push(currentNumber);
                
                currentNumber = number;
                currentCount = 1;
            }
        });
        
        solutionArray.push(currentCount);
        solutionArray.push(currentNumber);

        console.log(solutionArray.join(" "));
    }
});
