/**
 * Footer component.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import React from 'react';
import { Link } from 'react-router-dom';

/** Footer component. */
const Footer = ({ loading }) => (
  <footer className="Footer container-custom">
    <div className="left-footer">
      <p>© The Terror Wrists 2018</p>
    </div>
    <div className="right-footer">
      {loading ? null : (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      )}
    </div>
  </footer>
);

export default Footer;
