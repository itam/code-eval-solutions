var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitArray = line.split(',');
        var binaryString = parseInt(splitArray[0]).toString(2);
        
        console.log(binaryString[binaryString.length - splitArray[1]] === binaryString[binaryString.length - splitArray[2]]);
    }
});
