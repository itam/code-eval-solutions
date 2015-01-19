var fs  = require("fs");

var slangArray = [
    ', yeah!',
    ', this is crazy, I tell ya.',
    ', can U believe this?',
    ', eh?',
    ', aw yea.',
    ', yo.',
    '? No way!',
    '. Awesome!'
];

var slangPosition = 0;
var lineCount = 0;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var regex = /([^.!\?]+[.\?!])/g;
        var matchArray = line.match(regex).filter(Boolean);
        
        matchArray.forEach(function(item, index) {
            if(lineCount++ % 2){
                matchArray[index] = matchArray[index].slice(0, -1) + slangArray[slangPosition % 8];
                slangPosition++;
            }
        });

        console.log(matchArray.join(""));
    }
});
