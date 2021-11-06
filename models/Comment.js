const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./User')

const commentSchema = new Schema({
    
    comment: {
        type: String,
        required: true
    }

}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

// const commentSchema = new mongoose.Schema({

//     name: {
//         type: String,
//         required: true,
//         min: 2,
//         max: 50
//     },
//     comment: {
//         type: String,
//         required: true,
//         min: 1,
//         max: 100
//     }
//     ,
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });

module.exports = Comment;

// module.exports = mongoose.model('Comment', commentSchema);

