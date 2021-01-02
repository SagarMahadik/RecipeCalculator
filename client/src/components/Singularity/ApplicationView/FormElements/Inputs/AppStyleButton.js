import React from 'react';
import {
  RadioButtonText,
  TextContainer
} from 'styles/Singularity/Style1.0/TextStyles';
import { TextRadioButton } from 'styles/Singularity/Style1.0/FormInputStyles';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';

import ThreeDotWave from 'components/Singularity/ApplicationView/Loaders/ThreeDotsWave.js';

const AppStyleButton = ({ onClick, display, id, loading }) => {
  return (
    <CenterAlignedColumnContainer style={{ marginTop: '20px' }}>
      <TextRadioButton
        onClick={onClick}
        selected={true}
        id={id}
        style={{ width: '200px', height: '50px' }}
      >
        <RadioButtonText selected={true}>
          {loading ? (
            <ThreeDotWave />
          ) : (
            <TextContainer>{display}</TextContainer>
          )}
        </RadioButtonText>
      </TextRadioButton>
    </CenterAlignedColumnContainer>
  );
};

export default AppStyleButton;
