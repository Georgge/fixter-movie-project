const express = require('express');

const Celebrity = require('../models/celebity/Celebrity');
const Movie = require('../models/movie/Movie');
const seed = require('../bin/seed_celebrities');

const router = express.Router();

router.get('/', (request, response) => {
  Celebrity.find({})
    .then((celebrities) => {
      response.json({ celebrities });
    })
    .catch((error) => {
      response.json(400, error);
    });
});


router.get('/:id', (request, response) => {
  Celebrity.findById(request.params.id)
    .then((celebrity) => {
      response.json(celebrity);
    })
    .catch((error) => { response.json(400, error); });
});


router.get('/movies/:id', (request, response) => {
  const { params: { id } } = request;
  Movie.find({ actors: id })
    .then((movies) => {
      response.json({ movies });
    }).catch((error) => {
      response.json(400, error);
    });
});


router.post('/create', (request, response) => {
  Celebrity.create(request.body)
    .then((celebrity) => {
      response.json(celebrity);
    })
    .catch((error) => {
      response.json(400, error);
    });
});


router.delete('/:id', (request, response) => {
  const { params: { id } } = request;

  Movie.find({ actors: id })
    .then((movies) => {
      movies.map((movie) => {
        const actorsArray = movie.actors.filter(actor => actor !== id);
        Movie.findByIdAndUpdate(movie._id, { $set: { actors: actorsArray } } )
          .then((query) => {
            console.log(`Deleted: ${query}`);
          });
      });
      Celebrity.findByIdAndDelete(id)
        .then((query) => {
          response.json(query);
        }).catch((error) => {
          console.log(error);
          response.json(400, error);
        });
    }).catch((error) => {
      console.log(error);
      response.json(error);
    });
});


router.post('/seed', (request, response) => {
  Celebrity.insertMany(seed)
    .then((celebrities) => {
      response.json(celebrities);
    })
    .catch((error) => {
      response.json(400, error);
    });
});

module.exports = router;
