const express = require('express');

const Celebrity = require('../models/celebity/Celebrity');
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


router.post('/create', (request, response) => {
  Celebrity.create(request.body)
    .then((celebrity) => {
      response.json(celebrity);
    })
    .catch((error) => {
      response.json(400, error);
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
