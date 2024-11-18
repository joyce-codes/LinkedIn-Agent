const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
   
    name: {type:String},
    email: {type:String},
    dateCreated:{type:Date, default: new Date()},
    dateOfBirth:{type:Date},
    password:{type:String} //pending, completed
  });
  

const ProfileModel = mongoose.model('Profile', transactionSchema);

module.exports = {TransactionModel, tansactionSchema};