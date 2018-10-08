const axios = require('axios');
const chai = require('chai');

const assert = chai.assert;
const expect = chai.expect;
// models
const userCalls = require('../userFunctions/userCalls');
const Questions = require('../models').questions;
const Answers = require('../models').answers;
const Locale = require('../models').locale;
const Region = require('../models').region;
const Users = require('../models').users;
const Responses = require('../models').responses;
const Games = require('../models').games;
const Genres = require('../models').genres;
const PrefGenres = require('../models').prefGenres;
const PrefGames = require('../models').prefGames;
const Ratings = require('../models').ratings;
const Platforms = require('../models').platforms;
const PlatformIds = require('../models').platformsIds;
const Matches = require('../models').matches;

const dummyUser = {
  email: 'dummy@test.com.au',
  displayName: 'dummy',
  bio: 'test bio',
  regionId: 1,
  localeId: 1,
  age: 25,
  playstyle: 'casual'
};

const TARGET_DUMMY_ID = 1;
const TARGET_DUMMY_RATING = 3;

const dummyRegData = {
  answers: {
    1: 'C',
    2: 'A',
    3: 'C',
    4: 'A',
    5: 'A',
    6: 'C',
    7: 'A',
    8: 'A',
    9: 'C',
    10: 'A'
  },
  importances: {
    1: 'high',
    2: 'high',
    3: 'low',
    4: 'medium',
    5: 'low',
    6: 'low',
    7: 'high',
    8: 'medium',
    9: 'low',
    10: 'low'
  },
  preferences: {
    1: { C: false, A: false, B: true, D: true },
    2: { A: true, C: true, B: true },
    3: { C: true, D: true },
    4: { B: true, C: false, A: true },
    5: { C: true, A: true, B: true, D: true },
    6: { D: false, A: true, C: true, B: true },
    7: { B: false, A: true },
    8: { B: false, A: true },
    9: { A: true, B: true },
    10: { A: true, C: true }
  },
  games: [1, 4, 42, 11],
  genres: { 2: true, 3: true, 6: true, 7: true },
  platformIds: [
    { steam: 'dummy1' },
    { discord: 'dummy2' },
    { nintendo: 'dummy3' }
  ]
};

const user = Users.build(dummyUser);

