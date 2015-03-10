var http = require('http');
var server = http.createServer();
server.on('request', function(req, res){
	console.log('请求开始');
	res.write('你好');
	res.end();
});

server.on('customEvent',function(arg1, arg2, arg3){
	console.log(arg1);
	console.log(arg2);
	console.log(arg3);
});

server.emit('customEvent', 'arg1', 'arg2', 'arg3');
server.listen(1337, '127.0.0.1');
console.log('Server has running at 127.0.0.1:1337');