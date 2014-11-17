var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitArray = line.split(',');
        var re = new RegExp("[" + splitArray[1].trim() + "]", "g");
        
        console.log(splitArray[0].replace(re, ""));
    }
});
