const mongoose = require('mongoose')
const { Schema } = mongoose

const orderSchema = new Schema({
    orderedAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },
    total: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectID,
        ref: 'user'
    },
    products: [{
        type: Schema.Types.ObjectID,
        ref: 'product'
    }],
    transId: {
        type: Number,
        required: true
    }
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order