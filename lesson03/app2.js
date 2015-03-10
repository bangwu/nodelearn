var http = require('http');
var server =http.createServer();
server.on('request', function(req, res){
	console.log('请求开始');
});
server.once('request', function(req, res){
	console.log(req.url);
	res.write('nihao');
});
server.on('request', function(req, res){
	console.log('请求结束');
	res.end();
});
server.listen(1337, '127.0.0.1');
console.log("Server has running at 127.0.0.1:1337")