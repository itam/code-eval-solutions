var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var solution = "";
        
        for(var i = 0; i <= line.length -1; i++) {
            solution += /[A-Z]/.test(line[i]) ? line[i].toLowerCase() : line[i].toUpperCase();
        }
        
        console.log(solution);
    }
});
