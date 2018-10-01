import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';

import { getViewUser } from '../redux/actions/viewUser';

import DocumentTitle from '../components/DocumentTitle';

import defaultPfp from '../images/fortnite_drift_.png';

class Profile extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    const { getViewUser, viewUser, user } = this.props;
    if (viewUser === null) {
      await getViewUser(user.id);
    }
    this.setState({ loading: false });
  }

  // render list of responses: questionId - response
  renderResponses = () => {
    const {
      viewUser: { responses }
    } = this.props;
    const responsesList = responses.map(response => {
      return (
        <div key={response.id}>
          {response.question.questionText} - {response.answerText}
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

  renderPlatformIds = () => {
    const {
      viewUser: { platformIds }
    } = this.props;
    console.log(platformIds);
    const platformsList = platformIds.map(platform => (
      <div>
        {platform.platform.title} - {platform.platformDisplayName}
      </div>
    ));
    return platformsList;
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
            <span>
              Display Name:
              <span className="info"> {viewUser.displayName}</span>
            </span>
            <br />
            <br />

            <span>
              Age:
              <span className="info"> {viewUser.age}</span>
            </span>
            <br />

            <span>
              Region:
              <span className="info"> {viewUser.region.region}</span>
            </span>
            <br />

            <span>
              Locale:
              <span className="info"> {viewUser.locale.locale}</span>
            </span>
            <br />

            <span>
              Casual or Competitive:
              <span className="info"> {viewUser.playstyle}</span>
            </span>
            <br />
            <br />

            <span>
              Biography:
              <br />
              <span className="info">{viewUser.bio}</span>
            </span>
            <br />
            <br />

            <span>Social Platforms:</span>
            <span className="info">{this.renderPlatformIds()}</span>

            <br />

            <span>Your Answers:</span>
            <span className="info">{this.renderResponses()}</span>
            <br />

            <span>Your Favourite Games:</span>
            <span className="info">{this.renderGames()}</span>
            <br />

            <span>Your Favourite Genres:</span>
            <span className="info">{this.renderGenres()}</span>
          </div>
        </div>
      );
    }
  };

  render = () => {
    return (
      <div>
        <DocumentTitle>Profile</DocumentTitle>
        <div className="banner">
          <h1 className="text-center">Your Profile</h1>
          <p>
            View your profile details and your answers to our questionnaire.
          </p>
        </div>

        {this.state.loading ? (
          <div className="d-flex justify-content-center">
            <ReactLoading type={'bubbles'} color="yellow" />
          </div>
        ) : (
          <div className="Profile container">
            <div className="profile-details">{this.renderProfile()}</div>
          </div>
        )}
      </div>
    );
  };
}

const mapStateToProps = ({ user, viewUser }) => ({ user, viewUser });
export default connect(
  mapStateToProps,
  { getViewUser }
)(Profile);
