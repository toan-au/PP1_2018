import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import SearchInput, { createFilter } from 'react-search-input';
import { getGames } from '../../redux/actions/games';

const FILTER_KEYS = ['name'];

class GameAndGenresForm extends Component {
  state = {
    searchTerm: '',
    filteredGames: []
  };

  componentDidMount = () => {
    this.props.getGames();
  };

  onGameSearch = searchTerm => {
    this.setState({ searchTerm });

    const filteredGames = this.props.games.filter(
      createFilter(this.state.searchTerm, FILTER_KEYS)
    );

    this.setState({ filteredGames });
  };

  render() {
    const { handleSubmit, onPrevious } = this.props;
    const { filteredGames } = this.state;
    return (
      <div className="RegistrationForm">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h2 className="title">Games and Genres</h2>
          <div className="form-body">
            <div>
              <h4 className="question">Which games do you enjoy playing?</h4>
              <div className="game-search">
                <SearchInput
                  className="search-input"
                  onChange={this.onGameSearch}
                />
                <ul className="results">
                  {filteredGames.map(game => (
                    <li>{game.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h4 className="question">Which genres do you enjoy playing?</h4>
            </div>
          </div>
          <div className="footer-buttons">
            <button className="previous" type="button" onClick={onPrevious}>
              Previous
            </button>
            <button className="next" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ games: state.games });

let gameAndGenresForm = reduxForm({
  form: 'registration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(GameAndGenresForm);
gameAndGenresForm = connect(
  mapStateToProps,
  { getGames }
)(gameAndGenresForm);
export default gameAndGenresForm;
1;
