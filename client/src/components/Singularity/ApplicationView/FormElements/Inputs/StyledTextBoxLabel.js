import React from 'react';
import {
  TextBox,
  LabelText,
  InputWrapper
} from 'styles/Singularity/Style1.0/FormInputStyles/index.js';

import {
  ErrorText,
  ErrorTextContainer,
  ErrorDummyTextContainer,
  ErrorDummyText
} from 'styles/Singularity/OwnerView/Authentication/index.js';

import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';

import { AnimatePresence } from 'framer-motion';

const DisplayError = ({ message }) => {
  return (
    <ErrorTextContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeOut',
        duration: 1.0
      }}
      exit={{ opacity: 0 }}
    >
      <ErrorText id="required-field-message">{message}</ErrorText>
    </ErrorTextContainer>
  );
};
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
        <AnimatePresence>
          {isError ? (
            <DisplayError message={requiredErrorText} />
          ) : isValidationError ? (
            <DisplayError message={validationErrorText} />
          ) : (
            <ErrorDummyTextContainer>
              <ErrorDummyText>Hello</ErrorDummyText>
            </ErrorDummyTextContainer>
          )}
        </AnimatePresence>
      </InputWrapper>
    </CenterAlignedColumnContainer>
  );
};

export default StyledTextBoxLabel;
