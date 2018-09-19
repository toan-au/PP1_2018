import React, { Component } from 'react';
import axios from 'axios';
import ReactStars from 'react-stars';
import { connect } from 'react-redux';

import { getMatched } from '../redux/actions/matched';

import DocumentTitle from '../components/DocumentTitle';

import defaultPfp from '../images/fortnite_drift_.png';

const MatchedUsers = ({ matched, ratings, onChange }) => {
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
      <a className="RemoveUser">Remove</a>
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
    initialized: false
  };

  componentDidMount() {
    const completeLoading = () => {
      let ratings = {};
      this.props.matched.forEach(match => {
        ratings[match.id] = match.userRating;
      });
      this.setState({ ratings, initialized: true });
    };

    this.props.getMatched(this.props.user.id).then(() => {
      if (this.state.initialized) {
        return;
      }
      // initiate ratings state if there is none
      !this.isCancelled && completeLoading();
    });
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
        </div>
        <div>
          <ul className="matches-list">
            {/*matched.length < 1 && <li>The princess is in another castle!</li>*/}
            <MatchedUsers
              matched={this.props.matched}
              ratings={this.state.ratings}
              onChange={this.rateUser}
            />
          </ul>
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
  { getMatched }
)(Matches);
