import React, { Component } from 'react';
import MatchCard from '../components/MatchCard';
import { connect } from 'react-redux';
import { getMatches } from '../redux/actions/matches';

class Home extends Component {
  state = { matches: [] };

  loadMatches = async () => {
    // get matches from the API
    await this.props.getMatches(this.props.user.id);

    // create list of each match
    const matches = this.props.matches.map(match => {
      return <MatchCard key={match.id} match={match} />;
    });

    this.setState({ matches });
  };

  renderMatches = () => {};

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
  user: state.user,
  matches: state.matches
});

export default connect(
  mapeStateToProps,
  { getMatches }
)(Home);
