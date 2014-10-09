var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitArray = line.split(":");
        var numbers = splitArray[0].split(" ").filter(Boolean);
        var swapPositions = splitArray[1].split(",");
        
        swapPositions.forEach(function(positions) {
            var splitPositions = positions.trim().split('-');
            var temp = "";
            
            temp = numbers[splitPositions[0]];
            numbers[splitPositions[0]] = numbers[splitPositions[1]];
            numbers[splitPositions[1]] = temp;
        });
        
        console.log(numbers.join(" "));
    }
});
