import React from 'react';

import {
  TextBox,
  TextBoxLabel,
  InputTextBoxWrapper
} from 'styles/StylesLibrary/Atoms/FormElements/InputElements/index.js';

import { CenterAlignedColumnContainerWOShadowBackground } from 'styles/StylesLibrary/ElementalStyles/PositionStyles';

const InputTextBox = () => {
  return (
    <>
      <CenterAlignedColumnContainerWOShadowBackground>
        <InputTextBoxWrapper>
          <TextBox placeholder=" " />
          <TextBoxLabel>Supplier Name</TextBoxLabel>
        </InputTextBoxWrapper>
      </CenterAlignedColumnContainerWOShadowBackground>
    </>
  );
};

export default InputTextBox;
