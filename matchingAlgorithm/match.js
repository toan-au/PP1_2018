//Declarations for express
const express = require('express');
const app = express();

//Imports required functions and data.
const data = require ('./dummyData.js')
const matchCalc = require ('./matchCalculate.js')




var findMatches = function() {

//Filter out the data set for users with at least 1 matching game.
var relevantUsers = [];

//Iterates through all users
for(var matchCounter = 0; matchCounter < data.potentialMatches.length; matchCounter++){
    
    //iterates and checks if a potential match has any matching games.
    for(var gameCounter = 0; gameCounter < data.matchingUser.pref_games.length; gameCounter++){

        //Adds all relevant matches with at least one matching game to the relevant users array that isnt the same element.
        if(data.potentialMatches[matchCounter].pref_games.includes(data.matchingUser.pref_games[gameCounter]) === true && 
            data.potentialMatches[matchCounter].id !== data.matchingUser.id){

            relevantUsers.push(data.potentialMatches[matchCounter]);
            break;
        }
    }
}

//calculate a matching score.
matchCalc.calculateMatches(data.matchingUser, relevantUsers);

//function to sort by matching scores.
function orderDesc(b,a){
    return a.matchingScore-b.matchingScore;
}

//sorts array by descending matching scores.
relevantUsers.sort(orderDesc);

return relevantUsers;
}


module.exports = {findMatches};