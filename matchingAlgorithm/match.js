//Declarations for express
const express = require('express');
const app = express();

//Imports required functions and data.
const data = require ('./dummyData.js')
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


var findMatches = async function()  {
    //, where: {[Op.not]: {[Op.or]: [{userId: dummyId}, {matchId: dummyId, matchResponse:{[Op.or]: ['L','R']}}]}}
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

//Create a set of blacklisted users, who the user has already interacted with
var interactedUsers = []
for(var i = 0; i < matchingUser.matches.length; i++){
    if(
        matchingUser.usersmatches.matchId == matchingUser.id &&
        (matchingUser.matches.matchResponse.localeCompare("L") == 0 || matchingUser.matches.matchResponse.localeCompare("P") == 0)){
            var filterArray = matchingUser.matches[i].id
            interactedUsers.push(filterArray)
        }
    if(matchingUser.usersmatches.userId == matchingUser.id)
    {
        var filterArray = matchingUser.matches[i].id
        interactedUsers.push(filterArray)
    }
}


//Find all users who have at least one matching game to intiating user
var relevantUsers = await users.findAll({where: {id: {[Op.ne]: dummyId}}, limit: 30, include: [
    {model: prefGames, where: {gameId: {[Op.or]: relevantGames}}},
    {model: responses},
    {model: matches, through: {
        where: {[Op.not]: {matchingId: {[Op.or]: interactedUsers}}}
    }}
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

//sorts array by descending matching scores.
relevantUsers.sort(orderDesc);
return relevantUsers;
}

    

module.exports = {findMatches};