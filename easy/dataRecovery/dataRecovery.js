var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitArray = line.split(';');
        var stringArray = splitArray[0].split(' ');
        var sequence = splitArray[1].split(' ');
        var solution = [];
        
        for(var i = 1; i <= stringArray.length; i++) {
            var index = sequence.indexOf(i.toString());
            
            if(index >= 0) {
                solution.push(stringArray[index]);
            } else {
                 solution.push(stringArray[stringArray.length - 1]);
            }
        }
        
        console.log(solution.join(" "));
    }
});
