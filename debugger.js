var http = require("http");//module library file
http.createServer(function(req,res){
    var body = "This is Body of Response";
    var content_length = body.length;
    res.writeHead(200,{
        'Content-Type':'text/plain',
        'Contect-Length' : content_length
    });
    res.end(body); 
}).listen(8080);
console.log("server running");