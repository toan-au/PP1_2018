import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import axios from 'axios';

import DocumentTitle from '../components/DocumentTitle';
import ProfileCard from '../components/ProfileCard';

/** Member profile page. */
class MemberProfile extends Component {
  state = {
    loading: true,
    id: -1,
    user: null
  };

  componentDidMount() {
    if (this.state.user === null) {
      const id = parseInt(this.props.match.params.id, 10);
      this.fetchUser(id);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const nextId = parseInt(nextProps.match.params.id, 10);
    if (nextId !== prevState.id) {
      return { id: nextId };
    } else return null;
  }

  componentDidUpdate(_, prevState) {
    if (prevState.id !== this.state.id) {
      this.fetchUser(this.state.id);
    }
  }

  componentWillUnmount() {
    this.isCancelled = true;
  }

  /**
   * Fetch user data for API.
   * @param {number} id - The id of user to fetch.
   */
  fetchUser = id => {
    this.setState({ loading: true });

    axios.get('/api/user/' + id).then(res => {
      const user = res.data;
      !this.isCancelled && this.setState({ loading: false, user, id });
    });
  };

  render = () => {
    const { displayName } = this.props.location.state;

    return (
      <div>
        <DocumentTitle>{`Profile | ${displayName}`}</DocumentTitle>
        <div className="banner">
          <h1 className="text-center">{displayName}</h1>
        </div>

        {this.state.loading ? (
          <div className="d-flex justify-content-center">
            <ReactLoading type={'bubbles'} color="yellow" />
          </div>
        ) : (
          <div className="Profile container">
            <div className="profile-details">
              <ProfileCard user={this.state.user} />
            </div>
          </div>
        )}
      </div>
    );
  };
}

export default MemberProfile;
