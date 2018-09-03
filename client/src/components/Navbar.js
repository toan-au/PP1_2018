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
          <div className="dropdown">
            <Link to="/pending" className="dropbtn">
              Pending
            </Link>
          {/* <Link to="/settings">Settings</Link> */}
          <div className="dropdown">
            <Link to="/settings" className="dropbtn">
              Settings
            </Link>
            {/*}<div className="dropdown-content">
              <Link to="/profile">Profile</Link>
              <a href="/auth/logout">Logout</a>
            </div>
          </div>
           <a href="/auth/logout" className="button1">
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
          Google Login
        </a>
      </div>
    );
  };

  return (
    <nav className="Navbar">
      <Link to="/" className="logo"><img src={logo} alt="Game Search Match"/>
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
