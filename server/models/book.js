/* File name: book.js
 * Student's Name: Tanisha Sharma
 * StudentID: 301144152
 * Date: 2021/06/24
 */

let mongoose = require('mongoose');

// create a model class
const bookModel = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    published:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    }
})

/**
 * add your code to 
 * create your model here
 * 
 */


module.exports = mongoose.model('Book', bookModel);