import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import SearchInput, { createFilter } from 'react-search-input';

const FILTER_KEYS = ['name'];

class GameAndGenresForm extends Component {
  state = {
    searchTerm: '',
    filteredResults: []
  };

  componentDidMount = () => {
    this.props.getGames();
  };

  onGameSearch = searchTerm => {
    this.setState({ searchTerm });
    console.log(this.state);
  };

  render() {
    const { handleSubmit, onPrevious } = this.props;
    return (
      <div className="RegistrationForm">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h2 className="title">Games and Genres</h2>
          <div className="form-body">
            <div>
              <h4 className="question">Which games do you enjoy playing?</h4>
              <SearchInput
                className="search-input"
                onChange={this.searchUpdated}
              />
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
gameAndGenresForm = connect(mapStateToProps)(gameAndGenresForm);
export default gameAndGenresForm;
1;
