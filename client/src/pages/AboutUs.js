/**
 * About Us page component.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import React from 'react';
import image from '../images/fortnite_drift_.png';

import DocumentTitle from '../components/DocumentTitle';

/** About Us page. */
const AboutUs = () => {
  return (
    <div className="AboutUs">
      <DocumentTitle>About Us</DocumentTitle>
      <div className="AboutUs-middle">
        <div className="AboutUs-inner">
          <h3 className="AboutUsTitle">Who Created GameSearchMatch?</h3>
          <br />
          <p>
            GameSearchMatch was created by a group called The Terror Wrists. The
            Terror Wrists were formed for their Programming Project subject.
          </p>
          <br /> <br />
          <p className="boldThis">The Terror Wrists Members</p>
          <br />
          <div className="TeamImages">
            <img className="AboutUsImg" src={image} alt="Toan" />

            <img className="AboutUsImg" src={image} alt="Martin" />

            <img className="AboutUsImg" src={image} alt="Robert" />

            <img className="AboutUsImg" src={image} alt="Ronald" />

            <img className="AboutUsImg" src={image} alt="Cindy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
