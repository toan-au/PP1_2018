import React, { Component } from 'react';
import axios from 'axios';
import MatchCard from '../components/MatchCard';

class Home extends Component {
  state = {
    user: {
      id: 1,
      display_name: 'kmariaud0',
      email: 'bianinotti0@symantec.com'
    },
    matches: []
  };

  loadMatches = async () => {
    // API call to fetch list of matches for this user
    const res = await axios.get('/api/match/' + this.state.user.id);
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
    return (
      <div className="Home">
        <div className="banner">
          <h1>Welcome back {this.state.user.display_name}</h1>
          <button onClick={this.loadMatches}>match me!</button>
        </div>
        <div className="matches">{this.state.matches}</div>
      </div>
    );
  }
}

export default Home;
