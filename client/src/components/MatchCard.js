import React from 'react';
import defaultPfp from '../images/fortnite_drift_.png';
// import defaultPfp from '../images/Ronald_devil.png';
import MatchMeter from './MatchMeter';
import Modal from './Modal';
import ReactStars from 'react-stars';
import like from '../images/like.png';
import dislike from '../images/dislike.png'

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

  const id = `modal-${displayName.replace(/\s/g, '')}`;

  const callModal = id => {
    return () => {
      global.$(`#${id}`).modal();
    };
  };

  return (
    <div>
      <Modal id={id} userId={props.matchId} matchingScore={matchingScore} />
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
          <h3 onClick={callModal(id)}>
            {displayName}{' '}
            <label className={region.region}>{region.region}</label>
          </h3>
        </div>

        <div className="bio">
          {shortBio}
          ...
        </div>
        <div className="button-group">
          <div className="button2" onClick={onLike}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-thumbs-up"
            >
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </svg>
          </div>
          <MatchMeter percent={matchingScore} />
          <div className="button2" onClick={onDislike}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-thumbs-down"
            >
              <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
