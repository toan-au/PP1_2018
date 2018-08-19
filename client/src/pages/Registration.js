import React, { Component } from 'react';
import RegistrationForm from '../components/RegistrationForm';

class Registration extends Component {
  handleSubmit(values) {
    console.log(values);
  }
  render() {
    return (
      <div className="Register">
        registration page
        <RegistrationForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Registration;