describe('Users', () => {
  it('can be created', () => {
    assert.isNotNull(user);
  });

  it('can be persisted', async () => {
    await user.save();

    assert.isTrue(true);
  }).timeout(8000);

  //checks that a new user object exists in database
  it('can be retrieved', async () => {
    var retrieveUser = await Users.findOne({
      where: { email: dummyUser.email }
    });
    //equivalence checks
    assert.equal(
      retrieveUser.email,
      dummyUser.email,
      'field email does not match'
    );
    assert.equal(retrieveUser.bio, dummyUser.bio, 'field bio does not match');
    assert.equal(
      retrieveUser.displayName,
      dummyUser.displayName,
      'field displayName does not match'
    );
    assert.equal(retrieveUser.age, dummyUser.age, 'field age does not match');
    assert.equal(
      retrieveUser.localeId,
      dummyUser.localeId,
      'field localeId does not match'
    );
    assert.equal(
      retrieveUser.regionId,
      dummyUser.regionId,
      'field regionId does not match'
    );
    assert.equal(
      retrieveUser.playstyle,
      dummyUser.playstyle,
      'field playstyle does not match'
    );
  });

  //checks finishRegistration, and that responses load correctly
  it('can finish registration', async () => {
    var retrieveUser = await Users.findOne({
      where: { email: dummyUser.email }
    });
    userCalls.finishRegistration(dummyRegData, retrieveUser.id);
    var finishedUser = await Users.findOne({
      where: { email: dummyUser.email },
      include: [
        {
          model: PrefGames,
          include: [{ model: Games }]
        },
        { model: PrefGenres, include: [{ model: Genres }] },
        { model: Responses },
        { model: Locale },
        { model: Region }
      ]
    });

    //equivalence checks
    //console.log(finishedUser.responses);
    var dummyAnswers = ['C', 'A', 'C', 'A', 'A', 'C', 'A', 'A', 'C', 'A'];
    var dummyImportance = [3, 3, 1, 2, 0, 1, 3, 2, 1, 1];
    var dummyPreferences = [
      'BD',
      'ABC',
      'CD',
      'AB',
      'ABCD',
      'ABC',
      'A',
      'A',
      'AB',
      'AC'
    ];
    for (
      var loopCounter = 0;
      loopCounter < finishedUser.responses.length;
      loopCounter++
    ) {
      //-9 done as a workaround, for some reason responses acquired in reverse order.
      assert.equal(
        finishedUser.responses[loopCounter].response,
        dummyAnswers[loopCounter],
        'An answer does not match expected value: '
      );
      assert.equal(
        finishedUser.responses[loopCounter].importance,
        dummyImportance[loopCounter],
        'An importance does not match expected value: '
      );
      assert.equal(
        finishedUser.responses[loopCounter].preference,
        dummyPreferences[loopCounter],
        'A preference does not match expected value: '
      );
    }
  }).timeout(8000);

  //checks likeUser
  it('can like other users', async () => {
    var retrieveUser = await Users.findOne({
      where: { email: dummyUser.email }
    });
    await userCalls.likeUser(retrieveUser.id, TARGET_DUMMY_ID);

    var retrieveMatches = await Matches.findAll({
      where: { userId: retrieveUser.id }
    });

    assert.equal(
      retrieveMatches[0].userId,
      retrieveUser.id,
      'Unexpected UserId'
    );
    assert.equal(
      retrieveMatches[0].matchId,
      TARGET_DUMMY_ID,
      'Unexpected matchId'
    );
    assert.equal(
      retrieveMatches[0].userResponse,
      'L',
      'Unexpected UserResponse'
    );
  }).timeout(8000);

  //checks dislikeUser
  it('can dislike other users', async () => {
    var retrieveUser = await Users.findOne({
      where: { email: dummyUser.email }
    });
    await userCalls.dislikeUser(retrieveUser.id, TARGET_DUMMY_ID);

    var retrieveMatches = await Matches.findAll({
      where: { userId: retrieveUser.id }
    });

    assert.equal(
      retrieveMatches[0].userId,
      retrieveUser.id,
      'Unexpected UserId'
    );
    assert.equal(
      retrieveMatches[0].matchId,
      TARGET_DUMMY_ID,
      'Unexpected matchId'
    );
    assert.equal(
      retrieveMatches[0].userResponse,
      'D',
      'Unexpected UserResponse'
    );
  }).timeout(8000);

  //checks rateUser
  it('can rate other users', async () => {
    var retrieveUser = await Users.findOne({
      where: { email: dummyUser.email }
    });
    await userCalls.rateUser(
      retrieveUser.id,
      TARGET_DUMMY_ID,
      TARGET_DUMMY_RATING
    );

    var retrieveRatings = await Ratings.findAll({
      where: { reviewerId: retrieveUser.id }
    });

    assert.equal(
      retrieveRatings[0].userId,
      TARGET_DUMMY_ID,
      'Unexpected UserId'
    );
    assert.equal(
      retrieveRatings[0].reviewerId,
      retrieveUser.id,
      'Unexpected reviewerId'
    );
    assert.equal(
      retrieveRatings[0].rating,
      TARGET_DUMMY_RATING,
      'Unexpected rating'
    );
  }).timeout(8000);

  //clears the dummy user
  it('can be cleared', async () => {
    var retrieveUser = await Users.findOne({
      where: { email: dummyUser.email }
    });
    await Responses.destroy({ where: { userId: retrieveUser.id } });
    await PrefGames.destroy({ where: { userId: retrieveUser.id } });
    await PrefGenres.destroy({ where: { userId: retrieveUser.id } });
    await Matches.destroy({ where: { userId: retrieveUser.id } });
    await Ratings.destroy({ where: { reviewerId: retrieveUser.id } });
    await Users.destroy({ where: { email: retrieveUser.email }, force: true });

    //equivalence checks
    assert.isTrue(true);
  }).timeout(8000);

  // auth stuff
  it('can login/register', () => {
    assert.isTrue(true);
  });
});
