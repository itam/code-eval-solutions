var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    var letters = "abcdefghij";
    
    if (line !== "") {
        var splitArray = line.split("");
        var solution = "";
        
        splitArray.forEach(function(char) {
            if(isNaN(char)) {
                if(letters.indexOf(char) >= 0) {
                    solution += letters.indexOf(char);
                }
            } else {
                solution += char;   
            }
        });
        
        console.log(solution ? solution : 'NONE');
    }
});
