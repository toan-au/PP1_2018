import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class ConfirmationForm extends Component {
  render() {
    const { handleSubmit, onPrevious } = this.props; // , genres, games
    return (
      <div className="RegistrationForm">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h2 className="title">Thank you!</h2>
          <div className="form-body">
            <div>
              <h4 className="question">
                Thank you for joining us, we hope you find some amazing people
                using our services
              </h4>
            </div>
          </div>
          <div className="footer-buttons">
            <button className="previous" type="button" onClick={onPrevious}>
              Previous
            </button>
            <button className="next" type="submit">
              Game Start
            </button>
          </div>
        </form>
      </div>
    );
  }
}

let confirmationForm = reduxForm({
  form: 'registration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(ConfirmationForm);
export default confirmationForm;
