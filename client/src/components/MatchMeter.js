import React from 'react';

/** Match meter component. A heart showing the compatibility. */
const MatchMeter = ({ percent }) => {
  const width = 75;
  const height = 63;
  let fill = (percent / 100) * height - height * 0.35;
  fill += 15;
  const styles = {
    heartFill: {
      height,
      width,
      background: 'linear-gradient(red, red) bottom no-repeat',
      backgroundSize: '100% ' + fill + 'px'
    },
    heart: {
      height,
      width
    }
  };

  return (
    <div className="MatchMeter">
      <div className="heart-fill" style={styles.heartFill}>
        <div className="heart" style={styles.heart} />
      </div>
    </div>
  );
};

export default MatchMeter;
