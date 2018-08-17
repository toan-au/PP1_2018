import React, { Component } from 'react';
import MatchCard from '../components/MatchCard';
import { connect } from 'react-redux';
import { getMatches } from '../redux/actions/matches';

class Landing extends Component {

  render() {
    return (
      <div className="Landing">
        <div className="banner">
          <h1></h1>
        </div>
        <div></div>
      </div>
    );
  }
}

const mapeStateToProps = state => ({
  user: state.user,
  matches: state.matches
});

export default connect(
  mapeStateToProps,
  { getMatches }
)(Home);
