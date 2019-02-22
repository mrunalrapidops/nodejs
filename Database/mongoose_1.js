var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BookSchema = new Schema({
    title:String,
    keyword:Array,
    publication:Boolean
});
module.exports = mongoose.model('Book',BookSchema);
 