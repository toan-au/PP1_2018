import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class Navbar extends Component {
  googleSignin() {
    axios.get('/auth/google');
  }

  render() 
  {
    return (
      <nav className="Navbar">
        <Link to="/" className="logo">
          GameSearchMatch
        </Link>
        <div className="right-nav">
        <Link to="/register" className="login">
        <a href="/auth/google" class="button1" onClick={ () => {console.log('success'); }}>G Login</a>
        </Link>
        </div>
      </nav>
    ); 
  }
}

export default Navbar;
