const mongoose = require('mongoose');

const { Schema } = mongoose;

const celebritySchema = Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

module.exports = mongoose.model('Celebrity', celebritySchema);
