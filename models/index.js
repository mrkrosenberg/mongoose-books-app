//requires mongoose for this file
var mongoose = require("mongoose");

//connecting to mongo DB called book-app
mongoose.connect("mongodb://localhost/book-app");

//
module.exports.Book = require('./books.js');