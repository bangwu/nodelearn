var repl = require("repl");
var con = repl.start({
//  prompt: "con> ",
  input: process.stdin,
  output: process.stdout
}).context;
con.msg = '你好';
con.testFunction = function(){
	console.log('nihao');
};