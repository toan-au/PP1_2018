import React, { Component } from 'react';
import MatchCard from '../components/MatchCard';
import { connect } from 'react-redux';
import { getMatches } from '../redux/actions/matches';
import PacmanSpinner from '../components/PacmanSpinner';

class Home extends Component {
  state = { matches: [], loading: true };

  async componentDidMount() {
    await this.loadMatches();
  }

  loadMatches = async () => {
    // get matches from the API
    await this.props.getMatches(this.props.user.id);

    // create list of each match
    const matches = this.props.matches.map(match => {
      return <MatchCard key={match.id} match={match} />;
    });

    // store matches in a list, set loading to false to hide spinner
    this.setState({ matches, loading: false });
  };

  renderMatches = () => {
    return this.state.matches;
  };

  render() {
    const { user } = this.props;
    return (
      <div className="Home container">
        <div className="banner">
          <h1>Welcome Back {user.displayName}</h1>
          {this.state.loading && <PacmanSpinner />}
        </div>
        <div className="matches">{this.renderMatches()}</div>
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
