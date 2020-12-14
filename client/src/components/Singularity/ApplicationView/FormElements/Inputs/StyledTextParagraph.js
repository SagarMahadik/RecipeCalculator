import React from 'react';
import {
  TextParagraph,
  LabelTextParagraph,
  InputWrapper
} from 'styles/Singularity/Style1.0/FormInputStyles/index.js';

import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
const StyledTextParagraphLabel = props => {
  return (
    <CenterAlignedColumnContainer>
      <InputWrapper>
        <TextParagraph
          placeholder=" "
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
        <LabelTextParagraph>{props.text}</LabelTextParagraph>
      </InputWrapper>
    </CenterAlignedColumnContainer>
  );
};

export default StyledTextParagraphLabel;
