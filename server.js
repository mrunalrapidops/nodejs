var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200,{"content-Type":"text/plain"});//in network
    res.end("Welcome to node server");
});
server.listen(8080,function(){
    console.log("server start @ Port:8080");
});