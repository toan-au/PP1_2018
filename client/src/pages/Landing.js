import React, { Component } from 'react';
<<<<<<< HEAD
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
=======
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="outer">
        <div className="middle">
          <div className="inner">
            <h2>WELCOME TO GAMESEARCHMATCH</h2>
            <p>The beautifully designed matching application that will match you with your destined gaming compatriots through our top-tier matching algorithm!</p>
            <br></br>
            <p>Register or sign in now with a Google Account.</p>
            <img src="../images/landing.jpg" alt="Group of children playing arcade games"></img>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
>>>>>>> 1a74278d6df0d5bb4c047887d339510fe509669c
