import React from 'react';
import defaultPfp from '../images/fortnite_drift_.png';
// import defaultPfp from '../images/Ronald_devil.png';
import MatchMeter from './MatchMeter';
import ReactStars from 'react-stars';
import like from '../images/like.png';
import dislike from '../images/dislike.png'

const MatchCard = props => {
  const { displayName, bio, matchingScore, region, rating, pfpUrl } = props.match;
  const { onLike, onDislike } = props;
  const bioLength = 250;
  const shortBio = bio.substring(0, bioLength);

  // if no rating exists create a random one
  const fixedRating = rating || (2.5 + Math.random() * 2.5).toFixed(2);
  const starLeftGap = 47.5 - fixedRating * 7;

  return (
    <div className="MatchCard">
      <div>
        <div className="star-rating" style={{ left: `${starLeftGap}%` }}>
          {console.log(starLeftGap)}
          <ReactStars
            count={fixedRating}
            value={fixedRating}
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
      {/* <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
        <img className="button2" src={like} alt="Like Button" onClick={onLike}/>
        <MatchMeter percent={matchingScore} />
        <img className="button2" src={dislike} alt="Dislike Button" onClick={onDislike}/>
      </div>
    </div>
  );
};

export default MatchCard;
