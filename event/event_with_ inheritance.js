var events = require('events');
var util = require('util');
var Student = function (name){//child class
    this.name = name;
}

util.inherits(Student,events.EventEmitter);//child //baseclass
var max = new Student('max');
max.on('score',function(marks){
    console.log(max.name + "scores" + marks);
})
max.emit('score',95);