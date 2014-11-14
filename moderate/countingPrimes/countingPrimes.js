var fs  = require("fs");

var isPrime = function(n) {
    if(n < 2) {
        return false;
    }
    
    var isPrime = true;
    
    for(var i = 2; i <= Math.sqrt(n); i++) {
        if(!(n % i)) {
            isPrime = false;
        }
    }
    
    return isPrime;
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitArray = line.split(',');
        var count = 0;
        
        for(var i = parseInt(splitArray[0]); i <= parseInt(splitArray[1]); i++) {
            if(isPrime(i)) {
                count++;
            }   
        }
        
        console.log(count);
    }
});
