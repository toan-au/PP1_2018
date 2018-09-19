import React, { Component } from 'react';
import ReactStars from 'react-stars';
import { connect } from 'react-redux';

import { getMatches } from '../redux/actions/matches';

import DocumentTitle from '../components/DocumentTitle';
import MatchCard from '../components/MatchCard';
import PacmanSpinner from '../components/PacmanSpinner';

const MatchCards = ({ matches }) => {
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

  componentDidMount() {
    const completeLoading = () => {
      this.filterMatches(this.props.matches)(0);
      this.setState({ loading: false });
    };

    if (this.props.matches.length === 0) {
      this.props.getMatches(this.props.user.id).then(() => {
        !this.isCancelled && completeLoading();
      });
      return;
    }
    !this.isCancelled && completeLoading();
  }

  componentWillUnmount() {
    this.isCancelled = true;
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
        <DocumentTitle>Home</DocumentTitle>
        <div className="banner">
          <h1>Welcome Back {this.props.user.displayName}</h1>
          {this.state.loading && <PacmanSpinner />}
        </div>
        {!this.state.loading && (
          <div>
            <FilterButtons
              filter={this.state.filter}
              onChange={this.filterMatches(this.props.matches)}
            />
            <div className="matches">
              <MatchCards matches={this.state.filteredItems} />
            </div>
          </div>
        )}
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
