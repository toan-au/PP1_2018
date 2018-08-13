import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h3>CONTACT</h3>

          <form id="contactform" target="_blank" method="post" onsubmit="">

            <label>Name
              <input type="text" name="name" id="name" placeholder="First and Last Name" required>
            </label>

            <label>Contact Number
              <input type="tel" name="phone" id="phone" placeholder="Contact Number" required/>
            </label>

            <label>Email
              <input type="email" name="email" id="email" placeholder="Email Address" required/>
            </label>

            <br><br>

            <label>Message
              <textarea id="contactmessage" name="message" id="message" placeholder="Your Message" required></textarea>
            </label>

            <br>
            <br>

            <input class="button" type="submit" value="Submit"/>

          </form>
      </div>
    );
  }
}

export default Contact;
