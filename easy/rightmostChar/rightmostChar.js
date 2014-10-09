var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitArray = line.split(',').filter(Boolean);
        var sentence = splitArray[0].trim();
        var letter = splitArray[1].trim();
        
        for(var i = sentence.length; i >= 0; i--) {
            if(letter === sentence[i]) {
                 console.log(i);
                return;
            }
        }
        
        console.log(-1);
    }
});
