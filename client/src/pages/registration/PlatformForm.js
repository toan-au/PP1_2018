import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PlatformForm extends Component {
  state = {};

  render() {
    const { handleSubmit, onPrevious} = this.props;
    return (
      
      <div className="RegistrationForm">
        <form onSubmit={handleSubmit}>
              <div className="field">
                <label>Nintendo: </label>
                <Field
                  name="Nintendo"
                  component="input"
                  placeholder=" Nintendo"
                />
              </div>
              <div className="field">
                <label>Playstation: </label>
                <Field
                  name="Playstation"
                  component="input"
                  placeholder=" Playstation"
                />
              </div>
              <div className="field">
                <label>Xbox Live: </label>
                <Field
                  name="Xbox"
                  component="input"
                  placeholder=" Xbox"
                />
              </div>
              <div className="field">
                <label>Steam: </label>
                <Field
                  name="Steam"
                  component="input"
                  placeholder=" Steam"
                />
              </div>
              <div className="field">
                <label>Discord: </label>
                <Field
                  name="discord"
                  component="input"
                  placeholder=" discord"
                />
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

let platformForm = reduxForm({
  form: 'registration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(PlatformForm);

export default platformForm;
