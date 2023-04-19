const mongoose = require("mongoose")
const booksSchema = mongoose.Schema({
    books_type: {type:String},     
    books_year: {type:String},
    books_price: { type: Number }
}) 

module.exports = mongoose.model("books", booksSchema)