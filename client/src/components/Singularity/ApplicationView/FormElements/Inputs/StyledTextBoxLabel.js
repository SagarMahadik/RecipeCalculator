import React from 'react';
import {
  TextBox,
  LabelText,
  InputWrapper
} from 'styles/Singularity/Style1.0/FormInputStyles/index.js';

import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
const StyledTextBoxLabel = props => {
  return (
    <CenterAlignedColumnContainer>
      <InputWrapper>
        <TextBox
          placeholder=" "
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
        <LabelText>{props.text}</LabelText>
      </InputWrapper>
    </CenterAlignedColumnContainer>
  );
};

export default StyledTextBoxLabel;
