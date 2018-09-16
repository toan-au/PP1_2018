import React, { Component } from 'react';
import MatchCard from '../components/MatchCard';
import { connect } from 'react-redux';
import { getMatches } from '../redux/actions/matches';
import PacmanSpinner from '../components/PacmanSpinner';
import { likeUser, dislikeUser } from '../redux/actions/pending';
import ReactStars from 'react-stars';

class Home extends Component {
  state = { matches: [], loading: true, filter: 0, filteredItems: [] };

  async componentDidMount() {
    if (this.props.matches.length < 1) {
      await this.props.getMatches(this.props.user.id);
    }
    // dummy ratings
    this.props.matches.map(
      match => (match.rating = match.rating || Math.random() * 5)
    );
    this.setState({ loading: false, filteredItems: this.props.matches });
  }

  renderMatches = () => {
    const { likeUser, dislikeUser, user } = this.props;
    return this.state.filteredItems.map(match => (
      <MatchCard
        key={match.id}
        match={match}
        onLike={() => likeUser(user.id, match.id)}
        onDislike={() => dislikeUser(user.id, match.id)}
        rating={match.rating}
      />
    ));
  };

  filterMatches = filter => {
    const filteredItems = this.props.matches.filter(
      match => match.rating > filter
    );
    this.setState({ filteredItems, filter });
    console.log(this.state.filteredItems);
    console.log(this.state.filter);
  };

  renderFilterButtons = () => {
    if (!this.state.loading)
      return (
        <div className="star-filter">
          <h2>Filter by:</h2>
          <ReactStars
            count={5}
            value={this.state.filter}
            size={40}
            onChange={this.filterMatches}
          />
        </div>
      );
  };

  render() {
    const { user } = this.props;
    return (
      <div className="Home container-custom">
        <div className="banner">
          <h1>Welcome Back {user.displayName}</h1>
          {this.state.loading && <PacmanSpinner />}
        </div>
        {this.renderFilterButtons()}
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
