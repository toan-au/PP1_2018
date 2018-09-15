import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getViewUser } from '../redux/actions/viewUser';
import defaultPfp from '../images/fortnite_drift_.png';

class Profile extends Component {
  componentDidMount = async () => {
    const { getViewUser, user, viewUser } = this.props;
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
          <img src={viewUser.pfpUrl || defaultPfp} />
          {viewUser.displayName}
          {viewUser.bio}
          {viewUser.age}
          {viewUser.region.region}
          {viewUser.locale.locale}

          {this.renderResponses()}
          {this.renderGames()}
          {this.renderGenres()}
        </div>
      );
    }
  };

  render = () => {
    return (
      <div className="Profile container">
        <h1>Profile page</h1>
        {this.renderProfile()}
      </div>
    );
  };
}

const mapStateToProps = ({ user, viewUser }) => ({ user, viewUser });
export default connect(
  mapStateToProps,
  { getViewUser }
)(Profile);
