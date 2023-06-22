const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let userSchema = new Schema({
  name : { type : String, required: true},
  phoneNumber: String,
  userName : { type : String, required: true, unique: true},
  email : { type : String, required: true, unique: true},
  password : String,
  gender : String,
  dateOfBirth : Date,
  address : String,
  isDeleted : {type : Boolean, default: false},
},{timestamps: true});


module.exports = mongoose.model('user', userSchema);



