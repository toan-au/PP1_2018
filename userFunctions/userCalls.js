//Declarations for express
const express = require('express');
const app = express();

//Imports required functions and data.
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const fn = Sequelize.fn;

//Imports db models
const users = require('../models').users;
const prefGames = require('../models').prefGames;
const prefGenres = require('../models').prefGenres;
const responses = require('../models').responses;
const matches = require('../models').matches;
const locale = require('../models').locale;
const region = require('../models').region;
const ratings = require('../models').ratings;
const games = require('../models').games;
const genres = require('../models').genres;
const platformIds = require('../models').platformIds;
const platforms = require('../models').platforms;



var getPendingMatches = async function(requestId) {
  //placeholder Id, will take in variable ID values in future cases
  //var requestId = 1;

  //find the requested user, and their matches
  var findMatches = await matches.findAll({ where: { userId: requestId } });

  var pendingUserIds = [];

  //extract the id values, from the matches
  for (var loopCounter = 0; loopCounter < findMatches.length; loopCounter++) {
    var filterArray = findMatches[loopCounter];
    //If the user Id is equal to the requesting Id, and the user responded Like, while the match has not responded
    if (filterArray.userResponse == 'L' && filterArray.matchResponse == 'P') {
      pendingUserIds.push(filterArray.matchId);
    }
  }

  var pendingUsers = [];
  //find the pending matches as user objects
  if (pendingUserIds.length != 0) {
    pendingUsers = await users.findAll({
      where: { id: { [Op.or]: pendingUserIds } },
      include: [{ model: region }, { model: locale }]
    });
  }
  //transform the objects to a more reasonable form
  for (var i = 0; i < pendingUsers.length; i++) {
    pendingUsers[i] = pendingUsers[i].toJSON();
  }

  //return the pending users
  return pendingUsers;
};

var getSuccessfulMatches = async function(requestId) {
  //placeholder Id, will take in variable ID values in future cases
  var requestId = 1;

  //find the requested user, and their matches
  var findMatches = await matches.findAll({
    where: { [Op.or]: [{ userId: requestId }, { matchId: requestId }] }
  });

  var matchingUserIds = [];

  //extract the id values, from the matches
  for (var loopCounter = 0; loopCounter < findMatches.length; loopCounter++) {
    var filterArray = findMatches[loopCounter];
    //If the user Id is equal to the requesting Id, and the user responded Like, and the match has liked them back
    if (
      filterArray.userId == requestId &&
      filterArray.userResponse == 'L' &&
      filterArray.matchResponse == 'L'
    ) {
      matchingUserIds.push(filterArray.matchId);
    }
    //If the user was not the initiating member of the match, it stores the initating user's id instead
    if (
      filterArray.matchId == requestId &&
      filterArray.userResponse == 'L' &&
      filterArray.matchResponse == 'L'
    ) {
      matchingUserIds.push(filterArray.userId);
    }
  }

  //Checks that the matches are not empty.
  var matchingUsers = [];
  if (matchingUserIds.length != 0) {
    //find the matching users as user objects
    matchingUsers = await users.findAll({
      where: { id: { [Op.or]: matchingUserIds } },
      include: [
        {
          model: prefGames, include: [{ model: games }]
        },
        { model: prefGenres, include: [{ model: genres }] },
        { model: locale },
        { model: region },
        { model: ratings },
        { model: platformIds, include: [{ model: platforms }]}
      ]
    });
  }
  //transform the objects to a more reasonable form
  for (var i = 0; i < matchingUsers.length; i++) {
    matchingUsers[i] = matchingUsers[i].toJSON();
  }

  //return the matching users
  return matchingUsers;
};

