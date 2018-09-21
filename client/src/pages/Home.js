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
  onRegionFilter
}) => {
  const regions = ['OCE', 'JP', 'NA', 'CN'];
  return (
    <div className="star-filter">
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
    </div>
  );
};

class Home extends Component {
  state = {
    loading: true,
    starFilter: 0,
    regionFilter: '',
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
    console.log(this.state);
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
    console.log(stars);
    await this.setState({ starFilter: stars });
    this.filterMatches();
  };

  regionFilter = async region => {
    console.log(region);
    await this.setState({ regionFilter: region });
    this.filterMatches();
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
              regionFIlter={this.state.regionFilter}
              onStarFilter={this.starFilter}
              onRegionFilter={this.regionFilter}
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
