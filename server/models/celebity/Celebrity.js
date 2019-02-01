const mongoose = require('mongoose');

const { Schema } = mongoose;

const celebritySchema = Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: String,
  description: String,
  photo: String,
});

module.exports = mongoose.model('Celebrity', celebritySchema);
