var http = require('http');
var server = http.createServer();
server.on('removeListener', function(e, f){
	console.log('对'+e+'事件取消事件处理函数');
	console.log(f);
});

server.on('newListener', function(e, f){
	console.log('对'+e+'事件添加事件处理函数');
	console.log(f);
});

server.on('request', function(req, res){
	console.log('请求开始处理');
})

server.on('request', function(req, res){
	console.log(req.url);
	res.end();
})

var testFunction = function(req, res){
	console.log('请求结束');
}

server.on('request', testFunction);

server.removeListener('request', testFunction);
server.listen(1337, '127.0.0.1');
console.log('Server has running at 127.0.0.1:1337');