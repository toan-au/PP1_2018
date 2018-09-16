import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PlatformQuestion extends Component {
  state = {

  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="RegistrationForm">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Register</h2>
          <div className="form-body grid">
            <div className="right">
              <div className="field">
                <label>Nintendo: </label>
                <Field
                  name="Nintendo"
                  component="input"
                  placeholder=" Nintendo"
                  required="required"
                />
              </div>
              <div className="field">
                <label>Playstation: </label>
                <Field
                  name="Playstation"
                  component="input"
                  placeholder=" Playstation"
                  required="required"
                />
              </div>
              <div className="field">
                <label>Xbox Live: </label>
                <Field
                  name="Xbox"
                  component="input"
                  placeholder=" Xbox"
                  required="required"
                />
              </div>
              <div className="field">
                <label>Steam: </label>
                <Field
                  name="Steam"
                  component="input"
                  placeholder=" Steam"
                  required="required"
                />
              </div>
              <div className="field">
                <label>Discord: </label>
                <Field
                  name="discord"
                  component="input"
                  placeholder=" discord"
                  required="required"
                />
              </div>
            </div>
        </div>
          <div className="footer-buttons">
            <div />
            <button className="next" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}

let platformQuestion = reduxForm({
    form: 'registration',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  })(PlatformQuestion);
  
  // export HOC
// export HOC
export default PlatformQuestion;
