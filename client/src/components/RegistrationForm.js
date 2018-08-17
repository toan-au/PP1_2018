import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class RegistrationForm extends Component {
  render() {
    return (
      <div>
        <form>
          <h1>Registration form</h1>
          <p>
            <label>Name</label>
            <Field name="name" component="Input" type="text" />
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
