var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var sum = 0;
        
        for(var i = 0; i < line.length; i++) {
            sum += Math.pow(line[i], line.length);
        }

        console.log(sum.toString() === line ? 'True' : 'False');
    }
});
