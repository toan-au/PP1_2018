import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

const Navbar = ({ user }) => {
  // TODO: is this needed here?
  const googleSignin = () => {
    axios.get('/auth/google');
  };

  const NavRightLoggedIn = () => {
    return (
      <div className="right-nav">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/matches">Matches</Link>
          <Link to="/pending">Pending</Link>
          {/* <Link to="/settings">Settings</Link> */}
          <div className="dropdown">
            <Link to="/settings" className="dropbtn">
              Settings
            </Link>
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>
              <a href="/auth/logout">Logout</a>
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
        <a href="/auth/google" className="button1">
          Google login
        </a>
      </div>
    );
  };

  return (
    <nav className="Navbar">
      <Link to="/" className="logo">
        GameSearchMatch
      </Link>
      {user ? <NavRightLoggedIn /> : <NavRightLoggedOut />}
    </nav>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Navbar);
