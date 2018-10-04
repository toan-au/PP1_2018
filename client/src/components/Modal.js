import React from 'react';
import ReactStars from 'react-stars';

import MatchMeter from './MatchMeter';
import ThumbUpIcon from './ThumbUpIcon';
import ThumbDownIcon from './ThumbDownIcon';
import DefaultPfp from '../images/fortnite_drift_.png';

/** User information section of a modal. */
const ModalUserInfo = ({ user }) => {
  /**
   * Format text for given games.
   * @param {Array} perfGames - User's preferred games
   */
  const gameFormatter = perfGames => {
    return perfGames
      .map(item => {
        return item.game.title;
      })
      .join(', ');
  };

  /**
   * Format text for given genres.
   * @param {Array} perfGames - User's preferred games
   */
  const genreFormatter = perfGenres => {
    return perfGenres
      .map(item => {
        return item.genre.title;
      })
      .join(', ');
  };

  return (
    <div className="content">
      <div className="display-name">
        <h3>
          {user.displayName}{' '}
          <label className={user.region.region}>{user.region.region}</label>
        </h3>
      </div>
      <div className="col d-flex justify-content-center">
        <ReactStars
          count={5}
          value={parseFloat(user.avgRating)}
          edit={false}
          size={35}
          color1="rgba(0,0,0,0)"
        />
      </div>
      <div className="bio">
        <label> Bio: </label>
        <div className="info">{user.bio}</div>
        <label>Favorite Games:</label>
        <div className="info">{gameFormatter(user.prefGames)}</div>
        <label> Favorite Genres:</label>
        <div className="info">{genreFormatter(user.prefGenres)}</div>
        <label>Casual or Competitive?</label>
        <div className="info">{user.playstyle}</div>
      </div>
    </div>
  );
};

/** Interaction section of a modal. Like and dislike buttons. */
const ModalUserInteraction = ({ user, onLike, onDislike }) => {
  return (
    <div className="pic">
      <img
        src={user.pfpUrl || DefaultPfp}
        height="275"
        width="275"
        alt="profile dp"
      />

      <label>
        <h5>{user.matchingScore}% Match</h5>
      </label>
      {/* User Interaction */}
      <div className="button-group">
        <div className="button2" onClick={onLike}>
          <ThumbUpIcon width={64} height={64} />
        </div>
        <MatchMeter percent={user.matchingScore} />
        <div className="button2" onClick={onDislike}>
          <ThumbDownIcon width={64} height={64} />
        </div>
      </div>
    </div>
  );
};

/** Model component. Shows user information. */
const Modal = ({ id, user, onLike, onDislike }) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-body">
            {/* Content */}
            <div className="modalleft">
              <ModalUserInfo user={user} />
            </div>
            <div className="modalright">
              <ModalUserInteraction
                user={user}
                onLike={onLike}
                onDislike={onDislike}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
