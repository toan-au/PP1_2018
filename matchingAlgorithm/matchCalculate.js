


//extremely basic matching score generator, requires weighting and more flexibility in the future.
function calculateMatches(matchingUser, potentialMatches) {
    
    function calcScore(potentialMatch){
        var matchingScore = 0.00;

        //increase score, if language matches.
        if(potentialMatch.language === matchingUser.language){
            matchingScore++;
        }
        //increase score, if question_1 matches.
        if(potentialMatch.question_1 === matchingUser.question_1){
            matchingScore++;
        }
        //increase score, if question_2 matches.
        if(potentialMatch.question_2 === matchingUser.question_2){
            matchingScore++;
        }
        //increase score, if nsfw matches.
        if(potentialMatch.nsfw === matchingUser.nsfw){
            matchingScore++;
        }
        //increase score, for each matching game.
        for(var loopCounter = 0; loopCounter < matchingUser.pref_games.length; loopCounter++){

            if(potentialMatch.pref_games.includes(matchingUser.pref_games[loopCounter]) === true){

                matchingScore = matchingScore + (1 / matchingUser.pref_games.length);
            }
        }
        //increase score for each matching genre.
        for(var loopCounter = 0; loopCounter < matchingUser.pref_genre.length; loopCounter++){
            
            if(potentialMatch.pref_genre.includes(matchingUser.pref_genre[loopCounter]) === true){
                matchingScore = matchingScore + (1 / matchingUser.pref_genre.length);
            }
        }
        //turns matching score into a percentage value
        matchingScore = (matchingScore/6) * 100;

        //Round the percentage value
        potentialMatch.matchingScore = Math.round(matchingScore);
    }

    potentialMatches.forEach(calcScore)
}
module.exports = {calculateMatches};