import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMatched } from '../redux/actions/matched';
import defaultPfp from '../images/fortnite_drift_.png';
import ReactStars from 'react-stars';

class Matches extends Component {
  state = {
    ratings: {}
  };

  componentDidMount = async () => {
    await this.props.getMatched(this.props.user.id);
  };

  rate = (matchId, rating) => {
    // redux action to like user
    const ratings = this.state.ratings;
    ratings[matchId] = rating;
    this.setState({ ratings });
  };

  renderMatched = () => {
    return this.props.matched.map(match => (
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
        <a href="#" className="RemoveUser">
          Remove
        </a>
        <div className="rate-user">
          Rate {match.displayName}:<br />
          <div>
            <ReactStars
              count={5}
              value={this.state.ratings[match.id]}
              onChange={rating => this.rate(match.id, rating)}
              size={40}
            />
          </div>
        </div>
      </li>
    ));
  };

  render() {
    const { matched } = this.props;
    return (
      <div className="Matches container">
        <div className="banner">
          <h1>Your Matches</h1>
        </div>
        <div>
          <ul className="matches-list">
            {/*matched.length < 1 && <li>The princess is in another castle!</li>*/}
            {this.renderMatched()}
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
