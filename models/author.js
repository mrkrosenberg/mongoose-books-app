//imports dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new Schema for authors
var AuthorSchema = new Schema ({
	name : String,
	alive : Boolean,
	image : String
});

//creates model from AuthorSchema
var Author = mongoose.model('Author', AuthorSchema);

//export 
module.exports = Author;