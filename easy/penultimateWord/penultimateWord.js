var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitArray = line.split(" ").filter(Boolean);
        var index = (splitArray.length - 2) >= 0 ? splitArray.length - 2 : 0;
        
        console.log(splitArray[index]);
    }
});
