import React, { Component } from 'react';
import ReactStars from 'react-stars';
import { connect } from 'react-redux';

import { getMatches } from '../redux/actions/matches';

import MatchCard from '../components/MatchCard';
import PacmanSpinner from '../components/PacmanSpinner';

const Matches = ({ matches }) => {
  return matches.map(match => <MatchCard key={match.id} match={match} />);
};

const FilterButtons = ({ filter, onChange }) => (
  <div className="star-filter">
    <h2>Filter by:</h2>
    <ReactStars count={5} value={filter} size={40} onChange={onChange} />
  </div>
);

class Home extends Component {
  state = {
    loading: true,
    filter: 0,
    filteredItems: []
  };

  async componentDidMount() {
    if (this.props.matches.length === 0) {
      await this.props.getMatches(this.props.user.id);
    }
    this.filterMatches(this.props.matches)(0);
    this.setState({ loading: false });
  }

  filterMatches = matches => {
    return filter => {
      const filteredItems = matches.filter(match => match.avgRating > filter);
      this.setState({ filteredItems, filter });
    };
  };

  render() {
    return (
      <div className="Home container-custom">
        <div className="banner">
          <h1>Welcome Back {this.props.user.displayName}</h1>
          {this.state.loading && <PacmanSpinner />}
        </div>
        {!this.state.loading && (
          <FilterButtons
            filter={this.state.filter}
            onChange={this.filterMatches(this.props.matches)}
          />
        )}
        <div className="matches">
          <Matches matches={this.state.filteredItems} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  matches: state.matches
});

export default connect(
  mapStateToProps,
  { getMatches }
)(Home);
