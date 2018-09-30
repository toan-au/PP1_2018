import React from 'react';
import ReactStars from 'react-stars';

import MatchMeter from './MatchMeter';
import ThumbUpIcon from './ThumbUpIcon';
import ThumbDownIcon from './ThumbDownIcon';
import DefaultPfp from '../images/fortnite_drift_.png';

const ModalUserInfo = ({ user }) => {
  // const styles = {
  //   heading: {
  //     color: '#ab1e24',
  //     fontSize: '1.5em',
  //     paddingBottom: '0.1em'
  //   },
  //   desc: {
  //     color: 'black',
  //     paddingTop: '0.5em',
  //     paddingLeft: '0.5em',
  //     paddingRight: '0.5em'
  //   },
  //   stars: {
  //     maxWidth: '175px',
  //     paddingLeft: 0,
  //     paddingRight: 0,
  //   }
  // };

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
    
    // <div className="col-7">
    //   {/* Heading */}
    //   <div className="row">
    //     <div className="col text-center">
    //     <div className="display-name">
    //     <div className="modal"> <p>test</p>
    // </div>
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
          <div className="info">
            {user.bio}
          </div>
          <label>Favorite Games:</label>
          <div className="info">
            {gameFormatter(user.prefGames)}
          </div>
          <label> Favorite Genres:</label>
          <div className="info">
             {genreFormatter(user.prefGenres)}
          </div>
          <label>Casual or Competitive?</label>
          <div className="info">
             {user.playstyle}
          </div>          
        </div>
      </div>
    //   </div>
    //   {/* Stars */}
      // <div className="row justify-content-center align-items-center">
      //   <div className="col d-flex justify-content-center">
      //     <ReactStars
      //       count={5}
      //       value={parseFloat(user.avgRating)}
      //       edit={false}
      //       size={35}
      //       color1="rgba(0,0,0,0)"
      //     />
      //   </div>
      // </div>
    //   {/* Description */}
    //   <div className="row">
    //     <div className="col">
        
    //     </div>
    //   </div>
    // </div>
  );
};

const ModalUserInteraction = ({ user, onLike, onDislike }) => {
  // const styles = {
  //   interactionsContainer: {
  //     height: '100px'
  //   },
  //   matchText: {
  //     fontSize: '1.4em',
  //     fontWeight: 300,
  //     paddingTop: '1em',
  //     paddingBottom: '0.5em'
  //   },
  //   button: {
  //     width: '75px',
  //     height: '75px'
  //   }
  // };

  return (
    // <div className="col-5">
    //   {/* Display Picture */}
    //   <div className="row">
    //     <div className="col text-center">
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

const Modal = ({ id, user, onLike, onDislike }) => {
  // const styles = {
  //   container: {
  //     width: '800px'
  //   },
  //   content: {
  //     background: '#e8e8e8'
  //   }
  // };

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
