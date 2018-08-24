const express = require('express');
const matching = require('../matchingAlgorithm/match');

const router = express.Router();

router.get('/match/:id', async (req, res) => {
  const matches = await matching.findMatches();
  res.send(matches);
});

module.exports = router;
