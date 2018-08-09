import React, { Component } from 'react';
import axios from 'axios';
import MatchCard from '../components/MatchCard';
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    matches: []
  };

  loadMatches = async () => {
    console.log(this.props.user);
    // API call to fetch list of matches for this user
    const res = await axios.get('/api/match/' + this.props.user.id);
    let matches = res.data;

    // create list of react components for each match
    matches = matches.map(match => {
      return <MatchCard key={match.id} match={match} />;
    });

    // change state of the component
    this.setState({ matches });
  };

  renderMatches = () => {
    this.state.matches.map(match => {
      return <li>match</li>;
    });
  };

  render() {
    const { user } = this.props;
    return (
      <div className="Home">
        <div className="banner">
          <h1>Welcome back {user.display_name}</h1>
          <button onClick={this.loadMatches}>match me!</button>
        </div>
        <div className="matches">{this.state.matches}</div>
      </div>
    );
  }
}

const mapeStateToProps = state => ({
  user: state.user
});

export default connect(mapeStateToProps)(Home);
