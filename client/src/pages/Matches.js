import React, { Component } from 'react';
import axios from 'axios';
import ReactStars from 'react-stars';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';

import { getMatched, removeUser } from '../redux/actions/matched';

import DocumentTitle from '../components/DocumentTitle';

import defaultPfp from '../images/fortnite_drift_.png';

const MatchedUsers = ({ matched, ratings, onChange, removeUser, userId }) => {
  return matched.map(match => (
    <li key={match.id}>
      <img
        className="profile-pic"
        src={defaultPfp}
        alt={match.displayName + "'s profile picture"}
      />
      <div className="UserDescription">
        <h3>{match.displayName}</h3>
        <span>Age: {match.age}</span>
        <div>{match.bio}</div>
      </div>
      <a className="RemoveUser" onClick={() => removeUser(userId, match.id)}>
        Remove
      </a>
      <div className="rate-user">
        Rate {match.displayName}:<br />
        <div>
          <ReactStars
            count={5}
            value={ratings[match.id]}
            onChange={rating => onChange(match.id, rating)}
            size={40}
          />
        </div>
      </div>
    </li>
  ));
};

class Matches extends Component {
  state = {
    ratings: {},
    loading: true
  };

  componentDidMount() {
    const completeLoading = () => {
      let ratings = {};
      this.props.matched.forEach(match => {
        ratings[match.id] = match.userRating;
      });
      this.setState({ ratings, loading: false });
    };

    if (this.state.loading) {
      this.props.getMatched(this.props.user.id).then(() => {
        // initiate ratings state if there is none
        !this.isCancelled && completeLoading();
      });
    }
  }

  componentWillUnmount() {
    this.isCancelled = true;
  }

  rateUser = (matchId, rating) => {
    const ratings = this.state.ratings;
    ratings[matchId] = rating;

    this.setState({ ratings });
    // rate the user on server side
    axios.patch(`/api/user/rate/${this.props.user.id}/${matchId}`, { rating });
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
                removeUser={this.props.removeUser}
                userId={this.props.userId}
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
  { getMatched, removeUser }
)(Matches);
