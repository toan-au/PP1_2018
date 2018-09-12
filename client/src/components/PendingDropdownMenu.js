import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPending, removePending } from '../redux/actions/pending';
import TrashIcon from './TrashIcon';

const UsersPending = ({ users, removePending }) => {
  const UserPending = ({ user, onClick }) => {
    return (
      <div className="dropdown-item">
        <p className="pending-item-text">{user.displayName}</p>
        <TrashIcon className={'pending-item-remove'} onClick={onClick} />
      </div>
    );
  };

  const onClick = (user, removePending) => {
    return () => {
      removePending(user);
    };
  };

  return users.map(user => (
    <UserPending
      key={user.displayName}
      user={user}
      onClick={onClick(user, removePending)}
    />
  ));
};

const PendingDropdownContent = ({ loading, pending, removePending }) => {
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
    return <UsersPending users={pending} removePending={removePending} />;
  } else {
    return <NoPendingItems />;
  }
};

class PendingDropdownMenu extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
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
  { getPending, removePending }
)(PendingDropdownMenu);
