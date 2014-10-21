var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
	/*
	    * names that start with numbers are valid
	    * quotes (in the beginning and end only) and anything within them in the name portion of an email address are valid
	    * . - _ are all valid in the name and domain name portion of an email
	    * single letter names and domains are valid
	*/
        console.log(/^(".*"|[\w_./+/-]+)@([\w]+[.])+[\w]+$/.test(line));
    }
});
