
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Book');
var connection = mongoose.connection;
connection.on('connected',function(){
    console.log('connected db');
}) 
connection.on('Disconnected',function(){
    console.log('Disconnected db');
}) 
connection.on('Error',function(error){
    console.log('connected db',error);
}) 
process.on('SIGINT',function(){
    connection.close(function(){
        console.log('db connectionclose due to termination');
        process.exit(0);
    })
})
module.export = connection;
