const express = require('express');
const matching = require('../matchingAlgorithm/match');
const multer = require('multer');
const pfpUpload = multer({ dest: 'imgs/pfps/' });

// models
const userCalls = require('../userFunctions/userCalls');
const Questions = require('../models').questions;
const Answers = require('../models').answers;
const Locale = require('../models').locale;
const Region = require('../models').region;
const User = require('../models').users;

const router = express.Router();

//finds all matches for a user
router.get('/match/:id', async (req, res) => {
  const matches = await matching.findMatches();
  res.send(matches);
});

router.post('/user/update/:id', pfpUpload.single('pfp'), async (req, res) => {
  console.log(req.params.id);
  const user = await User.findById(req.params.id);

  // get the posted data
  const { displayName, bio, age, region, locale, playstyle } = req.body;

  // update the user
  user.updateAttributes({ displayName, bio, region, age, locale, playstyle });

  console.log(user);
  res.send(user);
});
//returns a user's pending matches
router.get('/matches/pending/:id', async (req, res) => {
  const id = req.params.id;
  const pendingMatches = await userCalls.getPendingMatches(id);
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
  const locales = await Locale.findAll({ attributes: ['id', 'locale'] });

  for (var i = 0; i < locales.length; i++) {
    locales[i] = locales[i].toJSON();
  }
  res.send(locales);
});

//return a list of regions
router.get('/regions', async (req, res) => {
  const regions = await Region.findAll({ attributes: ['id', 'region'] });

  for (var i = 0; i < regions.length; i++) {
    regions[i] = regions[i].toJSON();
  }
  res.send(regions);
});

//must be given an object, which contains the Id's of the user who selected like,
//and the user they liked.
//creates/updates a like relation.
router.get('/user/like/:userId/:targetId', async (req, res) => {
  const response = await userCalls.likeUser(
    req.params.userId,
    req.params.targetId
  );
  res.send(response);
});

//must be given an object, which contains the Id's of the user who selected like,
//and the user they liked.
//creates/updates a dislike relation.
router.get('/user/dislike/:userId/:targetId', async (req, res) => {
  const response = await userCalls.dislikeUser(
    req.params.userId,
    req.params.targetId
  );

  res.send(response);
});

//must be given an object, which contains the Id's of the user who selected like,
//and the user they liked.
//creates/updates a dislike relation.
router.get('/user/loadResponses', async (req, res) => {
  //Function takes in the object holding the data for the questionnaire
  //And the user's Id as request Id
  const response = await userCalls.finishRegistration(
    req.params.registrationForm,
    req.params.requestId
  );

  res.send(response);
});

module.exports = router;
