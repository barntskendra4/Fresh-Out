const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
    firstname: String,
    email: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    cardname: String,
    cardnumber: Number,
    expmonth: String,
    expyear: Number,
    cvv: Number,
    subtotal: String
})

module.exports = mongoose.model("Checkout", checkoutSchema);