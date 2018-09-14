//Declarations for express
const express = require('express');
const app = express();

//Imports required functions and data.
const matchCalc = require ('./matchCalculate.js')
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
const prefGenres = require('../models').prefGenres;
const ratings = require('../models').ratings;

const games = require('../models').games;
const genres = require('../models').genres;

var findMatches = async function()  {
//Test ID while writing algorithm
var dummyId = 1;

//Queries for User searching for matches
var matchingUser = await users.findOne({where: {id: dummyId}, include: [
    {model: prefGames},
    {model: responses},
    {model: matches}
], plain: true});

//Convert the user to JSON format
matchingUser = matchingUser.toJSON()

//Create array for use in finding users with matching game preferences
var relevantGames = [];
for(var i = 0; i < matchingUser.prefGames.length; i++){
    var filterArray = matchingUser.prefGames[i].gameId
    relevantGames.push(filterArray);
}

var findMatches = await matches.findAll({
    where: { [Op.or]: [{ userId: matchingUser.id }, { matchId: matchingUser.id }] }
  });

var invalidMatches = [];
//Checks and stores the ids of existing matchings.
for(var i = 0; i < matchingUser.matches.length; i++){
    var filterArray = findMatches[i]
    //If the user Id is equal to the requesting Id they have already interacted with that user, and will not see them
    if (
        filterArray.userId == matchingUser.id
      ) {
        invalidMatches.push(filterArray.matchId);
      }
      //If the user was not the initiating member of the match, it stores the initating user's id instead, if they have not reacted to a match.
      if (
        filterArray.matchId == matchingUser.id &&
        filterArray.userResponse == 'L' &&
        (filterArray.matchResponse == 'L' || filterArray.matchResponse == 'D')
      ) {
        invalidMatches.push(filterArray.userId);
      }
}

//include the matching user as an invalid user to match with
invalidMatches.push(matchingUser.id);



//Find all users who have at least one matching game to intiating user
var relevantUsers = await users.findAll({where: {id: {[Op.notIn]: invalidMatches}} , limit: 30, include: [
    {model: prefGames, where: {gameId: {[Op.or]: relevantGames}}, include: [{model: games}]},
    {model:prefGenres, include: [{model: genres}]},
    {model: responses},
    {model: locale},
    {model: region},
    {model: ratings},
    {model: matches}
]});


//Converts all matches to JSON standard format.
for(var i = 0; i < relevantUsers.length; i++){
    relevantUsers[i] = relevantUsers[i].toJSON();
}

//calculate matching scores for all relevant users, and add them to each relevant user.
matchCalc.calculateMatches(matchingUser, relevantUsers);

//function to sort by matching scores.
function orderDesc(b,a){
    return a.matchingScore-b.matchingScore;
}

//function to average ratings of users
//do later

//sorts array by descending matching scores.
relevantUsers.sort(orderDesc);

return relevantUsers;   
}

    

module.exports = {findMatches};