import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../images/Favicon.png';

import PendingDropdown from './PendingDropdown';

const Navbar = ({ user }) => {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to={'/'}>
        <img src={logo} width="50" height="50" alt="Game Search Match" />
      </Link>
      <Link to="/" className="logo">
        GameSearchMatch
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <NavbarLinks user={user} />
      </div>
    </nav>
  );
};

const NavbarLinks = ({ user }) => {
  const NavRightLoggedIn = () => {
    return (
      <div className="navbar-nav ml-auto">
        <Link className="nav-item nav-link" to="/">
          Home
        </Link>
        <Link className="nav-item nav-link" to="/matches">
          Matches
        </Link>

        {/* Pending Dropdown */}
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="/profile"
            id="navbarDropdownMenuPending"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Pending
          </Link>

          {/* DROPDOWN */}
          <PendingDropdown />
        </li>

        <Link className="nav-item nav-link" to="/profile">
          Profile
        </Link>
        <a className="nav-item nav-link nav-rm-item" href="/api/auth/logout">
          Logout
        </a>
      </div>
    );
  };

  const NavRightLoggedOut = () => {
    return (
      <div className="navbar-nav ml-auto">
        <a href="/api/auth/google" className="button1">
          Google Login
        </a>
      </div>
    );
  };

  if (user) {
    return <NavRightLoggedIn />;
  }
  return <NavRightLoggedOut />;
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Navbar);
