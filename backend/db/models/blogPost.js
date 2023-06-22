const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

let BlogPostSchema = new Schema({
  author: String,
  title: String,
  body: String,
  date: Date
});

module.exports = mongoose.model('blog', BlogPostSchema);



