var express = require('express');
var app = express();
//multiple get Request
app.get('/',function(req,res){//request for '/'=> Home page
    res.send('Hello world');// we send responce
});
app.get('/aboutus',function(req,res){//request for '/'=> Home page
    res.send('About Us');// we send responce
});
app.get('/*list',function(req,res){//request for '/'=> Home page
    res.send('Any list');// we send responce
});

var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("listening at http://%s:%s",host,port);
});