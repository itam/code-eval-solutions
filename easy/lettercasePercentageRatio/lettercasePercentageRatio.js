var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var lowerCount = 0, upperCount = 0;
        
        for(var i = (line.length - 1); i >= 0; i--) {
            if(/[A-Z]/.test(line[i])) {
                upperCount++;
            } else {
                lowerCount++;   
            }
        }
            
        console.log(
            'lowercase: ' + ((lowerCount/ line.length ) * 100).toFixed(2) +
            ' uppercase: ' + ((upperCount/ line.length ) * 100).toFixed(2)
        );
    }
});
