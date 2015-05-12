var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var numberArray = line.match(/-*\d+/g);
        var xResult = Math.pow((numberArray[2] - numberArray[0]), 2);
        var yResult = Math.pow((numberArray[3] - numberArray[1]), 2);
        
        console.log(Math.sqrt(xResult + yResult));
    }
});
