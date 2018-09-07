import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMatched } from '../redux/actions/matches';

class Matches extends Component {
  componentDidMount = () => {
    this.props.getMatched();
  };

  render() {
    return (
      <div className="Matches container">
        <div>
          <h3>Your matches</h3>
        </div>
        <div>
          <ul className="matches-list">
            <li>The princess is in another castle!</li>
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {};
export default connect(
  mapStateToProps,
  { getMatched }
)(Matches);
