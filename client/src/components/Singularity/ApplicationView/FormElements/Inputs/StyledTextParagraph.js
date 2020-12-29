import React from 'react';
import {
  TextParagraph,
  LabelTextParagraph,
  InputWrapper
} from 'styles/Singularity/Style1.0/FormInputStyles/index.js';

import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
const StyledTextParagraphLabel = ({ type, name, value, onChange, text }) => {
  return (
    <CenterAlignedColumnContainer>
      <InputWrapper>
        <TextParagraph
          placeholder=" "
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <LabelTextParagraph>{text}</LabelTextParagraph>
      </InputWrapper>
    </CenterAlignedColumnContainer>
  );
};

export default StyledTextParagraphLabel;
