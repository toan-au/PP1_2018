import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';

class GameAndGenresForm extends Component {
  render() {
    const { handleSubmit, user } = this.props;
    return (
      <div className="RegistrationForm">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="sign">
            <h1>Sign Up</h1>
          </div>
          <div className="Form">
            <div className="next">
              <button type="submit">Submit</button>
            </div>
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
