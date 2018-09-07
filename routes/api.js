const express = require('express');
const matching = require('../matchingAlgorithm/match');
const userCalls = require('../userFunctions/userCalls')
const Questions = require('../models').questions;
const Answers = require('../models').answers;
const locale = require('../models').locale;
const region = require('../models').region;

const router = express.Router();

//finds all matches for a user
router.get('/match/:id', async (req, res) => {
  const matches = await matching.findMatches();
  res.send(matches);
});

//returns a user's pending matches
router.get('/matches/pending/:id', async (req, res) => {
  const pendingMatches = await userCalls.getPendingMatches();
  res.send(pendingMatches);
});

//returns a user's successful matches
router.get('/matches/successful/:id', async (req, res) => {
  const successfulMatches = await userCalls.getSuccessfulMatches();
  res.send(successfulMatches);
});

// return a list of all the questions
router.get('/questions', async (req, res) => {
  const questions = await Questions.findAll({
    include: [{ model: Answers }]
  });
  res.send(questions);
});

// return a list of locales
router.get('/locales', async (req, res) => {
  const locales = await locale.findAll({attributes: ['id','locale']});
    
  for(var i = 0; i < locale.length; i++){
    locales[i] = locales[i].toJSON();
  }
  res.send(locales);
});

//return a list of regions
router.get('/regions', async (req, res) => {
  const regions = await region.findAll({attributes: ['id','region']});
    
  for(var i = 0; i < regions.length; i++){
    regions[i] = regions[i].toJSON();
  }
  res.send(regions);
});

module.exports = router;
