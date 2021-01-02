import React from 'react';
import {
  ErrorText,
  ErrorTextContainer
} from 'styles/Singularity/OwnerView/Authentication/index.js';

const DisplayError = ({ errorMessage }) => {
  return (
    <ErrorTextContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeIn',
        duration: 1.0
      }}
      exit={{ opacity: 0 }}
    >
      {' '}
      <ErrorText>{errorMessage}</ErrorText>
    </ErrorTextContainer>
  );
};

export default DisplayError;
