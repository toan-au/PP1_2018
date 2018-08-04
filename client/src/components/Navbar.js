import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <a className="logo">
          <h1>Game Search Match</h1>
        </a>
        <Link to="/">Home</Link>
        <Link to="/">Login</Link>
      </nav>
    );
  }
}

export default Navbar;