var likeUser = async function(requestId, targetId) {
  //debugging test.
  //var requestId = 1;
  //var targetId = 14;

  //finds all matches the user has made, or made to him.
  var findMatches = await matches.findAll({
    where: { [Op.or]: [{ userId: requestId }, { matchId: requestId }] }
  });
  // console.log(findMatches);
  //extract the id values, from the matches
  for (var loopCounter = 0; loopCounter < findMatches.length; loopCounter++) {
    var filterArray = findMatches[loopCounter];
    //If the current user, has already interacted with the target
    if (filterArray.userId == requestId && filterArray.matchId == targetId) {
      //The match already exists, make an update to the matching
      await matches.update(
        { userResponse: 'L' },
        { where: { id: filterArray.id } }
      );
      return await getPendingMatches(requestId);
    }

    //If the target has interacted with the requesting user, and they have responded
    if (
      filterArray.userId == targetId &&
      filterArray.matchId == requestId &&
      (filterArray.matchResponse == 'L' || filterArray.matchResponse == 'D')
    ) {
      //The match already exists, make an update to the matching
      await matches.update(
        { matchResponse: 'L' },
        { where: { id: filterArray.id } }
      );
      return await getPendingMatches(requestId);
    }

    //If the target has interacted with the requesting user, and they have not responded.
    if (
      filterArray.userId == targetId &&
      filterArray.matchId == requestId &&
      filterArray.matchResponse == 'P'
    ) {
      //Match exists but was pending, updates to Like.
      await matches.update(
        { matchResponse: 'L' },
        { where: { id: filterArray.id } }
      );
      return await getPendingMatches(requestId);
    }

    //The match does not exist, either as created by the user requesting the match, or the targeted user.
  }
  //A new match is built
  const newMatch = matches.build({
    userId: requestId,
    matchId: targetId,
    userResponse: 'L',
    matchResponse: 'P'
  });

  // persisted to DB
  await newMatch.save();
  return await getPendingMatches(requestId);
};
var dislikeUser = async function(requestId, targetId) {
  //debugging test.
  //var requestId = 1;
  //var targetId = 14;

  //finds all matches the user has made, or made to him.
  var findMatches = await matches.findAll({
    where: { [Op.or]: [{ userId: requestId }, { matchId: requestId }] }
  });
  // console.log(findMatches);
  //extract the id values, from the matches
  for (var loopCounter = 0; loopCounter < findMatches.length; loopCounter++) {
    var filterArray = findMatches[loopCounter];
    //If the current user, has already interacted with the target, but now wishes to dislike them
    if (filterArray.userId == requestId && filterArray.matchId == targetId) {
      //The match is updated to become a dislike
      await matches.update(
        { userResponse: 'D' },
        { where: { id: filterArray.id } }
      );
      return await getPendingMatches(requestId);
    }

    //If the target has interacted with the requesting user
    if (filterArray.userId == targetId && filterArray.matchId == requestId) {
      //The match is updated to become a dislike
      await matches.update(
        { matchResponse: 'D' },
        { where: { id: filterArray.id } }
      );
      return await getPendingMatches(requestId);
    }

    //The match does not exist, either as created by the user requesting the match, or the targeted user.
  }
  //A new match is built
  const newMatch = matches.build({
    userId: requestId,
    matchId: targetId,
    userResponse: 'D',
    matchResponse: 'P'
  });

  // persisted to DB
  await newMatch.save();
  return await getPendingMatches(requestId);
};

