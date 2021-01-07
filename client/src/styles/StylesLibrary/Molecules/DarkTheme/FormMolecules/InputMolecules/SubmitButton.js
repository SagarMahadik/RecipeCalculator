import React from 'react';

import {
  SubmitButtonStyle,
  SubmitButtonBorder,
  SubmitButtonLabel
} from 'styles/StylesLibrary/Atoms/FormElements/ButtonElements/submitButtonElements.js';

const SubmitButton = () => {
  return (
    <SubmitButtonBorder>
      <SubmitButtonStyle>
        <SubmitButtonLabel>Add raw material</SubmitButtonLabel>
      </SubmitButtonStyle>
    </SubmitButtonBorder>
  );
};

export default SubmitButton;
