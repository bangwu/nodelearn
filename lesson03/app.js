console.log('This is a test string');
console.log("%s", 'home', 'foo');
console.log("%s", 'home', {foo: 'FOO'});
console.error("This is a error string");

var user = new Object();
user.name = 'wubang';
user.getName = function(){ return this.name; };
user.setName = function(name){ this.name = name;};
console.dir(user);

console.time('label');
for(var i=0; i< 100000; i++){
}
console.timeEnd('label');
//console.trace('trace');

var testModule = require('./testModule.js');
if(module == require.main){
	console.log('This is the main module');
}
console.log('------------------------------------');
console.log(__filename);
console.log(__dirname);