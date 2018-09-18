import React from 'react';
import ReactStars from 'react-stars';
import { connect } from 'react-redux';

import { likeUser, dislikeUser } from '../redux/actions/pending';

import Modal from './Modal';
import MatchMeter from './MatchMeter';
import ThumbUpIcon from './ThumbUpIcon';
import ThumbDownIcon from './ThumbDownIcon';

import defaultPfp from '../images/fortnite_drift_.png';

const MatchCard = ({ match, user, likeUser, dislikeUser }) => {
  const starLeftGap = 47.5 - match.avgRating * 7; // if no rating exists create a random one
  const bioLength = 250;
  const shortBio = match.bio.substring(0, bioLength);
  const modalId = `modal-${match.displayName.replace(/\s/g, '')}`;

  const callModal = modalId => {
    return () => {
      global.$(`#${modalId}`).modal();
    };
  };

  return (
    <div>
      <Modal id={modalId} user={match} />
      <div className="MatchCard">
        <div>
          <div className="star-rating" style={{ left: `${starLeftGap}%` }}>
            <ReactStars
              count={parseFloat(match.avgRating)}
              value={parseFloat(match.avgRating)}
              edit={false}
              size={40}
              color1="rgba(0,0,0,0)"
            />
          </div>
          <img
            className="profile-pic"
            src={match.pfpUrl || defaultPfp}
            alt={match.displayName + "'s profile picture"}
            onClick={callModal(modalId)}
          />
        </div>
        <div className="display-name">
          <h3 onClick={callModal(modalId)}>
            {match.displayName}{' '}
            <label className={match.region.region}>{match.region.region}</label>
          </h3>
        </div>

        <div className="bio">{`${shortBio}...`}</div>

        <div className="button-group">
          <div className="button2" onClick={() => likeUser(user.id, match.id)}>
            <ThumbUpIcon width={64} height={64} />
          </div>
          <MatchMeter percent={match.matchingScore} />
          <div
            className="button2"
            onClick={() => dislikeUser(user.id, match.id)}
          >
            <ThumbDownIcon width={64} height={64} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { likeUser, dislikeUser }
)(MatchCard);
