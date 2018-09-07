const express = require('express');
const matching = require('../matchingAlgorithm/match');
const multer = require('multer');
const pfpUpload = multer({ storage: '/imgs/pfps/' });

// models
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
  const body = req.body;
  console.log(body);
  console.log(req.pfp);

  res.send(user);
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

module.exports = router;
