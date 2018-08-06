import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer container">
        <div className="left-footer">
          <Link to="/">copy write terror wrists</Link>
        </div>
        <div className="right-footer">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Contact</Link>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;
