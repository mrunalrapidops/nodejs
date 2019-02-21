//exist or not
var fs = require('fs');
 var file = "./javascript.txt";
 fs.exists(file,function(exists){
    if(exists)
    {
      console.log("exists");
    }
    else{
      console.log("exists");
    }
 });

var data1 ="Welcome to NodeJS "
fs.writeFile(file,data1,function(err,data1){
    if(err){
        console.log("Error");
    }
    else{
        console.log("Writen Properly");
    }
})
fs.appendFile('./javascript.txt', 'data to append', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  
fs.readFile(file,"utf8",function(err,data){
    if(err){
       console.log("Error");
    }
    else{
        console.log(data);
    }
});



 