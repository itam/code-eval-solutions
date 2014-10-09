var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var wordArray = [];
                
        line.split(' ').forEach(function (word) {
            wordArray.push(word[0].toUpperCase() + word.substr(1, word.length - 1));
        });
        
        console.log(wordArray.join(" "));
    }
});
