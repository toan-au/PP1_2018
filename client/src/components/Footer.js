import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer container">
        <div className="left-footer">
          <p>© The Terror Wrists 2018</p>
        </div>
        <div className="right-footer">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Contact</Link>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;
