import React, { Component } from 'react';


class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <div className="middle">
          <div className="inner">
            <h2>WELCOME TO GAMESEARCHMATCH</h2>
            <p>The beautifully designed matching application that will match you with your destined gaming compatriots through our top-tier matching algorithm!</p>
            <br></br>
            <p>Register or sign in now with a Google Account.</p>
            <img src="../images/landing.jpg" alt="Group of children playing arcade games"></img>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
