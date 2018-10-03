import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class RegistrationForm1 extends Component {
  render() {
    const { handleSubmit, user } = this.props;
    return (
      <div className="RegistrationForm">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="sign">
            <h1>Registration</h1>
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

const registrationForm1 = reduxForm({
  form: 'registration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(RegistrationForm1);
registrationForm1 = connect(mapStateToProps)(registrationForm1);

export default registrationForm1;
