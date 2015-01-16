var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var regex = /(.)\1+/g;
        console.log(line.replace(regex, '$1'));
    }
});
