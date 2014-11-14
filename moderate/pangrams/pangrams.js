var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    // I'm just being lazy here
    var alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    
    if (line !== "") {
        var missingLetters = "";
        
        alphabetArray.forEach(function(letter) {
            if((line.indexOf(letter) < 0) && (line.indexOf(letter.toUpperCase()) < 0)) {
                missingLetters += letter;
            }
        });
        
        console.log(missingLetters ? missingLetters : 'NULL');
    }
});
