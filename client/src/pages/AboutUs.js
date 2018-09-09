import React from 'react';
import image from '../images/fortnite_drift_.png'

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="middle">
        <div className="inner">
          <h3>Who Created GameSearchMatch?</h3>
          <br />
          <p>
            GameSearchMatch was created by a group called The Terror Wrists. There Terror Wrists were formed for their
            Programming Project Subject.
          </p>
          <br /> <br />
          <p className="boldThis">The Terror Wrists Members</p>
          <br/>
          <div className="TeamImages">
            <img className="AboutUsImg" src={image} alt="Toan"/>

            <img className="AboutUsImg" src={image} alt="Martin"/>

            <img className="AboutUsImg" src={image} alt="Robert"/>

            <img className="AboutUsImg" src={image} alt="Ronald"/>

            <img className="AboutUsImg" src={image} alt="Cindy"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
