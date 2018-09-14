import React from 'react';
import { connect } from 'react-redux';

const Profile = ({ user }) => {
  return (
    <div>
      <h1>Profile page</h1>
      {user.displayName}
      {user.bio}
      {user.age}
      {user.region.region}
      {user.locale.locale}
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(Profile);
