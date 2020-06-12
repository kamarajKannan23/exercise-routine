const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: Number,

        validate: {
            validator: function (v) {
                return /^[1-9]{1}[0-9]{9}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'User phone number required']
    },
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function (v) {
                return /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(v);
            },
            message: props => `${props.value} is not a valid e-mail!`
        },
        required: [true, 'User e-mail required']
    }
    // name: {
    //     type: String,
    //     required: true,
    //     minlength: 3,
    //     maxlength: 25
    // },
    // username: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     trim: true,
    //     minlength: 3,
    //     maxlength: 20
    // },
    // age: {
    //     type: Number,
    //     required: true,
    //     min: 1,
    //     max: 100
    // },
    // gender: {
    //     type: String,
    //     enum: ['MALE', 'FEMALE', 'THIRD']
    // },
    // height: {
    //     type: Number,
    //     required: true,
    //     min: 30,
    //     max: 250
    // },
    // weight: {
    //     type: Number,
    //     required: true,
    //     min: 10,
    //     max: 250
    // },
    // weightIncrease: {
    //     type: Boolean,
    //     required: true,
    // },
    // duration: {
    //     type: Number,
    //     required: true,
    //     min: 15,
    //     max: 120

    // }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema)

module.exports = User