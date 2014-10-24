var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        if(line.length <= 55) {
            console.log(line);   
        } else {
            var shortString = line.substr(0,40);

            if(line.charAt(40) !== " " && shortString.lastIndexOf(" ") > 1) {
                shortString = shortString.substr(0, shortString.lastIndexOf(" "));
            }
            
            console.log(shortString + "... <Read More>");
        }
    }
});
