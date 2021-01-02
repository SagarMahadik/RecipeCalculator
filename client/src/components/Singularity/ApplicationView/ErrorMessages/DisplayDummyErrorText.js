import React from 'react';

import {
  ErrorDummyText,
  ErrorDummyTextContainer
} from 'styles/Singularity/OwnerView/Authentication';

const DisplayDummyErrorText = ({ dummyMessage }) => {
  return (
    <ErrorDummyTextContainer>
      <ErrorDummyText>{dummyMessage}</ErrorDummyText>
    </ErrorDummyTextContainer>
  );
};

export default DisplayDummyErrorText;
