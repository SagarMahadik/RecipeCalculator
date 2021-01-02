import React from 'react';

import { SubmitButton } from 'styles/Singularity/Style1.0/ButtonStyles/index.js';
import { ButtonText } from 'styles/Singularity/Style1.0/TextStyles/index.js';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import ThreeDotWave from 'components/Singularity/ApplicationView/Loaders/ThreeDotsWave.js';

const StyledSubmitButton = ({ text, onClick, loading }) => {
  return (
    <CenterAlignedColumnContainer>
      <SubmitButton onClick={onClick}>
        {loading ? <ThreeDotWave /> : <ButtonText>{text}</ButtonText>}
      </SubmitButton>
    </CenterAlignedColumnContainer>
  );
};

export default StyledSubmitButton;
