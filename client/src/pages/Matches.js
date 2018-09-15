import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMatched } from '../redux/actions/matched';
import defaultPfp from '../images/fortnite_drift_.png';
import StarRating from 'react-star-rating';

class Matches extends Component {
  componentDidMount = async () => {
    await this.props.getMatched(this.props.user.id);
    console.log(this.props.matched);
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
          <div className="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">
              5 stars
            </label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">
              4 stars
            </label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">
              3 stars
            </label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">
              2 stars
            </label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">
              1 star
            </label>
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
