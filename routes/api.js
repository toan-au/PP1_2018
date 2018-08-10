const express = require('express');
const matching = require('../matchingAlgorithm/match');

const router = express.Router();

router.get('/match/:id', (req, res) => {
  const matches = matching.findMatches();
  res.send(matches);
});

module.exports = router;
