import React from 'react';

const MatchMeter = ({ percent }) => {
  let fill = (percent / 100) * 94;
  console.log(fill);
  const styles = {
    background: 'linear-gradient(red, red) bottom no-repeat',
    backgroundSize: '100% ' + fill + 'px'
  };

  return (
    <div className="MatchMeter">
      <div className="heart-fill" style={styles}>
        <div className="heart">{percent}</div>
      </div>
    </div>
  );
};

export default MatchMeter;
