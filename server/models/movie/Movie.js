const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  genre: String,
  plot: String,
  poster: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    defaul: 'not',
  },
  actors: [String],
});

module.exports = mongoose.model('Movie', movieSchema);
