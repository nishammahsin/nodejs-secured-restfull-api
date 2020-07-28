const mongoose = require('mongoose')

const practitionerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    phoneNumber: {
        type: Number,
        trim: true
    },
})

const Practitioner = mongoose.model('Practitioner', practitionerSchema)

module.exports = Practitioner