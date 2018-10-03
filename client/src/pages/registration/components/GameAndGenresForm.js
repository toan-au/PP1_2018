import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { getGames } from '../../../redux/actions/games';
import { getGenres } from '../../../redux/actions/genres';
import CheckboxGroup from '../../../components/CheckboxGroup';
import SelectSearch from '../../../components/SelectSearch';

class GameAndGenresForm extends Component {
  state = {
    searchTerm: '',
    filteredGames: [],
    selectedGames: []
  };

  componentDidMount = async () => {
    await this.props.getGames();
    await this.props.getGenres();
  };

  render() {
    const { handleSubmit, onPrevious, genres, games } = this.props;
    return (
      <div className="RegistrationForm">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* <h2 className="title">Games and Genres</h2> */}
          <div className="form-body">
            <div>
              <label className="question">
                Which games do you enjoy playing?
              </label>
              <div className="game-search">
                <Field
                  name="games"
                  component={SelectSearch}
                  options={games}
                  identifier="id"
                  labelName="title"
                />
              </div>
            </div>
            <div>
              <label className="question">
                Which genres do you enjoy playing?
              </label>
              <CheckboxGroup
                options={genres}
                labelName="title"
                valueName="title"
                name="genres"
              />
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

const mapStateToProps = state => ({ games: state.games, genres: state.genres });

let gameAndGenresForm = reduxForm({
  form: 'registration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(GameAndGenresForm);

gameAndGenresForm = connect(
  mapStateToProps,
  { getGames, getGenres }
)(gameAndGenresForm);

export default gameAndGenresForm;
