import React from 'react';
import {
  TextBox,
  LabelText,
  InputWrapper
} from 'styles/Singularity/Style1.0/FormInputStyles/index.js';

import { ErrorText } from 'styles/Singularity/OwnerView/Authentication/index.js';

import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
const StyledTextBoxLabel = ({
  id,
  type,
  name,
  value,
  onChange,
  text,
  isError,
  requiredErrorText,
  isValidationError,
  validationErrorText
}) => {
  return (
    <CenterAlignedColumnContainer backGroundcolor={'none'}>
      <InputWrapper>
        <TextBox
          id={id}
          placeholder=" "
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <LabelText>{text}</LabelText>
        {isError ? (
          <ErrorText id="required-field-message">{requiredErrorText}</ErrorText>
        ) : null}
        {isValidationError ? (
          <ErrorText id="validation-error-message">
            {validationErrorText}
          </ErrorText>
        ) : null}
      </InputWrapper>
    </CenterAlignedColumnContainer>
  );
};

export default StyledTextBoxLabel;
