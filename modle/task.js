const mongoose = require("mongoose")
const taskscheema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    }
})
module.exports = mongoose.model('task', taskscheema)