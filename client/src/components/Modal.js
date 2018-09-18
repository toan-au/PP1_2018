import React from 'react';

import ReactStars from 'react-stars';
import MatchMeter from './MatchMeter';

import DefaultPfp from '../images/fortnite_drift_.png';

const ModalUserInfo = ({ user }) => {
  const styles = {
    heading: {
      color: '#ab1e24',
      fontSize: '1.5em',
      paddingBottom: '0.1em'
    },
    desc: {
      color: 'black',
      paddingTop: '0.5em',
      paddingLeft: '0.5em',
      paddingRight: '0.5em'
    },
    stars: {
      maxWidth: '175px',
      paddingLeft: 0,
      paddingRight: 0
    }
  };

  const gameFormatter = perfGames => {
    return perfGames
      .map(item => {
        return item.game.title;
      })
      .join(', ');
  };

  const genreFormatter = perfGenres => {
    return perfGenres
      .map(item => {
        return item.genre.title;
      })
      .join(', ');
  };

  return (
    <div className="col-7">
      {/* Heading */}
      <div className="row">
        <div className="col text-center">
          <h5 style={styles.heading}>
            {user.displayName}, {user.region.region}
          </h5>
        </div>
      </div>
      {/* Stars */}
      <div className="row justify-content-center align-items-center">
        <div className="col d-flex justify-content-center" style={styles.stars}>
          <ReactStars
            count={5}
            value={parseFloat(user.avgRating)}
            edit={false}
            size={35}
            color1="rgba(0,0,0,0)"
          />
        </div>
      </div>
      {/* Description */}
      <div className="row">
        <div className="col">
          <p style={styles.desc}>
            Bio: {user.bio}
            <br />
            Favorite Games: {gameFormatter(user.prefGames)}
            <br />
            Favorite Genres: {genreFormatter(user.prefGenres)}
            <br />
            Casual or Competitive? {user.playstyle}
          </p>
        </div>
      </div>
    </div>
  );
};

const ModalUserInteraction = ({ user }) => {
  const styles = {
    interactionsContainer: {
      height: '100px'
    },
    matchText: {
      fontSize: '1.4em',
      fontWeight: 300,
      paddingTop: '1em',
      paddingBottom: '0.5em'
    },
    button: {
      width: '75px',
      height: '75px'
    }
  };

  return (
    <div className="col-5">
      {/* Display Picture */}
      <div className="row">
        <div className="col text-center">
          <img src={user.pfpUrl || DefaultPfp} height="275" width="275" />
        </div>
      </div>
      {/* Match Percentage */}
      <div className="row">
        <div className="col text-center">
          <h5 style={styles.matchText}>{user.matchingScore}% Match</h5>
        </div>
      </div>

      {/* User Interaction */}
      <div style={styles.interactionsContainer} className="row">
        <div className="col d-flex justify-content-between">
          <button className="button1" style={styles.button} onClick={() => {}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
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
          </button>
          <MatchMeter percent={user.matchingScore} />
          <button className="button1" style={styles.button} onClick={() => {}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
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
          </button>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ id, user }) => {
  const styles = {
    container: {
      width: '800px'
    },
    content: {
      background: '#e8e8e8'
    }
  };

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
        style={styles.container}
      >
        <div className="modal-content" style={styles.content}>
          <div className="modal-body">
            {/* Content */}
            <div className="row">
              <ModalUserInfo user={user} />
              <ModalUserInteraction user={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
