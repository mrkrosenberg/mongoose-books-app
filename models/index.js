var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

//compiles all the models for export (keeps imports on the server more concise)
module.exports.Book = require("./book.js");
module.exports.Author = require('./author.js');
