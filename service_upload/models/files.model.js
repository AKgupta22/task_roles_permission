const mongoose = require("mongoose");

const fileShema = new mongoose.Schema({
    url: {
        required: true,
        type: String,
        default: ""
    },
    uploadedBy: {
        required: true,
        type: String,
        default: ""
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    uploadTime: {
        type: String,
        default: Date.now().toString()
    }

})

const fileModel = mongoose.model('file', fileShema)

module.exports = fileModel