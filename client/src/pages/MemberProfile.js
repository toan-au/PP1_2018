import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import axios from 'axios';

import DocumentTitle from '../components/DocumentTitle';

import defaultPfp from '../images/fortnite_drift_.png';

class MemberProfile extends Component {
  state = {
    loading: true,
    id: parseInt(this.props.match.params.id, 10),
    user: null
  };

  async componentDidMount() {
    if (this.state.user === null) {
      const res = await axios.get('/api/user/' + this.state.id);
      const user = res.data;
      this.setState({ loading: false, user });
      return;
    }
    this.setState({ loading: false });
  }

  // render list of responses: questionId - response
  renderResponses = () => {
    const responsesList = this.state.user.responses.map(response => {
      return (
        <div key={response.id}>
          {response.question.questionText} - {response.answerText}
        </div>
      );
    });
    return responsesList;
  };

  renderGames = () => {
    const gamesList = this.state.user.prefGames.map(pref => {
      return <div key={pref.id}>{pref.game.title}</div>;
    });
    return gamesList;
  };

  renderGenres = () => {
    const genresList = this.state.user.prefGenres.map(pref => {
      return <div key={pref.id}>{pref.genre.title}</div>;
    });
    return genresList;
  };

  renderPlatformIds = () => {
    const platformsList = this.state.user.platformIds.map(platform => (
      <div>
        {platform.platform.title} - {platform.platformDisplayName}
      </div>
    ));
    return platformsList;
  };

  renderProfile = () => {
    const { user } = this.state;
    if (user !== null) {
      return (
        <div>
          <div className="pfp">
            <img src={user.pfpUrl || defaultPfp} alt="profile dp" />
          </div>

          <div className="user-info">
            <span>
              Display Name:
              <span className="info"> {user.displayName}</span>
            </span>
            <br />
            <br />

            <span>
              Age:
              <span className="info"> {user.age}</span>
            </span>
            <br />

            <span>
              Region:
              <span className="info"> {user.region.region}</span>
            </span>
            <br />

            <span>
              Locale:
              <span className="info"> {user.locale.locale}</span>
            </span>
            <br />

            <span>
              Casual or Competitive:
              <span className="info"> {user.playstyle}</span>
            </span>
            <br />
            <br />

            <span>
              Biography:
              <br />
              <span className="info">{user.bio}</span>
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
    const { loading } = this.state;
    const { displayName } = this.props.location.state;

    return (
      <div>
        {/* displayName should always be present, but is checked just in case */}
        <DocumentTitle>
          {displayName ? `Profile | ${displayName}` : 'Member Profile'}
        </DocumentTitle>
        <div className="banner">
          <h1 className="text-center">{displayName ? displayName : ''}</h1>
        </div>

        {loading ? (
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

export default MemberProfile;
