import React from 'react';

import {
  InputButton,
  InputBorder,
  InputButtonLabel
} from 'styles/StylesLibrary/Atoms/FormElements/ButtonElements';

import { CenterAlignedColumnContainer } from 'styles/StylesLibrary/ElementalStyles/PositionStyles';

const InputTextBox = () => {
  return (
    <CenterAlignedColumnContainer>
      <InputBorder>
        <InputButton>
          <InputButtonLabel>Solid</InputButtonLabel>
        </InputButton>
      </InputBorder>
    </CenterAlignedColumnContainer>
  );
};

export default InputTextBox;
