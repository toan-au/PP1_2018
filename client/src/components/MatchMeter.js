import React from 'react';

const MatchMeter = ({ percent }) => {
  return (
    <div className="MatchMeter">
      <div className="heart">{percent}</div>
    </div>
  );
};

export default MatchMeter;
