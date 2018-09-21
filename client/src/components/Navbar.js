import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../images/Favicon.png';

import PendingDropdownMenu from './PendingDropdownMenu';

const NavbarLinks = ({ user }) => {
  const NavRightLoggedIn = () => (
    <div className="navbar-nav ml-auto">
      <Link className="nav-item nav-link" to="/">
        Home
      </Link>
      <Link className="nav-item nav-link" to="/matches">
        Matches
      </Link>

      {/* Pending Dropdown */}
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          id="navbarDropdownMenuPending"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Pending
        </a>

        {/* Pending Dropdown */}
        <PendingDropdownMenu />
      </li>

      <Link className="nav-item nav-link" to="/profile">
        Profile
      </Link>
      <a className="nav-item nav-link nav-rm-item" href="/api/auth/logout">
        Logout
      </a>
    </div>
  );

  const NavRightLoggedOut = () => <div className="navbar-nav ml-auto" />;

  if (user === null) {
    return <NavRightLoggedOut />;
  }
  return <NavRightLoggedIn />;
};

const Navbar = ({ loading, user }) => {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
      {/* Brand */}
      <Link className="navbar-brand" to={'/'}>
        <img src={logo} width="50" height="50" alt="Game Search Match" />
      </Link>
      <Link to="/" className="logo">
        GameSearchMatch
      </Link>

      {/* Responsive Design Toggler */}
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

      {loading ? null : (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {/* Main Nav Links */}
          <NavbarLinks user={user} />
        </div>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Navbar);
