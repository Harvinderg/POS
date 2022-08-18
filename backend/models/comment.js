import mongoose from "mongoose";

import validator from 'validator';

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    }
}, {
    timestamp:true
});

module.exports = mongoose.model('Comment', commentSchema);