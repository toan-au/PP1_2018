import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import SelectWithErrors from '../../components/SelectWithError';

class GameAndGenresForm extends Component {
  render() {
    const { handleSubmit, onPrevious } = this.props;
    return (
      <div className="RegistrationForm">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h2 className="title">Games and Genres</h2>
          <div className="form-body">
            <div>
              <h4 className="question">Which games do you enjoy playing?</h4>
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

const mapStateToProps = state => ({ user: state.user });

let gameAndGenresForm = reduxForm({
  form: 'registration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(GameAndGenresForm);
gameAndGenresForm = connect(mapStateToProps)(gameAndGenresForm);
export default gameAndGenresForm;
1;
