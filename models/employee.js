const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    "id": Number,
    "imageUrl": String,
    "firstName": String,
    "lastName": String,
    "email": String,
    "contactNumber": Number,
    "age": Number,
    "dob": Date,
    "salary": Number,
    "address": String
})

exports.User = mongoose.model('User', userSchema);
