import React, { Component } from 'react';
import MatchCard from '../components/MatchCard';
import { connect } from 'react-redux';
import { getMatches } from '../redux/actions/matches';
import PacmanSpinner from '../components/PacmanSpinner';

class Home extends Component {
  state = { matches: [], loading: true };

  async componentDidMount() {
    if (this.props.matches.length < 1) {
      await this.props.getMatches(this.props.user.id);
    }
    this.setState({ loading: false });
  }

  renderMatches = () => {
    return this.props.matches.map(match => (
      <MatchCard key={match.id} match={match} />
    ));
  };

  render() {
    const { user } = this.props;
    return (
      <div className="Home container-custom">
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
