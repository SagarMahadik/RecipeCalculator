import React from 'react';

import { SubmitButton } from 'styles/Singularity/Style1.0/ButtonStyles/index.js';
import { ButtonText } from 'styles/Singularity/Style1.0/TextStyles/index.js';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
const StyledSubmitButton = props => {
  return (
    <CenterAlignedColumnContainer>
      <SubmitButton onClick={props.onClick}>
        <ButtonText>{props.text}</ButtonText>
      </SubmitButton>
    </CenterAlignedColumnContainer>
  );
};

export default StyledSubmitButton;
