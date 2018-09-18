import React from 'react';
import ReactStars from 'react-stars';

import Modal from './Modal';
import MatchMeter from './MatchMeter';
import ThumbUpIcon from './ThumbUpIcon';
import ThumbDownIcon from './ThumbDownIcon';

import defaultPfp from '../images/fortnite_drift_.png';

const MatchCard = props => {
  const {
    displayName,
    bio,
    matchingScore,
    region,
    avgRating,
    pfpUrl
  } = props.match;
  console.log(props.match);

  const { onLike, onDislike } = props;
  const bioLength = 250;
  const shortBio = bio.substring(0, bioLength);

  // if no rating exists create a random one
  const starLeftGap = 47.5 - avgRating * 7;

  const modalId = `modal-${displayName.replace(/\s/g, '')}`;
  const callModal = modalId => {
    return () => {
      global.$(`#${modalId}`).modal();
    };
  };

  return (
    <div>
      <Modal id={modalId} user={props.match} />
      <div className="MatchCard">
        <div>
          <div className="star-rating" style={{ left: `${starLeftGap}%` }}>
            <ReactStars
              count={parseFloat(avgRating)}
              value={parseFloat(avgRating)}
              edit={false}
              size={50}
              color1="rgba(0,0,0,0)"
            />
          </div>
          <img
            className="profile-pic"
            src={pfpUrl || defaultPfp}
            alt={displayName + "'s profile picture"}
            onClick={callModal(modalId)}
          />
        </div>
        <div className="display-name">
          <h3 onClick={callModal(modalId)}>
            {displayName}{' '}
            <label className={region.region}>{region.region}</label>
          </h3>
        </div>

        <div className="bio">{`${shortBio}...`}</div>

        <div className="button-group">
          <div className="button2" onClick={onLike}>
            <ThumbUpIcon width={64} height={64} />
          </div>
          <MatchMeter percent={matchingScore} />
          <div className="button2" onClick={onDislike}>
            <ThumbDownIcon width={64} height={64} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
