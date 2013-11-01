var fs = require('fs');

eval(fs.readFileSync(__dirname + '/lib/oops.js').toString());

module.exports = OOPS;