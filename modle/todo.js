const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    duedate:{
        type:Date,
        required:true,
        default:Date.now
    },
     userID: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'user', // Reference to User model (for user-specific todos)
         required: true
     }
}, { timestamps: true });

module.exports = mongoose.model('Todo', todoSchema);
