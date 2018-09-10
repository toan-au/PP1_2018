import React from 'react';
import defaultPfp from '../images/fortnite_drift_.png';
// import defaultPfp from '../images/Ronald_devil.png';
import MatchMeter from './MatchMeter';

const MatchCard = props => {
  const { displayName, bio, matchingScore, region } = props.match;
  const { onLike, onDislike } = props;
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
        <button onClick={onLike}>Like</button>
        <MatchMeter percent={matchingScore} />
        <button onClick={onDislike}>Dislike</button>
      </div>
      <div className="region">{region.region}</div>
    </div>
  );
};

export default MatchCard;
