import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Build, SupervisorAccount, Home } from 'material-react-icons';

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <Link to="/" className="logo">
          Game Search Match
        </Link>
        <div className="right-nav">
          <Link to="/">
            <Home />
          </Link>
          <Link to="/messages">htr</Link>
          <Link to="/requests">
            <SupervisorAccount />
          </Link>
          <Link to="/">
            <Build />
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
