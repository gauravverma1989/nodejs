// defining user table schema in database
// this file is utilized in index.js 

const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Password: String
})

module.exports = mongoose.model('users', UserSchema);