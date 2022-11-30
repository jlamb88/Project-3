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
    productId: {
        type: Schema.Types.ObjectID,
        ref: 'product'
    },
    dateAdded: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    }
})

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment