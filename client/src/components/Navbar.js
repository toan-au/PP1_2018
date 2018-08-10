import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Build, SupervisorAccount, Home } from 'material-react-icons';
import axios from 'axios';

class Navbar extends Component {
  googleSignin() {
    axios.get('/auth/google');
  }

  render() {
    return (
      <nav className="Navbar">
        <Link to="/" className="logo">
          Game Search Match
        </Link>
        <div className="right-nav">
          <Link to="/">
            <Home viewBox="10 10 10 10" className="icon" />
          </Link>
          <Link to="/messages">
            <SupervisorAccount viewBox="10 10 10 10" className="icon" />
          </Link>
          <Link to="/requests">
            <SupervisorAccount viewBox="10 10 10 10" className="icon" />
          </Link>
          <a href="/auth/google">
            <Build viewBox="10 10 13 13" className="icon" />
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
