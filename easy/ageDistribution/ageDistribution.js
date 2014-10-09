var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var parsedLine = parseInt(line);
       
        switch(true) {
            case (parsedLine < 0 || parsedLine > 100):
                console.log("This program is for humans");
                break;
            case (parsedLine <= 2):
                console.log("Still in Mama's arms");
                break;
            case (parsedLine <= 4):
                console.log("Preschool Maniac");
                break;
            case (parsedLine <= 11):
                console.log("Elementary school");
                break;
            case (parsedLine <= 14):
                console.log("Middle school");
                break;
            case (parsedLine <= 18):
                console.log("High school");
                break;
            case (parsedLine <= 22):
                console.log("College");
                break;
            case (parsedLine <= 65):
                console.log("Working for the man");
                break;
            case (parsedLine <= 100):
                console.log("The Golden Years");
                break;
        }
    }
});
