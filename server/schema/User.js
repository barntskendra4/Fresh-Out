const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    userName: String,
    password: String,
    city: String,
    state: String,
    zip: Number
});

module.exports = mongoose.model('User', userSchema);