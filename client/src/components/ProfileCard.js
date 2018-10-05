/**
 * Profile Card component.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import React from 'react';

import defaultPfp from '../images/fortnite_drift_.png';

/** The responses of a user. */
const ProfileResponses = ({ user }) => {
  // render list of responses: questionId - response
  const responsesList = user.responses.map(response => {
    return (
      <div key={response.id}>
        {response.question.questionText} - {response.answerText}
      </div>
    );
  });
  return responsesList;
};

/** The preferred games of a user. */
const ProfileGames = ({ user }) => {
  const gamesList = user.prefGames.map(pref => {
    return <div key={pref.id}>{pref.game.title}</div>;
  });
  return gamesList;
};

/** The preferred genres of a user. */
const ProfileGenres = ({ user }) => {
  const genresList = user.prefGenres.map(pref => {
    return <div key={pref.id}>{pref.genre.title}</div>;
  });
  return genresList;
};

/** The platform id of a user. */
const ProfilePlatformIds = ({ user }) => {
  const platformsList = user.platformIds.map(platform => (
    <div>
      {platform.platform.title} - {platform.platformDisplayName}
    </div>
  ));
  return platformsList;
};

/** Profile card showing user information. */
const ProfileCard = ({ user }) => {
  if (user !== null) {
    return (
      <div>
        <div className="pfp">
          <img src={user.pfpUrl || defaultPfp} alt="profile dp" />
        </div>

        <div className="user-info">
          <span>
            Display Name:
            <span className="info"> {user.displayName}</span>
          </span>
          <br />
          <br />

          <span>
            Age:
            <span className="info"> {user.age}</span>
          </span>
          <br />

          <span>
            Region:
            <span className="info"> {user.region.region}</span>
          </span>
          <br />

          <span>
            Locale:
            <span className="info"> {user.locale.locale}</span>
          </span>
          <br />

          <span>
            Casual or Competitive:
            <span className="info"> {user.playstyle}</span>
          </span>
          <br />
          <br />

          <span>
            Biography:
            <br />
            <span className="info">{user.bio}</span>
          </span>
          <br />
          <br />

          <span>Social Platforms:</span>
          <span className="info">
            <ProfilePlatformIds user={user} />
          </span>

          <br />

          <span>Your Answers:</span>
          <span className="info">
            <ProfileResponses user={user} />
          </span>
          <br />

          <span>Your Favourite Games:</span>
          <span className="info">
            <ProfileGames user={user} />
          </span>
          <br />

          <span>Your Favourite Genres:</span>
          <span className="info">
            <ProfileGenres user={user} />
          </span>
        </div>
      </div>
    );
  }
};

export default ProfileCard;
