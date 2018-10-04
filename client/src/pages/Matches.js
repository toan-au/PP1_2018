import React, { Component } from 'react';
import axios from 'axios';
import ReactStars from 'react-stars';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getMatched, removeUser } from '../redux/actions/matched';
import { addNote } from '../redux/actions/notifications.js';

import DocumentTitle from '../components/DocumentTitle';

import defaultPfp from '../images/fortnite_drift_.png';

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

/** Card component of matched users. */
const MatchedUsers = ({ matched, ratings, onChange, removeUser }) => {
  return matched.map(match => (
    <div className="result" key={match.id}>
      <div className="MatchCard">
        <div className="UserDescription">
          <div className="display-name">
            <h3>
              <Link
                to={{
                  pathname: `/profile/${match.id}`,
                  state: { displayName: match.displayName }
                }}
                query={{ displayName: match.displayName }}
              >
                {match.displayName}
              </Link>

              <label className={match.region.region}>
                {' '}
                {match.region.region}
              </label>
            </h3>
          </div>
          <div className="info">
            Age:
            <label> {match.age} </label>
            <br />
            Bio:
            <label>{match.bio}</label>
            <br />
            Favorite Games:
            <label>{gameFormatter(match.prefGames)}</label>
            <br />
            Favorite Genres:
            <label>{genreFormatter(match.prefGenres)}</label>
            <br />
            Casual or Competitive?
            <label>{match.playstyle}</label>
          </div>
        </div>
        <div className="pic">
          <img
            className="profile-pic"
            src={defaultPfp}
            alt={match.displayName + "'s profile picture"}
          />
          <div className="rate-user">
            Rate {match.displayName}:<br />
            <div>
              <ReactStars
                count={5}
                value={parseFloat(ratings[match.id])}
                onChange={rating => onChange(match.id, rating)}
                size={40}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="remove" onClick={() => removeUser(match)}>
        X
      </div>
    </div>
  ));
};

/** Matches page. */
class Matches extends Component {
  state = {
    ratings: {},
    loading: true
  };

  async componentDidMount() {
    if (this.props.matched === null) {
      await this.props.getMatched(this.props.user.id);
    }
    if (!this.isCancelled) {
      // initiate ratings state if there is none
      let ratings = {};
      this.props.matched.forEach(match => {
        ratings[match.id] = match.userRating;
      });
      this.setState({ ratings, loading: false });
    }
  }

  componentWillUnmount() {
    this.isCancelled = true;
  }

  /**
   * Rate a user. Patch given user via API.
   * @param {number} matchId - The id of user to rate.
   * @param {number} rating - The rating to set.
   */
  rateUser = (matchId, rating) => {
    const ratings = this.state.ratings;
    ratings[matchId] = rating;

    this.setState({ ratings });
    // rate the user on server side
    axios.patch(`/api/user/rate/${this.props.user.id}/${matchId}`, { rating });
  };

  /**
   * Displays confirm window, if confirmed removes the user from the front-end and back-end.
   * @param {object} target - A user object.
   */
  handleRemoveUser = target => {
    const response = window.confirm(
      'Are you sure you want to remove this user?'
    );
    if (response) {
      // remove user in back and front end
      this.props.removeUser(this.props.user.id, target.id);
      // inform user on front end
      this.props.addNote({
        text: `You have been unmatched with ${target.displayName}`
      });
    }
  };

  render() {
    // const { matched } = this.props;
    return (
      <div className="Matches container">
        <DocumentTitle>Matches</DocumentTitle>
        <div className="banner">
          <h1>Your Matches</h1>
          <p>
            Here are the gamers you have matched with. Contact them through
            various platforms, remove or rate them.{' '}
          </p>
        </div>
        <div>
          {/*matched.length < 1 && <li>The princess is in another castle!</li>*/}
          {this.state.loading ? (
            <div className="d-flex justify-content-center">
              <ReactLoading type={'bubbles'} color="yellow" />
            </div>
          ) : (
            <ul className="matches-list">
              <MatchedUsers
                matched={this.props.matched}
                ratings={this.state.ratings}
                onChange={this.rateUser}
                removeUser={this.handleRemoveUser}
              />
            </ul>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  matched: state.matched,
  user: state.user
});

export default connect(
  mapStateToProps,
  { getMatched, removeUser, addNote }
)(Matches);
