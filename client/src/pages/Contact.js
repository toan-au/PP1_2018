import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="contact">
      <h3 className="contact-title">CONTACT</h3>
      <br />

      <form>
        <div className="Form">
          <label>
            Display Name
            <input
              type="text"
              name="displayName"
              id="displayName"
              placeholder="Display Name"
              required
            />
          </label>

          <label>
            Email
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </label>

          <label>
            Message
            <textarea
              className="contact-message"
              rows="10"
              cols="50"
              name="Message"
              placeHolder="Your Message"
            />
          </label>

          <div className="next">
            <Link to="/">
              <button>Submit</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
