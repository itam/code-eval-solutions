var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitArray = line.split(" ");
        var number = splitArray.pop();
        var index = splitArray.length - number;

        if(index >= 0) {
            console.log(splitArray[index]);
        }
    }
});
