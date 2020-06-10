const mongoose = require('mongoose')

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    type: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25
    },
    rep: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    set: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    daily: {
        type: Boolean,
        required: true,
    },
    custom: {
        type: String,
        enum: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

}, {
    timestamps: true
});

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise