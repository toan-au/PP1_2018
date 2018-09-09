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
const responses = require('../models').responses;
const matches = require('../models').matches;
const locale = require('../models').locale;
const region = require('../models').region;

var getPendingMatches = async function() {
  //placeholder Id, will take in variable ID values in future cases
  var requestId = 1;

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

  //find the pending matches as user objects
  var pendingUsers = await users.findAll({
    where: { id: { [Op.or]: pendingUserIds }}, include: [{model: region}, {model: locale}] 
  });

  //transform the objects to a more reasonable form
  for (var i = 0; i < pendingUsers.length; i++) {
    pendingUsers[i] = pendingUsers[i].toJSON();
  }

  //return the pending users
  return pendingUsers;
};

var getSuccessfulMatches = async function() {
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

  //find the matching users as user objects
  var matchingUsers = await users.findAll({
    where: { id: { [Op.or]: matchingUserIds } }, include: [{model: region}, {model: locale}]
  });

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
  console.log(findMatches)
  //extract the id values, from the matches
  for (var loopCounter = 0; loopCounter < findMatches.length; loopCounter++) {
    var filterArray = findMatches[loopCounter];
    //If the current user, has already interacted with the target
    if (
      filterArray.userId == requestId &&
      filterArray.matchId == targetId
    ) {
      //The match already exists, leave the loop
      return;
      
    }

    //If the target has interacted with the requesting user, and they have responded
    if( 
      filterArray.userId == targetId &&
      filterArray.matchId == requestId &&
      (filterArray.matchResponse == "L" || filterArray.matchResponse == "D")
    ){
       //The match already exists, leave the loop
       return;
    }

    //If the target has interacted with the requesting user, and they have not responded.
    if(
      filterArray.userId == targetId &&
      filterArray.matchId == requestId &&
      (filterArray.matchResponse == "P")){
        //Match exists but was pending, updates to Like.
        await matches.update({matchResponse: 'L'}, {where: {id: filterArray.id}})
        return;
      }

    //The match does not exist, either as created by the user requesting the match, or the targeted user.
  }
      //A new match is built
      const newMatch = matches.build({
        userId: requestId,
        matchId: targetId,
        userResponse: "L",
        matchResponse: "P"
      });

      // persisted to DB
      await newMatch.save();
      return;
}
var dislikeUser = async function(requestId, targetId) {

  //debugging test.
  //var requestId = 1;
  //var targetId = 14;

  //finds all matches the user has made, or made to him.
  var findMatches = await matches.findAll({
    where: { [Op.or]: [{ userId: requestId }, { matchId: requestId }] }
  });
  console.log(findMatches)
  //extract the id values, from the matches
  for (var loopCounter = 0; loopCounter < findMatches.length; loopCounter++) {
    var filterArray = findMatches[loopCounter];
    //If the current user, has already interacted with the target, but now wishes to dislike them
    if (
      filterArray.userId == requestId &&
      filterArray.matchId == targetId &&
      filterArray.userResponse == "L"
    ) {
      //The match is updated to become a dislike
      await matches.update({matchResponse: 'D'}, {where: {id: filterArray.id}})
      return;
      
    }

    //If the target has interacted with the requesting user, and they have responded
    if( 
      filterArray.userId == targetId &&
      filterArray.matchId == requestId &&
      (filterArray.matchResponse == "L" || filterArray.matchResponse == "D")
    ){
       //The match is updated to become a dislike
       await matches.update({matchResponse: 'D'}, {where: {id: filterArray.id}})
       return;
    }

    //If the target has interacted with the requesting user, and they have not responded.
    if(
      filterArray.userId == targetId &&
      filterArray.matchId == requestId &&
      (filterArray.matchResponse == "P")){
        //Match exists but was pending, updates to Like.
        await matches.update({matchResponse: 'D'}, {where: {id: filterArray.id}})
        return;
      }

    //The match does not exist, either as created by the user requesting the match, or the targeted user.
  }
      //A new match is built
      const newMatch = matches.build({
        userId: requestId,
        matchId: targetId,
        userResponse: "D",
        matchResponse: "P"
      });

      // persisted to DB
      await newMatch.save();
      return;
}
module.exports = { getPendingMatches, getSuccessfulMatches, likeUser, dislikeUser };
