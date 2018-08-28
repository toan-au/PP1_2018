import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';

class RegistrationForm1 extends Component {
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
              <button type="submit">Next page</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

let registrationForm1 = reduxForm({
  form: 'registration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(RegistrationForm1);
registrationForm1 = connect(mapStateToProps)(registrationForm1);
export default registrationForm1;
