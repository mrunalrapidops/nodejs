var events = require('events');// for eventEmitter 
var eventEmitter = new events.EventEmitter(); 
eventEmitter.on('Ans',function(arg){ // Ans is keyword
    console.log("Ans event"+"pass"+arg);

})
eventEmitter.emit('Ans',"argument 1")// Ans event call