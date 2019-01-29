const express = require('express');
const router = express.Router();

router.get('/create', (request, response) => {
  const data = {
    section: 'Create Celebtity',
  };

  response.render('celebrity/create', data);
});

module.exports = router;
