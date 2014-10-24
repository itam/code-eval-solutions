var fs  = require("fs");
var inputArray = fs.readFileSync(process.argv[2]).toString().split('\n');
var stringArray = inputArray.slice(1);

stringArray.sort(function(a, b) {
    return (a.length > b.length) ? 1 : -1;
});

for(var i = 0; i < inputArray[0]; i++) {
    console.log(stringArray.pop());
}
