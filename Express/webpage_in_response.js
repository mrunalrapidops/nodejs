var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('public')); // publically put webpage image script 
//   ^ use is middelware prosess before final request made
var userencodeParser = bodyParser.urlencoded({extended:false})
 
//afor method=post
app.post('/process_post',userencodeParser,function(req,res){
    response={
        email:req.body.email, //change body => query
        pass:req.body.psw
    };
console.log(typeof(response));    
console.log(response);
res.end(JSON.stringify(response));
        
})

//for method="get"
app.get('/regform',function(req,res){
     res.sendFile(__dirname + "/" + "reg.html");
})

 app.get('/process_get',function(req,res){
response={
    email:req.query.email,
    pass:req.query.psw
};
console.log(typeof(response));    
console.log(response);
res.end(JSON.stringify(response));
}); 

 var server = app.listen(8080,function(){
     var host = server.address().address;
     var port = server.address().port;
     console.log("server listen");
 })

