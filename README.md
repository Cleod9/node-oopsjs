# OOPS.js (For Node.js)#

----------

(For the original library and **complete usage instructions**, please see: [https://github.com/Cleod9/oopsjs](https://github.com/Cleod9/oopsjs))

This library is a Node.js port of [OOPS.js](https://github.com/Cleod9/oopsjs).

## Installation ##

```
npm install oopsjs
```

And that's it! You can then start using it by simply requiring the oopsjs package:

```javascript
var OOPS = require('oopsjs');
```

You will then have access to the library through the variable `OOPS`.  Please note that this object's scope is limited to the module it was required in, so if you would like to share the same instance of the library across separate modules you will need to make sure to pass references of the `OOPS`Object to each of them. 

See below for a quick example:

```
//Define a class
var AwesomeClass = OOPS.extend({
	_constructor_: function() {
		console.log('An awesome class has been created!');
	}
});

//Create an instance of your class
var myAwesomeClass = new AwesomeClass();
```

For **full instructions**, see the original [OOPS.js](https://github.com/Cleod9/oopsjs).

This library also works great with [ImportJS for Node](https://github.com/Cleod9/node-importjs)!


## Version History ##

**1.0.0**

-Initial release

----------

Copyrighted © 2013 by Greg McLeod

GitHub: [https://github.com/cleod9](https://github.com/cleod9)