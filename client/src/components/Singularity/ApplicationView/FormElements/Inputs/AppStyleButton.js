import React from 'react';
import {
  RadioButtonText,
  TextContainer
} from 'styles/Singularity/Style1.0/TextStyles';
import { TextRadioButton } from 'styles/Singularity/Style1.0/FormInputStyles';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';

const AppStyleButton = ({ onClick, display, id }) => {
  return (
    <CenterAlignedColumnContainer style={{ marginTop: '20px' }}>
      <TextRadioButton onClick={onClick} selected={true} id={id}>
        <RadioButtonText selected={true}>
          <TextContainer>{display}</TextContainer>
        </RadioButtonText>
      </TextRadioButton>
    </CenterAlignedColumnContainer>
  );
};

export default AppStyleButton;
