/**
 * About Us page component.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import React from 'react';
import image from '../images/fortnite_drift_.png';
import Toan from '../images/Toan.png';
import Martin from '../images/Martin.png';
import Robert from '../images/Robert.png';
import Ronald from '../images/Ronald.png';
import Cindy from '../images/Cindy.png';

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

          <div className="TeamImages">
            <table>
            <tr>
              <td>
                <img className="AboutUsImg" src={Toan} alt="Toan" />
              </td>
              <td>
                <img className="AboutUsImg" src={Martin} alt="Martin" />
              </td>
              <td>
                <img className="AboutUsImg" src={Robert} alt="Robert" />
              </td>
              <td>
                <img className="AboutUsImg" src={Ronald} alt="Ronald" />
              </td>
              <td>
                <img className="AboutUsImg" src={Cindy} alt="Cindy" />
              </td>
            </tr>
            <tr>
              <td>Toan</td>
              <td>Martin</td>
              <td>Robert</td>
              <td>Ronald</td>
              <td>Cindy</td>
            </tr>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
