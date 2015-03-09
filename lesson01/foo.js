exports.printFoo = function(){ return "foo" }
var foo = require('./foo.js');
console.log(foo.printFoo());
