import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMatched } from '../redux/actions/matches';

class Matches extends Component {
  componentDidMount = async () => {
    await this.props.getMatched(this.props.user.id);
  };

  renderMatched = () => {
    return this.props.matches.map(match => (
      <li key={match.id}>{match.displayName}</li>
    ));
  };

  render() {
    const { matches } = this.props;
    return (
      <div className="Matches container">
        <div>
          <h3>Your matches</h3>
        </div>
        <div>
          <ul className="matches-list">
            {!matches && <li>The princess is in another castle!</li>}
            {this.renderMatched()}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  matches: state.matches,
  user: state.user
});
export default connect(
  mapStateToProps,
  { getMatched }
)(Matches);
