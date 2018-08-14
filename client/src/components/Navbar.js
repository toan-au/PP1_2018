import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Build, SupervisorAccount, Home } from 'material-react-icons';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/user';

class Navbar extends Component {
  logOut() {
    console.log('test');
    this.props.logoutUser();
  }

  renderLoggedIn() {
    return (
      <div className="right-nav">
        <Link to="/">
          <Home viewBox="10 10 10 10" className="icon" />
        </Link>
        <Link to="/messages">
          <SupervisorAccount viewBox="10 10 10 10" className="icon" />
        </Link>
        <Link to="/requests">
          <SupervisorAccount viewBox="10 10 10 10" className="icon" />
        </Link>
        <a onClick={this.logOut.bind(this)}>
          <Build viewBox="10 10 13 13" className="icon" />
        </a>
      </div>
    );
  }

  renderLoggedOut() {
    return (
      <div className="right-nav">
        <Link to="/">
          <Home viewBox="10 10 10 10" className="icon" />
        </Link>
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
          Game Search Match
        </Link>
        {/* Conditional rendering of right-nav */}
        {rightNav}
      </nav>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
