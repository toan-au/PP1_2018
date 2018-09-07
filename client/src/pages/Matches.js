import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMatched } from '../redux/actions/matched';

class Matches extends Component {
  componentDidMount = async () => {
    await this.props.getMatched(this.props.user.id);
    console.log(this.props.matched);
  };

  renderMatched = () => {
    return this.props.matched.map(match => (
      <li key={match.id}>
        <h3>{match.displayName}</h3>
        <span>{match.age}</span>
        <div>{match.bio}</div>
      </li>
    ));
  };

  render() {
    const { matched } = this.props;
    return (
      <div className="Matches container">
        <div>
          <h3>Your matches</h3>
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
