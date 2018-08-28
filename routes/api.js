const express = require('express');
const matching = require('../matchingAlgorithm/match');
const locale = require('../models').locale;
const region = require('../models').region;

const router = express.Router();

router.get('/match/:id', async (req, res) => {
  const matches = await matching.findMatches();
  res.send(matches);
});

router.get('/locales', async (req, res) => {
  const locales = await locale.findAll();
  locales = locales.toJSON();
  res.send(locales);
});

router.get('/regions', async (req, res) => {
  const regions = await region.findAll();
  regions = regions.toJSON();
  res.send(regions);
});

module.exports = router;
