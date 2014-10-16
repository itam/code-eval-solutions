var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var sum = 0;
        
        JSON.parse(line).menu.items.forEach(function(item) {
            if(item && item.label && item.id) {
                sum += item.id;
            }
        });
        
        console.log(sum);
    }
});
