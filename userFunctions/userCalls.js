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


var getPendingMatches = async function()  {

    //placeholder Id, will take in variable ID values in future cases
    var requestId = 1;

    //find the requested user, and their matches
    var currentUser = await users.findOne({where: {id: requestId}, include: [
        {model: matches}
    ], plain: true});



    var pendingUserIds = [];
    //extract the id values, from the matches
    for(var loopCounter = 0; loopCounter < currentUser.matches.length; loopCounter++){
        var filterArray = currentUser.matches[loopCounter];
        if(filterArray.matchResponse == 'P')
        {
            pendingUserIds.push(filterArray.id);
        }
    }

    //find the pending matches as user objects
    var pendingUsers = await users.findAll({where: {id:  {[Op.or]: pendingUserIds}}, });

    //transform the objects to a more reasonable form
    for(var i = 0; i < pendingUsers.length; i++){
        pendingUsers[i] = pendingUsers[i].toJSON();
    }

    //return the pending users
    return pendingUsers;

}

var getSuccessfulMatches = async function(){
    
    //placeholder Id, will take in variable ID values in future cases
    var requestId = 1;

    //find the requested user, and their matches
    var currentUser = await users.findOne({where: {id: requestId}, include: [
        {model: matches}
    ], plain: true});



    var matchingUserIds = [];
    //extract the id values, from the matches
    for(var loopCounter = 0; loopCounter < currentUser.matches.length; loopCounter++){
        var filterArray = currentUser.matches[loopCounter];
        if(filterArray.matchResponse == 'L' && filterArray.matchResponse == 'L')
        {
            matchingUserIds.push(filterArray.id);
        }
    }

    //find the matching users as user objects
    var matchingUsers = await users.findAll({where: {id:  {[Op.or]: matchingUserIds}}});

    //transform the objects to a more reasonable form
    for(var i = 0; i < matchingUsers.length; i++){
        matchingUsers[i] = matchingUsers[i].toJSON();
    }

    //return the matching users
    console.log(matchingUsers);
    return matchingUsers;
}

module.exports = {getPendingMatches, getSuccessfulMatches};
