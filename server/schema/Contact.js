const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    city: String,
    state: String,
    zip: Number,
    comments: String
});

module.exports = mongoose.model('Contact', contactSchema);