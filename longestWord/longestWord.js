var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var longestWord = "";
        
        line.split(" ").filter(Boolean).forEach(function (word) {
            if(longestWord.length < word.length) {
                longestWord = word;
            }
        });
        
        console.log(longestWord);
    }
});
