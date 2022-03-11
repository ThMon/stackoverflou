const { default: mongoose } = require('mongoose');
const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    nickName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    creationDate: {type: Date, required: true},
}, {collection: "user"})

module.exports = mongoose.model('user', userSchema);
