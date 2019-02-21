var express = require('express');
var app = express();
app.get ("/",log,home)
// work in bitween
function log(req,res,next){
    console.log("log");
    next();
}
function home(req,res,next){
    console.log("hello");
    next();
}

app.listen(8080,function(){
    console.log("server listen");
})