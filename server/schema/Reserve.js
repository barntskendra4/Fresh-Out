const mongoose = require('mongoose');

const reserveSchema = new mongoose.Schema({
    email: String,
    password: String,
    date: String,
    address: String,
    apt: String,
    city: String,
    state: String,
    zip: Number
});

module.exports = mongoose.model('Reserve', reserveSchema)