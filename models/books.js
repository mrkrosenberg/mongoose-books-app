var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//books Schema - defines the shape of the objects in the database (only referred to in this file)
var BookSchema = new Schema ({
	title : String,
	author : String,
	image : String,
	releaseDate : String
});

//books Model - exports to the app (first argument will correlate to the variable created)
var Book = mongoose.model('Book', BookSchema);

//exports the models to be used in the app (can be referenced, modified from server.js (referenced in routes))
module.exports = Book;