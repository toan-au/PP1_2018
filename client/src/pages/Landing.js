import React, { Component } from 'react';

const Landing = () => {
  return (
    <div className="Landing">
      <div className="middle">
        <div className="inner">
          <h2 className="landing-title">GAME SEARCH MATCH</h2>
          <p>
            The beautifully designed matching application that will match you
            with your destined gaming compatriots through our top-tier matching
            algorithm!
          </p>
          <br />
          <p>Register or sign in now with a Google Account.</p>
          <a href="/auth/google" className="button1">
            Google login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
