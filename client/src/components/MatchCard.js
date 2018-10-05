/**
 * Mactch Card component.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import React from 'react';
import ReactStars from 'react-stars';
import { connect } from 'react-redux';

import { likeUser, dislikeUser } from '../redux/actions/pending';
import { addNote } from '../redux/actions/notifications';

import Modal from './Modal';
import MatchMeter from './MatchMeter';
import ThumbUpIcon from './ThumbUpIcon';
import ThumbDownIcon from './ThumbDownIcon';

import defaultPfp from '../images/fortnite_drift_.png';

/** Match card for displaying a "match user" information. */
const MatchCard = ({ match, user, likeUser, dislikeUser, addNote }) => {
  const starLeftGap = 47.5 - match.avgRating * 7; // if no rating exists create a random one
  const bioLength = 250;
  const shortBio = match.bio.substring(0, bioLength);
  const modalId = `modal-${match.displayName.replace(/\s/g, '')}`;

  /** Bring modal to foreground. */
  const callModal = modalId => {
    return () => {
      global.$(`#${modalId}`).modal();
    };
  };

  /** Handle like user. */
  const onLike = () => {
    likeUser(user.id, match.id);
    const id = new Date().getTime();
    const text = 'You have liked ' + match.displayName;
    addNote({ id, text });
  };

  /** Handle dislike user. */
  const onDislike = () => {
    dislikeUser(user.id, match.id);
    const id = new Date().getTime();
    const text = 'You have disliked ' + match.displayName;
    addNote({ id, text });
  };

  return (
    <div>
      <Modal id={modalId} user={match} onLike={onLike} onDislike={onDislike} />
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
          <div className="button2" onClick={onLike}>
            <ThumbUpIcon width={64} height={64} />
          </div>
          <MatchMeter percent={match.matchingScore} />
          <div className="button2" onClick={onDislike}>
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
  { likeUser, dislikeUser, addNote }
)(MatchCard);
