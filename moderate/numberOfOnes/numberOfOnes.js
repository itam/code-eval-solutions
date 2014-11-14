var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var binaryString = parseInt(line).toString(2);
        var filteredString = 
            binaryString.split("").filter( function(num) {
                return num == 1;
            });
        
        console.log(filteredString.length);
    }
});
