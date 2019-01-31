const express = require('express');

const Celebrity = require('../models/celebity/Celebrity');

const router = express.Router();


router.post('/', (request, response) => {
  Celebrity.create(request.body)
    .then((celebrity) => {
      response.json(celebrity);
    })
    .catch((error) => {
      response.json(400, error);
    });
});

module.exports = router;
