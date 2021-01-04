import React from 'react';

import {
  TextBox,
  TextBoxLabel
} from 'styles/StylesLibrary/Atoms/FormElements/InputElements/index.js';

import { CenterAlignedColumnContainer } from 'styles/StylesLibrary/ElementalStyles/PositionStyles';

const InputTextBox = () => {
  return (
    <CenterAlignedColumnContainer>
      <TextBox />
      <TextBoxLabel />
    </CenterAlignedColumnContainer>
  );
};

export default InputTextBox;
