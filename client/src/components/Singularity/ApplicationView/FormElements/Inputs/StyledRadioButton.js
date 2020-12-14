import React from 'react';
import {
  RadioButtonText,
  TextContainer
} from 'styles/Singularity/Style1.0/TextStyles';
import { TextRadioButton } from 'styles/Singularity/Style1.0/FormInputStyles';

const StyledRadioButton = props => {
  return (
    <>
      <TextRadioButton
        value={props.value}
        selected={props.selected}
        onClick={props.onClick}
      >
        <RadioButtonText selected={props.selected}>
          <TextContainer>{props.display}</TextContainer>
        </RadioButtonText>
      </TextRadioButton>
    </>
  );
};

export default StyledRadioButton;
