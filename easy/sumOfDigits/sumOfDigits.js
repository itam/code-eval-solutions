var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var sum = 0;
        
        for(var i = line.length - 1; i >= 0; i--) {
            sum += parseInt(line[i]);
        }
        
        console.log(sum);
    }
});
