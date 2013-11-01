var fs = require('fs');
var OOPS = require('./index.js');

//How to use
var Class = OOPS.extend({
	_constructor_: function() {
	},
	toString: function() {
		return "[Class]";
	}
});

var myClass = new Class();

console.log("myClass.toString() = " + myClass.toString());

//For more info, see: https://github.com/Cleod9/oopsjs/