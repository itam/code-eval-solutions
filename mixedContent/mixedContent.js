var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var numberArray = [];
        var wordArray= [];
        
        line.split(',').forEach(function (item) {
            if(parseInt(item, 10) || item.trim() === '0') {
                numberArray.push(item);
            } else {
                wordArray.push(item);
            }
        });
        
        console.log(wordArray.join().trim() 
                    + (wordArray.length && numberArray.length ? '|' : '') 
                    + numberArray.join().trim());
    }
});
