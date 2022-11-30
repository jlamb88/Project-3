const mongoose = require('mongoose')
const bcrypyt = require('bcrypt')
const { Schema } = mongoose

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    street_address: {
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
        card_type: {
            type: String
        },
        card_number: {
            type: Number,
            minlength: 16
        },
        expiration: {
            type: String,
            match: [/^([d]{2})\/([d]{2})$/]
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
        this.password = await bcrypyt.hash(this.password, 10)
    }
    next()
})

userSchema.methods.isCorrectPassword = async function (password) {
    await bcrypt.compare(password, this.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User