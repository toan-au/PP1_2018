import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import logo from '../images/Favicon.png';

console.log(logo);
const Navbar = ({ user }) => {
  const NavRightLoggedIn = () => {
    return (
      <div className="right-nav">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/matches">Matches</Link>

          <Link to="/pending" className="dropbtn">
            Pending
          </Link>
          {/* <Link to="/settings">Settings</Link> */}
          <div className="dropdown">
            <Link to="/settings" className="dropbtn">
              Settings
            </Link>
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>
              <a href="/api/auth/logout">Logout</a>
            </div>
          </div>
          {/* <a href="/auth/logout" className="button1">
            Logout
          </a> */}
        </nav>
      </div>
    );
  };

  const NavRightLoggedOut = () => {
    return (
      <div className="right-nav">
        <a href="/api/auth/google" className="button1">
          Google Login
        </a>
      </div>
    );
  };

  return (
    <nav className="Navbar">
      <div>
        <Link to="/">
          <img src={logo} alt="Game Search Match" />
        </Link>
        <Link to="/" className="logo">
          GameSearchMatch
        </Link>
      </div>
      {user ? <NavRightLoggedIn /> : <NavRightLoggedOut />}
    </nav>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Navbar);
