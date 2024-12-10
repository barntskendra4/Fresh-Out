const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./schema/User');
const Checkout = require('./schema/Checkout');
const Contact = require('./schema/Contact');
const Reserve = require('./schema/Reserve');

mongoose.connect(
    'mongodb://127.0.0.1:27017/capstone'
    
).then( () => console.log("mongoDB connected"))

const db = mongoose.connection;
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

app.use(bodyParser.json());


app.post('/user', async (req, res) => {
    const first = req.body.first;
    const last = req.body.last;
    const userName = req.body.username;
    const password = req.body.password;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const newUser = new User({
        first: first,
        last: last,
        userName: userName,
        password: password,
        city: city,
        state: state,
        zip: zip
    })
    try {
        const savedUser = await newUser.save();
        console.log(savedUser)
        res.redirect('http://localhost:3000/')
    } catch (err) {
        console.log(err);
        res.status(500).send('Error saving your data!');
    }
});

app.get('/user', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hey, something broke in the server, sowwy');
    };
});

app.post('/checkout', async (req, res) => {
    const firstname = req.body.firstname;
    const email = req.body.email;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const cardname = req.body.cardname;
    const cardnumber = req.body.cardnumber;
    const expmonth = req.body.expmonth;
    const expyear = req.body.expyear;
    const cvv = req.body.cvv;
    const subtotal = req.body.subtotal;
    const newCheckout = new Checkout({
        firstname: firstname,
        email: email,
        address: address,
        city: city,
        state: state,
        zip: zip,
        cardname: cardname,
        cardnumber: cardnumber,
        expmonth: expmonth,
        expyear: expyear,
        cvv: cvv,
        subtotal: subtotal
    })
    try {
        const savedCheckout = await newCheckout.save();
        console.log(savedCheckout)
        res.redirect('http://localhost:3000')
    } catch (err) {
        console.log(err);
        res.status(500).send('Error saving your data!');
    }
});

app.get('/checkout', async (req, res) => {
    try {
        const checked = await Checkout.find({});
        res.json(checked);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hey, something broke in the server, sowwy');
    };
});

app.post('/contact', async (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const comments = req.body.comments;
    const newContact = new Contact({
        firstname: firstname,
        lastname: lastname,
        email: email,
        city: city,
        state: state,
        zip: zip,
        comments: comments
    })
    try {
        const savedContact = await newContact.save();
        console.log(savedContact)
        res.redirect('http://localhost:3000/')
    } catch (err) {
        console.log(err);
        res.status(500).send('Error saving your data!');
    }
});

app.get('/contact', async (req, res) => {
    try {
        const contacts = await Contact.find({});
        res.json(contacts);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hey, something broke in the server, sowwy');
    };
});

app.post('/reserve', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const date = req.body.date;
    const address = req.body.address;
    const apt = req.body.apt;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const newReservation = new Reserve({
        email: email,
        password: password,
        date: date,
        address: address,
        apt: apt,
        city: city,
        state: state,
        zip: zip,
    })
    try {
        const savedReservation = await newReservation.save();
        console.log(savedReservation)
        res.redirect('http://localhost:3000/')
    } catch (err) {
        console.log(err);
        res.status(500).send('Error saving your data!');
    }
});

app.get('/reserve', async (req, res) => {
    try {
        const Reserve = await Reserve.find({});
        res.json(Reserve);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hey, something broke in the server, sowwy');
    };
});

app.listen(port, () => {
    console.log(`I'm watching you 👀 on port ${port}!`);
});