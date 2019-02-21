var i;
function index(){
		console.log("1. log [call log.js]");
		console.log("2. events");
		console.log("3. sayhello()");
		console.log("4. path");
		console.log("5. Exit");
	}
function readinput(){
		var r1 = require('readline');
		var prompts = r1.createInterface(process.stdin,process.stdout);
		prompts.question("Enter any Event No.",function(index){//console.log(typeof(index)); //string
	 	i = Number(index);
	 	//console.log(i);
	 	return i;
		});	
	}
function otherfile(){
	const r = require('./log');//other file require in current file
	r.log('want to login'+" => " + "logfile's function call");//call login files function
}
function nodeevent(){
	const EventEmitter = require('events');
	const emitter = new EventEmitter();
	emitter.on('meassageLogger',function(arg){ // 1) event call
	console.log("Listner called" , arg);
	console.log("Listner called" + arg);
	})
	emitter.emit('meassageLogger',{id:1,url:'http://'});// 2) event made	
}
function simplefunction(){
	function sayhello(name){
		console.log("Hello:" + name);
	}
	sayhello("Mrunal"); 
}
function path(){
	const path = require('path');
	var pathofBfile = path.parse(__filename);//path of log file

	console.log(pathofBfile);
	console.log(pathofBfile.base);
}
function callback(){
	var call = new Promise(function(resolve,reject){
	var r1 = require('readline');
	var prompts = r1.createInterface(process.stdin,process.stdout);
	prompts.question("Enter any Event No.",function(index){//console.log(typeof(index)); //string
	i = Number(index);
		resolve(i);
	});
})
}
index();
var input = new Promise(function(resolve,reject){
	resolve(callback())
})
input.then(function(){
	call.then(function(i){
	console.log("i in resolve: "+ i);
	switch (i) {
	case 1:
		console.log("1");//otherfile();
		callback();
	break;

	case 2:
	break;

	case 3:
	break;

	case 4:
	break;

	default:
	console.log("invalide selection");
	break;
}
})	
})


/*index();
let call = new Promise(function(resolve,reject){
	//resolve()
	let item = readinput();
	console.log("item: " + item);
	console.log("in promise");
});

call.then(function(){
	console.log("resolve");
	switch (item) {
	case 1:
		otherfile();
	break;

	case 2:
	break;

	case 3:
	break;

	case 4:
	break;

	default:
	console.log("invalide selection");
	break;
}
})
*/

