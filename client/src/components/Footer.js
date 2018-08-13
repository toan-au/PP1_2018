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
            <Link to={"/Home"}>Home</Link>
            <Link to={"/AboutUs"}>About Us</Link>
            <Link to={"/Privacy"}>Privacy</Link>
            <Link to={"/Contact"}>Contact</Link>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;
