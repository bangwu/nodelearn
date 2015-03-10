var testFunction = function(){
	console.log("call back function execute");
}

var timer = setInterval(testFunction,3000);
timer.unref();