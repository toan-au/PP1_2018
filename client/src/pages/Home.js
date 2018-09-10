import React, { Component } from 'react';
import MatchCard from '../components/MatchCard';
import { connect } from 'react-redux';
import { getMatches } from '../redux/actions/matches';
import PacmanSpinner from '../components/PacmanSpinner';
import { likeUser, dislikeUser } from '../redux/actions/user';

class Home extends Component {
  state = { matches: [], loading: true };

  async componentDidMount() {
    if (this.props.matches.length < 1) {
      await this.props.getMatches(this.props.user.id);
    }
    this.setState({ loading: false });
  }

  renderMatches = () => {
    const { likeUser, dislikeUser, user } = this.props;
    return this.props.matches.map(match => (
      <MatchCard
        key={match.id}
        match={match}
        onLike={() => likeUser(user.id, match.id)}
        onDislike={() => dislikeUser(user.id, match.id)}
      />
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
  { getMatches, likeUser, dislikeUser }
)(Home);
