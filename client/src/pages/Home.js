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

const FilterButtons = ({
  regionFilter,
  starFilter,
  onStarFilter,
  onRegionFilter,
  filterReset
}) => {
  const regions = ['OCE', 'JP', 'NA', 'CN'];
  return (
    <div className="FilterButtons">
      <h2>Filter by:</h2>
      <ReactStars
        count={5}
        value={starFilter}
        size={40}
        onChange={onStarFilter}
      />
      {regions.map(region => {
        const selected = region === regionFilter ? 'selected' : '';

        return (
          <button
            key={region}
            onClick={() => onRegionFilter(region)}
            className={selected}
          >
            {region}
          </button>
        );
      })}
      <button onClick={filterReset}>Reset</button>
    </div>
  );
};

const SortButtons = ({ sortBy, sortByChange }) => {
  const sorts = [
    { name: 'avgRating', label: 'Average Ratings' },
    { name: 'matchingScore', label: 'Matching Percentage' }
  ];
  return (
    <div className="FilterButtons">
      <h2>Sort by:</h2>
      {sorts.map(sort => {
        const selected = sortBy === sort.name ? 'selected' : '';
        return (
          <button
            key={sort.name}
            onClick={() => sortByChange(sort.name)}
            className={selected}
          >
            {sort.label}
          </button>
        );
      })}
    </div>
  );
};

class Home extends Component {
  state = {
    loading: true,
    starFilter: 0,
    regionFilter: '',
    sortBy: 'matchingScore',
    filteredItems: []
  };

  componentDidMount() {
    const completeLoading = () => {
      this.filterMatches();
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

  filterMatches = () => {
    const filteredItems = this.props.matches.filter(match => {
      const starPass = match.avgRating > this.state.starFilter;
      let regionPass = true;
      if (this.state.regionFilter !== '')
        regionPass = match.region.region === this.state.regionFilter;
      return starPass && regionPass;
    });
    this.setState({ filteredItems });
  };

  starFilter = async stars => {
    await this.setState({ starFilter: stars });
    this.filterMatches();
  };

  regionFilter = async region => {
    await this.setState({ regionFilter: region });
    this.filterMatches();
  };

  filterReset = async () => {
    await this.setState({ regionFilter: '', starFilter: 0 });
    this.filterMatches();
  };

  sortByChange = sortBy => {
    const compare = (a, b) => {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    };
    const filteredItems = this.state.filteredItems.sort(compare);
    this.setState({ filteredItems, sortBy });
  };

  render() {
    return (
      <div className="Home container-custom">
        <DocumentTitle>Home</DocumentTitle>
        <div className="banner">
          <h1>Welcome Back {this.props.user.displayName}</h1>
          <p>
            View your potential gaming partners here. Like to give them a chance
            or Dislike to say goodbye!{' '}
          </p>
          {this.state.loading && <PacmanSpinner />}
        </div>
        {!this.state.loading && (
          <div>
            <FilterButtons
              starFilter={this.state.starFilter}
              regionFilter={this.state.regionFilter}
              onStarFilter={this.starFilter}
              onRegionFilter={this.regionFilter}
              filterReset={this.filterReset}
            />
            <SortButtons
              sortBy={this.state.sortBy}
              sortByChange={this.sortByChange}
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
