const express = require('express');

const Movie = require('../models/movie/Movie');

const router = express.Router();

router.get('/', (request, response) => {
  Movie.find({})
    .then((movies) => {
      console.log(movies);
      response.json({ movies });
    })
    .catch((error) => {
      response.json(400, error);
    });
});


router.get('/:id', (request, response) => {
  Movie.findById(request.params.id)
    .then((movie) => {
      response.json(movie);
    })
    .catch((error) => {
      response.json(400, error);
    });
});


router.post('/create', (request, response) => {
  Movie.create(request.body)
    .then((movie) => {
      response.json(movie);
    })
    .catch((error) => {
      response.json(400, error);
    });
});


router.delete('/:id', (request, response) => {
  const { params: { id } } = request;
  console.log(`Entra: ${id}`);
  Movie.findByIdAndDelete(id)
    .then((query) => {
      response.json(query);
    }).catch((error) => {
      console.log(error);
      response.json(400, error);
    });
});

module.exports = router;
