import React from 'react';

import mascot from '../images/maskot.png';

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="d-flex justify-content-center">
        <div>
          <img className="maskot" src={mascot} alt="TerrorWrist" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
