import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class RegistrationForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Registration form</h1>
          <p>
            <label>Name</label>
            <Field name="name" component="input" type="text" />
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'registration' })(RegistrationForm);
