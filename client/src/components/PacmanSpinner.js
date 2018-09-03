import React from 'react';
import { PacmanLoader } from 'react-spinners';

const PacmanSpinner = () => {
  const loadingMessage = () => {
    const messages = [
      'Spinning up the hamster...',
      'Shovelling coal into the server...',
      'Programming the flux capacitor',
      'Re-reticulating splines',
      'Does Anyone Actually Read This ?',
      "Doing Something You Don't Wanna Know About",
      'Doing The Impossible',
      "Don't Panic",
      'Dusting Off Spellbooks',
      'Ensuring Everything Works Perfektly'
    ];

    // return random loading message
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <div className="spinner">
      <PacmanLoader color={'yellow'} size={35} />
    </div>
  );
};

export default PacmanSpinner;
