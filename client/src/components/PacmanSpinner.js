/**
 * Pacman Spinner component.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

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
