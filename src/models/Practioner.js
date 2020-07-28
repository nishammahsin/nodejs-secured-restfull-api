const mongoose = require('mongoose')
var paginate = require("mongoose-paginate-v2");

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

practitionerSchema.plugin(paginate);

const Practitioner = mongoose.model('Practitioner', practitionerSchema)

module.exports = Practitioner