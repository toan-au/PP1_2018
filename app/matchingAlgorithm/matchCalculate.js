/**
 * Find weight of importance.
 * @param {number} importance - The weight.
 */
const calcResponseWeight = importance => {
  switch (importance) {
    case 0:
      return 1;
    case 1:
      return 10;
    case 2:
      return 50;
    case 3:
      return 200;
  }
};

/**
 * Find a user's potential total score.
 * @param {object} user - The user.
 */
const calcPotentialScore = user => {
  let potentialScore = 0;
  for (let responseNo = 0; responseNo < user.responses.length; responseNo++) {
    potentialScore += calcResponseWeight(user.responses[responseNo].importance);
  }
  return potentialScore;
};

/**
 * Calculates matching score.
 * @param {object} matchingUser - The matching user.
 */
const calcScore = matchingUser => {
  return relevantUser => {
    // PotentialScores are the maximum possible score a user can attain.
    // Find the potential score of the initiating user.
    const potentialScoreInit = calcPotentialScore(matchingUser);
    // Find the potential score of the responding user.
    const potentialScoreResp = calcPotentialScore(relevantUser);

    // Matching score calculated from user who searches for matches.
    let matchingScoreInit = 0;
    // Matching score calculated from user who was found as relevant
    let matchingScoreResp = 0;

    // Iterate through all responses a user filled.
    for (
      let questionNo = 0;
      questionNo < relevantUser.responses.length;
      questionNo++
    ) {
      // Check the responding user's response to the matching user's preferences and
      // adjust matching score.
      if (
        matchingUser.responses[questionNo].preference.includes(
          relevantUser.responses[questionNo].response
        )
      ) {
        // If a match is found increase score value based on appropriate weight.
        matchingScoreInit += calcResponseWeight(
          matchingUser.responses[questionNo].importance
        );
      }
      // Check the matching user's response to the responding user's preferences and
      // adjust matching score.
      if (
        relevantUser.responses[questionNo].preference.includes(
          matchingUser.responses[questionNo].response
        )
      ) {
        // If a match is found increase score value based on appropriate weight.
        matchingScoreResp += calcResponseWeight(
          matchingUser.responses[questionNo].importance
        );
      }
    }

    // Find total score of match as a percentage for both users.
    const matchingPercentInit = matchingScoreInit / potentialScoreInit;
    const matchingPercentResp = matchingScoreResp / potentialScoreResp;

    // Calculate the geometric mean of the user's scores. Create a rounded percentage.
    const totalMatchScore =
      Math.pow(
        matchingPercentInit * matchingPercentResp,
        1 / matchingUser.responses.length
      ) * 100;

    // Completely unnecessary, mostly there in the case a less than 0 score happens
    if (totalMatchScore <= 0) {
      relevantUser.matchingScore = 0;
    } else {
      // Round the percentage value to a whole integer.
      relevantUser.matchingScore = Math.round(totalMatchScore);
    }
  };
};

/** Basic matching score generator. */
const calculateMatches = (matchingUser, relevantUsers) => {
  // Calculate the matching score and attach it to each user's JSON entry.
  relevantUsers.forEach(calcScore(matchingUser));
};

module.exports = { calculateMatches };
