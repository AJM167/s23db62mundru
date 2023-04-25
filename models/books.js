const mongoose = require("mongoose")

const booksSchema = mongoose.Schema({
    books_type: { type: String },     
    books_year: { type: String },
    books_price: {
        type: Number,
        min: [0, 'Price cannot be negative'],
        max: [10000, 'Price cannot exceed 10000']
    }
}) 

module.exports = mongoose.model("books", booksSchema)
