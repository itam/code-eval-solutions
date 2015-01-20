var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitArray = line.split(" ");
        var lookupTable = {};

        splitArray.map(function(item, index) {
            lookupTable[item] = (lookupTable[item] || 0) + 1;
        });
        
        for(var key in lookupTable) {
            if(lookupTable[key] == 1) {
                console.log(splitArray.indexOf(key) + 1);
                return;
            }
        }
        
        console.log(0);
    }
});
