/*
const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb://127.0.0.1:27017/MYDB').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error(err);
});

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true
    }
},{timestamps: true});

const User = mongoose.model('User', userSchema);*/

const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb://127.0.0.1:27017/MYDB').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error(err);
});

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true
    }
},{timestamps: true});

const User = mongoose.model('User', userSchema);

app.post('/users', async (req, res) => {
    const data = req.body;
    const user = await User.create(data);
    return res.json(user);
});
app.listen(3000, () => {
    console.log(`http://localhost:3000`);
}  );