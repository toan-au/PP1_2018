import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMatched } from '../redux/actions/matched';
import defaultPfp from '../images/fortnite_drift_.png';

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
        <a href="#" className="RemoveUser">Remove</a>
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
            {matched.length < 1 && <li>The princess is in another castle!</li>}
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
