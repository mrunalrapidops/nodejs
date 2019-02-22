var express = require('express');
var app = express();//routes and start server
var bodyParser = require('body-parser');//greb elements form front end and para of URL
var mongoose = require('mongoose');
var Book = require('./book.model');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var db = 'mongodb://localhost/example'; 
mongoose.connect(db,{ useNewUrlParser: true }); 
mongoose.Promise = global.Promise;
let db1 = mongoose.connection;

db1.on('error', console.error.bind(console, 'MongoDB connection error:'));
var port = 3000;
 app.listen(port,function(){
     console.log("Server started"); 
 })



 let Book_create = function (req, res) {
    let book = new Book(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    book.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Book Created successfully')
    })
};

app.get("/create",Book_create);





//mongoose.connect(db,{ useNewUrlParser: true });    
/* mongoose.Promise = global.Promise;
let db1 = mongoose.connection;
db1.on('error', console.error.bind(console, 'MongoDB connection error:'));
if(db1){
   
    



    console.log("connected db");
}
else{
    console.log(" not connected db");
}
var port = 8081;
app.listen(port,function(req,res){
     console.log("server start");
 }) 
 */
