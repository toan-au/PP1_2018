import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../images/Favicon.png';

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
        <Link className="nav-item nav-link" to="/pending">
          Pending
        </Link>
        {/* <Link to="/settings">Settings</Link> */}

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            id="navbarDropdownMenuLink"
            role="button"
            href="_"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Settings
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link className="dropdown-item" to="/profile">
              Profile
            </Link>
            <a className="dropdown-item" href="/api/auth/logout">
              Logout
            </a>
          </div>
        </li>
      </div>
    );
  };

  const NavRightLoggedOut = () => {
    return <div className="navbar-nav ml-auto" />;
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
