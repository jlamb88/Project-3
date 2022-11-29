const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0.99
    },
    stock: {
        type: Number,
        min: 0,
        default: 0
    },
    allergens: [
        { type: String }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'comment'
        }]
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product