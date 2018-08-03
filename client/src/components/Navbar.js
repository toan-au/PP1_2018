import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        Navbar
        <Link to="/">useless link</Link>
      </nav>
    );
  }
}

export default Navbar;
