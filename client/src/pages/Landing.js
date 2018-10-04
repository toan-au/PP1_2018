import React from 'react';

import DocumentTitle from '../components/DocumentTitle';

import maskot from '../images/maskot.png';

/** Landing page. */
const Landing = () => {
  return (
    <div className="landing">
      <DocumentTitle>GameSearchMatch</DocumentTitle>
      <div className="middle">
        <div className="inner">
          <h2 className="landing-title">GAME SEARCH MATCH</h2>
          <p>
            The beautifully designed matching application that will match you
            with your destined gaming compatriots.
          </p>
          <p>
            Through our top-tier matching algorithm, find your perfect gaming
            buddies!
          </p>
          <br />
          <p>Register or log in now!</p>
          <a href="/api/auth/facebook" className="facebook">
            Facebook
          </a>
          <a href="/api/auth/google" className="button1">
            Google
          </a>
          <a href="/api/auth/discord" className="discord">
            Discord
          </a>
        </div>
        <img className="maskot" src={maskot} alt="TerrorWrist" />
      </div>
    </div>
  );
};

export default Landing;
