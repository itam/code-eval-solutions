var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(
            line.split(',').filter(function (value, index, array){
                return array.indexOf(value) == index;
            }).toString()
        );    
    }
});
