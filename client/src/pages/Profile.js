import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getViewUser } from '../redux/actions/viewUser';

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
    responses.map(response => {
      return (
        <div>
          {response.question.questionText} - {response.response}
        </div>
      );
    });
  };

  renderProfile = () => {
    const { viewUser } = this.props;
    if (viewUser) {
      console.log(viewUser);
      return (
        <div>
          {viewUser.displayName}
          {viewUser.bio}
          {viewUser.age}
          {viewUser.region.region}
          {viewUser.locale.locale}

          {this.renderResponses()}
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
