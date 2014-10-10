var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var splitArray = line.split(" ");
        var x = splitArray[0];
        var y = splitArray[1];
        var results = [];
        
        for(var i = 1; i <= splitArray[2]; i++) {
            var item = "";
            
            if(i % x === 0) {
                item += "F";
            }
            
            if(i % y === 0) {
                item += 'B';
            }
            
            if(!item) {
                 item = i;   
            }
            
            results.push(item);
        }
        
        console.log(results.join(" "));
    }
});
