import React from 'react';
import defaultPfp from '../images/default_pfp.jpg';
import MatchMeter from './MatchMeter';

const MatchCard = props => {
  const { pfp, display_name, bio, matchingScore } = props.match;
  const bioLength = 250;
  const shortBio = bio.substring(0, bioLength);
  return (
    <div className="MatchCard">
      <div>
        <img className="profile-pic" src={defaultPfp} />
      </div>
      <div className="display-name">
        <h3>{display_name}</h3>
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
