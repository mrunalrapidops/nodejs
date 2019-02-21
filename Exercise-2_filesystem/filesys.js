console.log("GLobal variable");
//console.log("file location :- " + __filename);
//console.log("Directory Name:- "+ __dirname);
//console.log("Directory Name:- "+ process.cwd());
var fs = require('fs');
var path = require('path');
var filename = __filename;
var extension = path.extname(filename);
console.log("your file extension is :-" + extension);
function howmany_typeof_fileinfolder(){
    var dir = __dirname;
    fs.readdir(dir, (err, files) => {
        console.log(files.length);
        console.log(files);
        for (i = 0; i < files.length; i++) {
            text = files[i] ;
          }
      });
}
howmany_typeof_fileinfolder();