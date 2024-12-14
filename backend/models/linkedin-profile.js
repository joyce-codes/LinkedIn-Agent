const mongoose = require('mongoose');

const linkedinProfileSchema = new mongoose.Schema({
    name: {type:String},
    url: {type:String},
    bio: {type:String},
    location: {type:String},
    dateLastChecked:{type:Date, default: new Date()},
});
  

const LinkedinProfileModel = mongoose.model('LinkedinProfile', linkedinProfileSchema);

module.exports = {LinkedinProfileModel, linkedinProfileSchema};
