import React from 'react';

import DocumentTitle from '../components/DocumentTitle';

const Contact = () => {
  return (
    <div className="ContactForm">
      <DocumentTitle>Contact</DocumentTitle>
      <form>
        <h3 className="contact-title">Contact Us</h3>
        <br />
        <div className="field">
          <label>Display Name </label>
          <br />
          <input
            type="text"
            name="displayName"
            className="displayName"
            placeholder="Display Name"
            required
          />
        </div>

        <div className="field">
          <label>Email </label>
          <br />
          <input
            type="email"
            name="email"
            className="email"
            placeholder="Email Address"
            required
          />
        </div>

        <div className="field">
          <label>Your message </label>
          <br />
          <textarea
            name="message"
            className="message"
            placeholder="Type here..." /*required*/
          />
        </div>

        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div> //contact
  );
};

export default Contact;