var finishRegistration = async function(registrationForm, requestId) {
  
  const NO_IMPORTANCE = 0;
  const LOW_IMPORTANCE = 1;
  const MED_IMPORTANCE = 2;
  const HIGH_IMPORTANCE = 3;

  const A_SELECTED = 'A';
  const B_SELECTED = 'B';
  const C_SELECTED = 'C';
  const D_SELECTED = 'D';

  const NO_QUESTIONS = 10;

  //Dummy form for testing

  /*var requestId = 1001;
  var registrationForm = {
    answers: {1: "C", 2: "A", 3: "C", 4: "A", 5: "A", 6: "C", 7: "A", 8: "A", 9: "C", 10: "A"},
    importances: {1: "high", 2: "high", 3: "low", 4: "medium", 5: "low", 6: "low", 7: "high", 8: "medium", 9: "low", 10: "low"},
    preferences: {1: {C:false, A:false, B:true, D:true}, 2: {A:true, C:true, B:true}, 3: {C:true, D:true}, 4: {B:true, C: false, A: true},
    5: {C: true, A: true, B: true, D:true}, 6: {D: false, A: true, C: true, B: true}, 7: {B: false, A: true}, 8: {B: false, A:true}, 9: {A: true, B:true}, 10: {A:true, C: true}},
    games: [1,4,42,11],
    genres: {2: true, 3: true, 6: true, 7:true}
  }*/

  //clear existing responses by the user.
  responses.destroy({ where: { userId: requestId } });
  prefGames.destroy({ where: { userId: requestId } });
  prefGenres.destroy({ where: { userId: requestId } });
  platformIds.destroy({ where: { userId: requestId } });

  //array to hold a user's responses.
  var registerResponses = [];

  //holds the importance values of all the questions
  var importanceHolder = [];

  //preloads an array of the users importance scores
  Object.values(registrationForm.importances).forEach(function(importance) {
    switch (importance) {
      case 'low':
        importanceHolder.push(LOW_IMPORTANCE);
        break;
      case 'medium':
        importanceHolder.push(MED_IMPORTANCE);
        break;
      case 'high':
        importanceHolder.push(HIGH_IMPORTANCE);
        break;
    }
  });

  //preloads an array of the users responses
  var responseHolder = [];
  Object.values(registrationForm.answers).forEach(function(answer) {
    responseHolder.push(answer);
  });

  //stores, the preferences, in a string for insertion
  var preferenceHolder = [];

  //preloads an array of user's
  Object.values(registrationForm.preferences).forEach(function(preference) {
    //Preferences String to create
    var preferenceString = '';

    //Check, if the user at any point select A
    if (preference.hasOwnProperty('A')) {
      //If the user selected A, and left it selected
      if (preference.A == true) {
        //A is added to the preference for loading
        preferenceString = preferenceString + A_SELECTED;
      }
    }

    //Check, if the user at any point select B
    if (preference.hasOwnProperty('B')) {
      //If the user selected B, and left it selected
      if (preference.B == true) {
        //B is added to the preference for loading
        preferenceString = preferenceString + B_SELECTED;
      }
    }

    //Check, if the user at any point select C
    if (preference.hasOwnProperty('C')) {
      //If the user selected C, and left it selected
      if (preference.C == true) {
        //C is added to the preference for loading
        preferenceString = preferenceString + C_SELECTED;
      }
    }

    //Check, if the user at any point select D
    if (preference.hasOwnProperty('D')) {
      //If the user selected D, and left it selected
      if (preference.D == true) {
        //D is added to the preference for loading
        preferenceString = preferenceString + D_SELECTED;
      }
    }

    preferenceHolder.push(preferenceString);
  });
  //Check for all selected, sets importance to none
  for (
    var loopCounter = 0;
    loopCounter < preferenceHolder.length;
    loopCounter++
  ) {
    if (preferenceHolder[loopCounter] == 'ABCD') {
      importanceHolder[loopCounter] = NO_IMPORTANCE;
    }
  }

  //create a genre holder to load into database.
  var selectedGenrekeys = Object.keys(registrationForm.genres);
  var selectedGenreValues = Object.values(registrationForm.genres);
  var genresHolder = [];

  //Checks for existence and loads it.
  for (
    var loopCounter = 0;
    loopCounter < selectedGenrekeys.length;
    loopCounter++
  ) {
    if (selectedGenreValues[loopCounter] == true) {
      var genreId = parseInt(selectedGenrekeys[loopCounter]);
      genresHolder.push(genreId);
    }
  }

  //populate the array of JSON objects for insertion via a bulk create (Responses).
  for (var loopCounter = 0; loopCounter < NO_QUESTIONS; loopCounter++) {
    var newResponse = {
      userId: requestId,
      questionId: loopCounter + 1,
      response: responseHolder[loopCounter],
      importance: importanceHolder[loopCounter],
      preference: preferenceHolder[loopCounter],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    registerResponses.push(newResponse);
  }

  var registerGenres = [];
  //populate the array of JSON objects for insertion via a bulk create (Responses).
  for (var loopCounter = 0; loopCounter < genresHolder.length; loopCounter++) {
    var newPrefGenre = {
      userId: requestId,
      genreId: genresHolder[loopCounter],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    registerGenres.push(newPrefGenre);
  }

  var registerGames = [];
  //populate the array of JSON objects for insertion via a bulk create (Responses).
  for (
    var loopCounter = 0;
    loopCounter < registrationForm.games.length;
    loopCounter++
  ) {
    var newPrefGame = {
      userId: requestId,
      gameId: registrationForm.games[loopCounter].id,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    registerGames.push(newPrefGame);
  }

  var registerPlatforms = [];
  const availablePlatforms = await platforms.findAll({ attributes: ['id', 'title'] });
  //populate the array of JSON objects for insertion via a bulk create (platformIds).
  for(
    var loopCounter = 0;
    loopCounter < registrationForm.platformIds.length;
    loopCounter++
  ) {

    var filterObject = registrationForm.platformIds[loopCounter]

    for(var innerCounter = 0; innerCounter < availablePlatforms.length; innerCounter++){
      var platformIdKeys = Object.keys(filterObject);
      
      if(availablePlatforms[innerCounter].title.toUpperCase() === platformIdKeys[0].toUpperCase()){
        var platformIdHolder = Object.values(filterObject)

        var newPlatformId = {
          userId: requestId,
          platformId: availablePlatforms[innerCounter].id,
          platformDisplayName: platformIdHolder[0],
          createdAt: new Date(),
          updatedAt: new Date()
        };
        registerPlatforms.push(newPlatformId);
      }
    }
  }
  //save all response recordings to database
  await responses.bulkCreate(registerResponses);
  await prefGenres.bulkCreate(registerGenres);
  await prefGames.bulkCreate(registerGames);
  await platformIds.bulkCreate(registerPlatforms);
  return;
};

var rateUser = async function(requestId, targetId, inputRating) {
  //debugging test.
  /*var requestId = 1;
  var targetId = 14;
  var inputRating = 4;*/

  if (inputRating > 5 || inputRating < 0) {
    // console.log('Invalid Rating of: ' + inputRating);
    return;
  }

  //finds all matches the user has made, or made to him.
  var findRatings = await ratings.findAll({
    where: { reviewerId: requestId }
  });
  //extract the id values, from previous ratings
  for (var loopCounter = 0; loopCounter < findRatings.length; loopCounter++) {
    var filterArray = findRatings[loopCounter];
    //If the current user, has already interacted with the target
    if (filterArray.userId == targetId && filterArray.reviewerId == requestId) {
      //update the existing rating
      await ratings.update(
        { rating: inputRating },
        { where: { id: filterArray.id } }
      );

      getAvgRating(targetId);
      return;
    }
    //The user has not rated the target user
  }

  //A new match is built
  const newRating = ratings.build({
    userId: targetId,
    reviewerId: requestId,
    rating: inputRating
  });

  // persisted to DB
  await newRating.save();
  getAvgRating(targetId);
  return;
};

var getAvgRating = async function(targetId) {
  var matchingUser = await users.findOne({
    where: { id: targetId },
    include: [{ model: ratings }],
    plain: true
  });

  var holdRatings = 0;

  for (
    var loopCounter = 0;
    loopCounter < matchingUser.ratings.length;
    loopCounter++
  ) {
    holdRatings = matchingUser.ratings[loopCounter].rating + holdRatings;
  }

  var newRating = holdRatings / matchingUser.ratings.length;

  // console.log(newRating)

  await users.update({ avgRating: newRating }, { where: { id: targetId } });

  return;
};

module.exports = {
  getPendingMatches,
  getSuccessfulMatches,
  likeUser,
  dislikeUser,
  finishRegistration,
  rateUser,
  getAvgRating
};
