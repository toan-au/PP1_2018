const express = require('express');
const { potentialMatches } = require('../matchingAlgorithm/dummyData');

const router = express.Router();

router.get('/match/:id', (req, res) => {
  res.send(potentialMatches);
});

module.exports = router;
