var mongoose = require('mongoose');

var corgiSchema = {
  name: String,
  age: Number,
  url: String,
  liked: Boolean
}

var Corgi = mongoose.model('Corgi', corgiSchema);

module.exports = Corgi;
