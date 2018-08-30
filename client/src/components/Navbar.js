import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class Navbar extends Component {
  googleSignin() {
    axios.get('/auth/google');
  }
  renderLoggedIn() {
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
  }

  renderLoggedOut() {
    return (
      <div className="right-nav">
        <a href="/auth/google" className="button1">
          Google login
        </a>
      </div>
    );
  }

  render() {
    let rightNav;
    if (this.props.user) {
      rightNav = this.renderLoggedIn();
    } else {
      rightNav = this.renderLoggedOut();
    }
    return (
      <nav className="Navbar">
        <Link to="/" className="logo">
          GameSearchMatch
        </Link>
        {rightNav}
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Navbar);
