import React from 'react';

const MatchCard = props => {
  const { display_name, email, bio } = props.match;
  return (
    <div className="MatchCard">
      <div className="profile-pic" />
      <div className="display-name">
        <h3>{display_name}</h3>
      </div>
      <div className="bio">{bio}</div>
    </div>
  );
};

export default MatchCard;
