import React from 'react';
import defaultPfp from '../images/fortnite_drift_.png';
// import defaultPfp from '../images/Ronald_devil.png';
import MatchMeter from './MatchMeter';
import ReactStars from 'react-stars';

const MatchCard = props => {
  const {
    displayName,
    bio,
    matchingScore,
    region,
    avgRating,
    pfpUrl
  } = props.match;
  const { onLike, onDislike } = props;
  const bioLength = 250;
  const shortBio = bio.substring(0, bioLength);

  // if no rating exists create a random one
  const starLeftGap = 47.5 - avgRating * 7;

  return (
    <div className="MatchCard">
      <div>
        <div className="star-rating" style={{ left: `${starLeftGap}%` }}>
          <ReactStars
            count={avgRating}
            value={avgRating}
            edit={false}
            size={50}
            color1="rgba(0,0,0,0)"
          />
        </div>
        <img
          className="profile-pic"
          src={pfpUrl || defaultPfp}
          alt={displayName + "'s profile picture"}
        />
      </div>
      <div className="display-name">
        <h3>
          {displayName} <label className={region.region}>{region.region}</label>
        </h3>
      </div>

      <div className="bio">
        {shortBio}
        ...
      </div>
      <div className="button-group">
        <button className="button1" onClick={onLike}>
          Like
        </button>
        <MatchMeter percent={matchingScore} />
        <button className="button1" onClick={onDislike}>
          Dislike
        </button>
      </div>
    </div>
  );
};

export default MatchCard;
