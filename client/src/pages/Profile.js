import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getViewUser } from '../redux/actions/viewUser';
import defaultPfp from '../images/fortnite_drift_.png';

class Profile extends Component {
  componentDidMount = async () => {
    const { getViewUser, user } = this.props; // , viewUser
    await getViewUser(user.id);
  };

  // render list of responses: questionId - response
  renderResponses = () => {
    const {
      viewUser: { responses }
    } = this.props;
    const responsesList = responses.map(response => {
      return (
        <div key={response.id}>
          {response.question.questionText} - {response.response}
        </div>
      );
    });
    return responsesList;
  };

  renderGames = () => {
    const {
      viewUser: { prefGames }
    } = this.props;
    const gamesList = prefGames.map(pref => {
      return <div key={pref.id}>{pref.game.title}</div>;
    });
    return gamesList;
  };

  renderGenres = () => {
    const {
      viewUser: { prefGenres }
    } = this.props;
    const genresList = prefGenres.map(pref => {
      return <div key={pref.id}>{pref.genre.title}</div>;
    });
    return genresList;
  };

  renderProfile = () => {
    const { viewUser } = this.props;
    if (viewUser) {
      console.log(viewUser);
      return (
        <div>
          <div className="pfp">
            <img src={viewUser.pfpUrl || defaultPfp} alt="profile dp" />
          </div>

          <div className="user-info">
            <table>
              <tr>
                <td>Display Name:</td>
                <td className="info">{viewUser.displayName}</td>
              </tr>
              <tr>
                <td>Age: </td>
                <td className="info">{viewUser.age}</td>
              </tr>
              <tr>
                <td>Region: </td>
                <td className="info">{viewUser.region.region}</td>
              </tr>
              <tr>
                <td>Locale: </td>
                <td className="info">{viewUser.locale.locale}</td>
              </tr>
            </table>

            <br />
            <p>Biography:</p>
            <p className="info">{viewUser.bio}</p>
            <br />

            <p>Your Answers:</p>
            <p className="info">{this.renderResponses()}</p>
            <br />

            <p>Your Favourite Games:</p>
            <p className="info">{this.renderGames()}</p>
            <br />

            <p>Your Favourite Genres:</p>
            <p className="info">{this.renderGenres()}</p>
          </div>

          <div className="edit-button">
            <button className="Edit">Edit Profile</button>
          </div>
        </div>
      );
    }
  };

  render = () => {
    return (
      <div className="Profile container">
        <h1>Your Profile</h1>
        <div className="profile-details">{this.renderProfile()}</div>
      </div>
    );
  };
}

const mapStateToProps = ({ user, viewUser }) => ({ user, viewUser });
export default connect(
  mapStateToProps,
  { getViewUser }
)(Profile);
