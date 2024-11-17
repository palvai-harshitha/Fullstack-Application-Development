
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSequence = require('mongoose-sequence')(mongoose);  

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        
    },
    genre: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    bookImg: {
        type: String
    },
    avaliability: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    descrption: {
        type: String,
        required: true
    },
    uniqueId: {
        type: Number,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
});

bookSchema.plugin(mongooseSequence, {
    inc_field: 'uniqueId',  // Field to be auto-incremented
    start_seq: 1            // Start sequence at 1
});

const BookModel = mongoose.model('books', bookSchema);
module.exports = BookModel;