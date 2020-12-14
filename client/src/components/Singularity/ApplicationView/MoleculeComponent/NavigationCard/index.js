import React from 'react';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles/index.js';
import { NavigationButtonText } from 'styles/Singularity/Style1.0/TextStyles';
import { NavigationButton } from 'styles/Singularity/Style1.0/ButtonStyles';
const NavigationCard = ({ backgroundColor, component, route }) => {
  return (
    <CenterAlignedColumnContainer>
      <NavigationButton to={`/${route}`} backgroundColor={backgroundColor}>
        <NavigationButtonText>{component}</NavigationButtonText>
      </NavigationButton>
    </CenterAlignedColumnContainer>
  );
};

export default NavigationCard;
