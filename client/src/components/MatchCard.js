import React from 'react';
import defaultPfp from '../images/fortnite_drift_.png';
// import defaultPfp from '../images/Ronald_devil.png';
import MatchMeter from './MatchMeter';

const MatchCard = props => {
  const { displayName, bio, matchingScore } = props.match;
  const bioLength = 250;
  const shortBio = bio.substring(0, bioLength);
  return (
    <div className="MatchCard">
      <div>
        <img
          className="profile-pic"
          src={defaultPfp}
          alt={displayName + "'s profile picture"}
        />
      </div>
      <div className="display-name">
        <h3>{displayName}</h3>
      </div>
      <div className="bio">
        {shortBio}
        ...
      </div>
      <div className="button-group">
        {/* <button>Like</button> */}
        <MatchMeter percent={matchingScore} />
        {/* <button>Dislike</button> */}
      </div>
    </div>
  );
};

export default MatchCard;
