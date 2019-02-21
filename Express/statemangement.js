var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');

var app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({secret:'secretkey',saveUninitialized:true,resave:true,cookie:{maxAge:60000}}));
 
app.get('/',function(req,res,next){
    if(req.session.views){
       req.session.views++;
       res.setHeader('Content-Type','text/html')
       res.write('<p>Viwes:' + req.session.views + '</p>')
       res.write('<p>Expires in ' +(req.session.cookie.maxAge / 1000) + '</p>');
       res.end("Responce End");
    }
    else{
        req.session.views = 1
            res.end('Refresh page'); 
    }
});
//set cookie
/* app.get('/',function(req,res){
    res.cookie('myfirstcookie',"Tutorial of cookie");
    res.end("res end");
})
//remove cookie
app.get('/remove',function(req,res){
    res.clearCookie('myfirstcookie');
});
 */app.listen(8080,function(req,res){
    console.log("server start");
})
