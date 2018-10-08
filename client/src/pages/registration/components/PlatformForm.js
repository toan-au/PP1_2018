/**
 * Platform Form component.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

/** Platform form component. */
class PlatformForm extends Component {
  state = {};

  render() {
    const { handleSubmit, onPrevious } = this.props;
    return (
      <div className="RegistrationForm">
        <form onSubmit={handleSubmit}>
          <h4 className="question">Enter your Platform ID's</h4>
          <div className="field">
            <label>Nintendo: </label>
            <Field
              name="platforms.nintendo"
              component="input"
              placeholder=" Nintendo"
            />
          </div>
          <div className="field">
            <label>Origin: </label>
            <Field
              name="platforms.origin"
              component="input"
              placeholder=" Origin"
            />
          </div>
          <div className="field">
            <label>Xbox Live: </label>
            <Field
              name="platforms.xbox"
              component="input"
              placeholder=" Xbox"
            />
          </div>
          <div className="field">
            <label>Playstation: </label>
            <Field
              name="platforms.playstation"
              component="input"
              placeholder=" Playstation"
            />
          </div>
          <div className="field">
            <label>Twitch: </label>
            <Field
              name="platforms.twitch"
              component="input"
              placeholder=" Twitch"
            />
          </div>
          <div className="field">
            <label>Discord: </label>
            <Field
              name="platforms.discord"
              component="input"
              placeholder=" Discord"
            />
          </div>
          <div className="field">
            <label>Steam: </label>
            <Field
              name="platforms.steam"
              component="input"
              placeholder=" Steam"
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

const platformForm = reduxForm({
  form: 'registration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(PlatformForm);

export default platformForm;
