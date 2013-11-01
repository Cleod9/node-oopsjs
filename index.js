var fs = require('fs');

eval(fs.readFileSync('./lib/oops.js').toString());

module.exports = OOPS;