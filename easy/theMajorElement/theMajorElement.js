var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var numbers = line.split(",");
        var count = {};
        
        numbers.forEach(function(n, i) {
            if(count[n]) {
                count[n]++;   
            } else {
                count[n] = 1;
            }
        });
        
        for(var i in count) {
            if(count[i] > (numbers.length / 2)) {
                console.log(i);
                return;
            }
        }
        
        console.log('None');
    }
});
