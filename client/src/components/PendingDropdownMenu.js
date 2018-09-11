import React from 'react';
import { removePending } from '../redux/actions/pending';
import { connect } from 'react-redux';

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

const PendingDropdownMenu = ({ pending, removePending }) => {
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

  const PendingItems = () => (
    <UsersPending users={pending.matches} removePending={removePending} />
  );

  const Menu = () => {
    if (pending.loading) {
      return <IsLoading />;
    }
    if (pending.matches !== null && pending.matches.length > 0) {
      return <PendingItems />;
    } else {
      return <NoPendingItems />;
    }
  };

  return (
    <div
      id="pending-dropdown"
      className="dropdown-menu"
      aria-labelledby="navbarDropdownMenuPending"
    >
      <Menu />
    </div>
  );
};

const mapStateToProps = state => ({
  pending: state.pending
});

export default connect(
  mapStateToProps,
  { removePending }
)(PendingDropdownMenu);
