// Import required functions and data.
const matchCalc = require('./matchCalculate.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
// const fn = Sequelize.fn; TODO: not used?

// Import db models,
const users = require('../models').users;
const prefGames = require('../models').prefGames;
const responses = require('../models').responses;
const matches = require('../models').matches;
const locale = require('../models').locale;
const region = require('../models').region;
const prefGenres = require('../models').prefGenres;
const ratings = require('../models').ratings;

const games = require('../models').games;
const genres = require('../models').genres;

/** Find matches for user of given id. */
const findMatches = async id => {
  // Test ID while writing algorithm.
  // const dummyId = 1;

  // Query for User searching for matches.
  let matchingUser = await users.findOne({
    where: { id },
    include: [{ model: prefGames }, { model: responses }, { model: matches }],
    plain: true
  });

  // Convert the user to JSON format
  matchingUser = matchingUser.toJSON();

  // Create array for use in finding users with matching game preferences.
  let relevantGames = [];
  for (let i = 0; i < matchingUser.prefGames.length; i++) {
    var filterArray = matchingUser.prefGames[i].gameId;
    relevantGames.push(filterArray);
  }

  const foundMatches = await matches.findAll({
    where: {
      [Op.or]: [{ userId: matchingUser.id }, { matchId: matchingUser.id }]
    }
  });

  const invalidMatches = [];
  // invalidMatches = 0;
  // Check and stores the ids of existing matchings.
  for (var i = 0; i < matchingUser.matches.length; i++) {
    var filterArray = foundMatches[i];
    // If the user Id is equal to the requesting Id they have already interacted with
    // that user, and will not see them.
    if (filterArray.userId == matchingUser.id) {
      invalidMatches.push(filterArray.matchId);
    }
    // If the user was not the initiating member of the match, it stores the initiating
    // user's id instead, if they have not reacted to a match.
    if (
      filterArray.matchId == matchingUser.id &&
      filterArray.userResponse == 'L' &&
      (filterArray.matchResponse == 'L' || filterArray.matchResponse == 'D')
    ) {
      invalidMatches.push(filterArray.userId);
    }
  }

  // Include the matching user as an invalid user to match with.
  invalidMatches.push(matchingUser.id);

  // Find all users who have at least one matching game to initiating user.
  const relevantUsers = await users.findAll({
    where: { id: { [Op.notIn]: invalidMatches } },
    limit: 30,
    include: [
      {
        model: prefGames,
        where: { gameId: { [Op.or]: relevantGames } },
        include: [{ model: games }]
      },
      { model: prefGenres, include: [{ model: genres }] },
      { model: responses },
      { model: locale },
      { model: region },
      { model: ratings },
      { model: matches }
    ]
  });

  // Converts all matches to JSON standard format.
  for (let i = 0; i < relevantUsers.length; i++) {
    relevantUsers[i] = relevantUsers[i].toJSON();
  }

  // Calculate matching scores for all relevant users, and add them to each relevant user.
  matchCalc.calculateMatches(matchingUser, relevantUsers);

  /** Sort by matching scores. */
  const orderDesc = (b, a) => a.matchingScore - b.matchingScore;

  // TODO: function to average ratings of users.

  // Sort array by descending matching scores.
  relevantUsers.sort(orderDesc);
  return relevantUsers;
};

module.exports = { findMatches };
