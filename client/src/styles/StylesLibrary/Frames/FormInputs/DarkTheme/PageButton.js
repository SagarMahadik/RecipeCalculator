import React from 'react';
import ResetButton from 'styles/StylesLibrary/Molecules/DarkTheme/FormMolecules/ButtonMolecules.js/ResetButton.js';
import Logout from 'styles/StylesLibrary/Icons/Logout.js';
import RandomButton from 'styles/StylesLibrary/Icons/RandomButton.js';

const PageButton = () => {
  return (
    <div>
      <ResetButton />
      <Logout />
      <RandomButton />
    </div>
  );
};

export default PageButton;
