var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var solution = "";
        var toUpperCase = false;
        
        for(var i = 0; i <= line.length -1; i++) {
            if(/[\W\s]/.test(line[i])) {
                solution += line[i];
            } else {
                if(toUpperCase){
                    solution += line[i].toLowerCase();
                    toUpperCase = false;
                } else {
                    solution += line[i].toUpperCase();
                    toUpperCase = true;
                }
            }
        }
        
        console.log(solution);
    }
});
