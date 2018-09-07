import React from 'react';
import { removePending } from '../redux/actions/pending';
import { connect } from 'react-redux';

const UserPending = ({ user, onClick }) => {
  return (
    <div className="dropdown-item">
      <p className="pending-item-text">{user.displayName}</p>
      <i className="pending-item-remove fas fa-trash" onClick={onClick} />
    </div>
  );
};

const UsersPending = ({ users, removePending }) => {
  const onClick = (user, removePending) => {
    return () => {
      removePending(user);
    };
  };

  return users.map(user => {
    return (
      <UserPending
        key={user.displayName}
        user={user}
        onClick={onClick(user, removePending)}
      />
    );
  });
};

const PendingDropdown = ({ pending, removePending }) => {
  const NoPendingItems = () => {
    return (
      <div className="dropdown-item">
        <p className="pending-item-text">No pending matches</p>
      </div>
    );
  };

  const hasPendingItems = pending !== null && pending.length !== 0;
  return (
    <div
      id="pending-dropdown"
      className="dropdown-menu"
      aria-labelledby="navbarDropdownMenuPending"
    >
      {hasPendingItems ? (
        <UsersPending users={pending} removePending={removePending} />
      ) : (
        <NoPendingItems />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  pending: state.pending
});

export default connect(
  mapStateToProps,
  { removePending }
)(PendingDropdown);
