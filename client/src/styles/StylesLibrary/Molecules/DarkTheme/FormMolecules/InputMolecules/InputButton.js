import React from 'react';

import {
  InputButtonStyle,
  InputBorder,
  InputButtonLabel
} from 'styles/StylesLibrary/Atoms/FormElements/ButtonElements';

import { FormOptionButtonContainer } from 'styles/StylesLibrary/ElementalStyles/PositionStyles';

const InputTextBox = () => {
  return (
    <FormOptionButtonContainer>
      <InputBorder selected={false}>
        <InputButtonStyle selected={false}>
          <InputButtonLabel selected={false}>Solid</InputButtonLabel>
        </InputButtonStyle>
      </InputBorder>
      <InputBorder selected={true}>
        <InputButtonStyle selected={true}>
          <InputButtonLabel selected={true}>Liquid</InputButtonLabel>
        </InputButtonStyle>
      </InputBorder>
      <InputBorder selected={false}>
        <InputButtonStyle selected={false}>
          <InputButtonLabel selected={false}>Unit</InputButtonLabel>
        </InputButtonStyle>
      </InputBorder>
    </FormOptionButtonContainer>
  );
};

export default InputTextBox;
