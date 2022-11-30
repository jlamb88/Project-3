const mongoose = require('mongoose')
const { Schema } = mongoose

const cartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart

