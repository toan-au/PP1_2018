


//extremely basic matching score generator, requires weighting and more flexibility in the future.
function calculateMatches(matchingUser, relevantUsers) {
    
    //Finds weight of importance
    function calcResponseWeight(importance){
        switch(importance){
            case 0:
            return 1
            break;

            case 1:
            return 10
            break;

            case 2:
            return 50
            break;

            case 3:
            return 200
            break;
        }
    }   
    //finds a user's potential total score
    function calcPotentialScore(user){
        var potentialScore = 0;
    for(var responseNo = 0; responseNo < user.responses.length; responseNo++){
        potentialScore += calcResponseWeight(user.responses[responseNo].importance)
        }
        return potentialScore;
    }
    //potentialScores are the maximum possible score a user can attain
    //find the potential score of the intiating user
    var potentialScoreInit = calcPotentialScore(matchingUser)

    function calcScore(relevantUser){
        //find the potential score of the responding user
        var potentialScoreResp = calcPotentialScore(relevantUser)
        //matching score calculated from user who searches for matches
        var matchingScoreInit = 0;
        //matching score calculated from user who was found as relevant
        var matchingScoreResp = 0;

        //Iterate through all responses a user filled 
        for(var questionNo = 0; questionNo < relevantUser.responses.length; questionNo++){
        //checks the responding user's response to the matching user's preferences and adjusts matching score
            if (matchingUser.responses[questionNo].preference.includes(relevantUser.responses[questionNo].response)){
                //if a match is found increase score value based on appropriate weight
                matchingScoreInit += calcResponseWeight(matchingUser.responses[questionNo].importance)
            }
        //checks the matching user's response to the responding user's preferences and adjusts matching score
            if (relevantUser.responses[questionNo].preference.includes(matchingUser.responses[questionNo].response)){
                //if a match is found increase score value based on appropriate weight
                matchingScoreResp += calcResponseWeight(matchingUser.responses[questionNo].importance)
            }
        }

        //find total score of match as a percentage for both users
        var matchingPercentInit = (matchingScoreInit/potentialScoreInit)
        var matchingPercentResp = (matchingScoreResp/potentialScoreResp)

        //calculate the geometric mean of the user's scores
        var totalMatchScore = (matchingPercentInit * matchingPercentResp)
        var totalMatchScore = Math.pow(totalMatchScore, 1/matchingUser.responses.length)

        //Create a rounded percentage.
        var totalMatchScore = totalMatchScore * 100;
        
        //Completely unnessecery, mostly there in the case a less than 0 score happens
        if(totalMatchScore <= 0){
            totalMatchScore = 0;
        }

        //Round the percentage value to a whole integer
        relevantUser.matchingScore = Math.round(totalMatchScore)
    }

    //calculate the matching score and attach it to each user's JSON entry.
    relevantUsers.forEach(calcScore);
    
}
module.exports = {calculateMatches};