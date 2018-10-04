import React from 'react';
import { PacmanLoader } from 'react-spinners';

/** A pacman loading indicator. */
const PacmanSpinner = () => {
  return (
    <div className="spinner">
      <PacmanLoader color={'yellow'} size={35} />
    </div>
  );
};

export default PacmanSpinner;
