const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type:String},
    email: {type:String},
    dateCreated:{type:Date, default: new Date()},
    dateOfBirth:{type:Date},
    password:{type:String} //pending, completed
});
  

const UserModel = mongoose.model('User', userSchema);

module.exports = {UserModel, userSchema};
