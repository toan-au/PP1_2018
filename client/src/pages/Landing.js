import React from 'react';
import maskot from '../images/maskot.png';

console.log(maskot);

const Landing = () => {
  return (
    <div className="landing">
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
          <a href="/api/auth/google" className="facebook">
            Facebook
          </a>
          <a href="/api/auth/google" className="button1">
            Google
          </a>
          <a href="/api/auth/google" className="discord">
            Discord
          </a>
        </div>
        <img className="maskot" src={maskot} alt="TerrorWrist" />
      </div>
    </div>
  );
};

export default Landing;
