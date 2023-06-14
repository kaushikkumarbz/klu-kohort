const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  name : String ,
  collegeId : String,
});

module.exports = mongoose.model('student', studentSchema);



