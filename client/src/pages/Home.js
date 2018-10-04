import React, { Component } from 'react';
import ReactStars from 'react-stars';
import { connect } from 'react-redux';

import { getMatches } from '../redux/actions/matches';

import DocumentTitle from '../components/DocumentTitle';
import MatchCard from '../components/MatchCard';
import PacmanSpinner from '../components/PacmanSpinner';

/** A series of match cards from given matches. */
const MatchCards = ({ matches }) => {
  return matches.map(match => <MatchCard key={match.id} match={match} />);
};

/** Panel of buttons of regions which filters matches by region when region is pressed. */
const RegionPanel = ({ regionFilter, onRegionFilter, filterReset }) => {
  const regions = ['OCE', 'JP', 'NA', 'CN'];
  return (
    <div className="FilterButtons">
      <div className="left">
        <h2>Filter by Region:</h2>
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
    </div>
  );
};

/** Panel containing stars which filters matches by star rating. */
const StarPanel = ({ starFilter, onStarFilter }) => {
  return (
    <div className="FilterButtons">
      <div className="mid">
        <h2>Show rating from:</h2>
        <div className="star">
          <ReactStars
            count={5}
            value={starFilter}
            size={40}
            onChange={onStarFilter}
          />
        </div>
      </div>
      ); })}
    </div>
  );
};

/** Panel containing "Sort by" button choices. Filters matches by choice. */
const SortPanel = ({ sortBy, sortByChange }) => {
  const sorts = [
    { name: 'avgRating', label: 'Average Ratings' },
    { name: 'matchingScore', label: 'Matching Percentage' }
  ];
  return (
    <div className="FilterButtons">
      <div className="right">
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
    </div>
  );
};

/** Home page. */
class Home extends Component {
  state = {
    loading: true,
    starFilter: 0,
    regionFilter: '',
    sortBy: 'matchingScore',
    filteredItems: []
  };

  async componentDidMount() {
    if (this.props.matches.length === 0) {
      await this.props.getMatches(this.props.user.id);
    }
    if (!this.isCancelled) {
      this.filterMatches();
      this.setState({ loading: false });
    }
  }

  componentWillUnmount() {
    this.isCancelled = true;
  }

  /** Filter matches by matching score, amount of stars, region, or average rating. */
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

  /** Filter matches by amount of stars. */
  starFilter = async stars => {
    await this.setState({ starFilter: stars });
    this.filterMatches();
  };

  /** Filter matches by region. */
  regionFilter = async region => {
    await this.setState({ regionFilter: region });
    this.filterMatches();
  };

  /** Reset match filter. */
  filterReset = async () => {
    await this.setState({ regionFilter: '', starFilter: 0 });
    this.filterMatches();
  };

  /** Filter matches by matching score or average rating. */
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
          <div className="filter">
            <div className="sort">
              <StarPanel
                starFilter={this.state.starFilter}
                onStarFilter={this.starFilter}
              />
              <RegionPanel
                regionFilter={this.state.regionFilter}
                onRegionFilter={this.regionFilter}
                filterReset={this.filterReset}
              />

              <SortPanel
                sortBy={this.state.sortBy}
                sortByChange={this.sortByChange}
              />
            </div>
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
