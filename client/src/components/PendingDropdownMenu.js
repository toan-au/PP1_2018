import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addNote } from '../redux/actions/notifications';
import { getPending, removePending } from '../redux/actions/pending';
import TrashIcon from './TrashIcon';

const UserPending = ({ user, onClick }) => {
  return (
    <div className="dropdown-item">
      <Link id="user-match-link" className="pending-item-text" to={{ pathname: `/profile/${user.id}`, state: { displayName: user.displayName } }} query={{ displayName: user.displayName }}>
        {user.displayName}
      </Link>
      <TrashIcon className={'pending-item-remove'} onClick={onClick} />
    </div>
  );
};

const UsersPending = ({ users, removePending, appUser, addNote }) => {
  const removeUser = (appUser, user, removePending) => {
    return () => {
      removePending(appUser.id, user.id);
      addNote({
        id: new Date().getTime(),
        text: `removed ${user.displayName} from pending list`
      });
    };
  };

  return users.map(user => (
    <UserPending
      key={user.displayName}
      user={user}
      onClick={removeUser(appUser, user, removePending)}
    />
  ));
};

const PendingDropdownContent = ({
  loading,
  pending,
  removePending,
  appUser,
  addNote
}) => {
  const IsLoading = () => (
    <div className="dropdown-item">
      <p className="pending-item-text centered unselectable">Loading...</p>
    </div>
  );

  const NoPendingItems = () => (
    <div className="dropdown-item">
      <p className="pending-item-text centered unselectable">
        No pending matches
      </p>
    </div>
  );

  if (loading) {
    return <IsLoading />;
  }
  if (pending !== null) {
    return (
      <UsersPending
        users={pending}
        removePending={removePending}
        appUser={appUser}
        addNote={addNote}
      />
    );
  } else {
    return <NoPendingItems />;
  }
};

class PendingDropdownMenu extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // this will stop bootstrap dropdown menu from closing on click
    global.$(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });
    global.$(document).on('click', '#user-match-link', function (e) {
      global.$('.dropdown-toggle').dropdown('toggle');
    });

    this.props.getPending(this.props.user.id).then(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <div
        id="pending-dropdown"
        className="dropdown-menu"
        aria-labelledby="navbarDropdownMenuPending"
      >
        <PendingDropdownContent
          loading={this.state.loading}
          pending={this.props.pending}
          removePending={this.props.removePending}
          appUser={this.props.user}
          addNote={this.props.addNote}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  pending: state.pending
});

export default connect(
  mapStateToProps,
  { getPending, removePending, addNote }
)(PendingDropdownMenu);
