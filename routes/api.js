const express = require('express');
const matching = require('../matchingAlgorithm/match');
const Questions = require('../models').questions;
const Answers = require('../models').answers;

const router = express.Router();

router.get('/match/:id', async (req, res) => {
  const matches = await matching.findMatches();
  res.send(matches);
});

// return a list of all the questions
router.get('/questions', async (req, res) => {
  const questions = await Questions.findAll({
    include: [{ model: Answers }]
  });
  res.send(questions);
});

module.exports = router;
