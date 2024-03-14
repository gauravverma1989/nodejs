// defining user table schema in database
// this file is utilized in index.js 

const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    id: Number,
    Name: String,
    Email: String,
    Password: Number
})

module.exports = mongoose.model('users', UserSchema);