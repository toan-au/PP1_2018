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
        <a href="/auth/logout" class="button1">
          Logout
        </a>
      </div>
    );
  }

  renderLoggedOut() {
    return (
      <div className="right-nav">
        <a href="/auth/google" class="button1">
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
