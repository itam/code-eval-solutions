var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var number = parseInt(line, 10);
      var previousResults = [];
      var sum = 0;
      
      while((number != 1) && (previousResults.indexOf(number) < 0)) {
          previousResults.push(number);
          
          var digitsArray = number.toString().split("");
          sum = 0;
          
          digitsArray.forEach(function (item) {
              sum += Math.pow(item, 2);
          });
          
          number = sum;
      }
      
      console.log(number == 1 ? 1 : 0);
    }
});
