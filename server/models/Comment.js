const mongoose = require('mongoose')
const { Schema } = mongoose

const commentSchema = new Schema({
    text: {
        type: String
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    product_id: {
        type: Schema.Types.ObjectID,
        ref: 'product'
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
})

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment