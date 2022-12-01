const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { Schema } = mongoose

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        maxlength: 2
    },
    zipcode: {
        type: Number,
        required: true,
        minlength: 5
    },
    phone: {
        type: Number,
        minlength: 10
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must enter a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    payment: [{
        cardType: {
            type: String
        },
        cardNumber: {
            type: Number,
            minlength: 16
        },
        expiration: {
            type: String,
        },
        default: {
            type: Boolean
        }
    }]
},
    {}
)

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compareSync(password, this.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User