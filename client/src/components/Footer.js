import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="Footer container-custom">
    <div className="left-footer">
      <p>© The Terror Wrists 2018</p>
    </div>
    <div className="right-footer">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  </footer>
);

export default Footer;
