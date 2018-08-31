const express = require('express');
const matching = require('../matchingAlgorithm/match');
const Questions = require('../models').questions;
const Answers = require('../models').answers;
const locale = require('../models').locale;
const region = require('../models').region;

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

router.get('/locales', async (req, res) => {
  const locales = await locale.findAll({attributes: ['id','locale']});
    
  for(var i = 0; i < locale.length; i++){
    locales[i] = locales[i].toJSON();
  }
  res.send(locales);
});

router.get('/regions', async (req, res) => {
  const regions = await region.findAll({attributes: ['id','region']});
    
  for(var i = 0; i < regions.length; i++){
    regions[i] = regions[i].toJSON();
  }
  res.send(regions);
});

module.exports = router;
