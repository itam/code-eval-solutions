var fs  = require("fs");
    
var fib = function(n) {
    return n < 2 ? n : fib(n - 1) + fib(n - 2);
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(fib(parseInt(line)));
    }
});
