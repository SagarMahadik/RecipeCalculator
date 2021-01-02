import React from 'react';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles/index.js';
import { NavigationButtonText } from 'styles/Singularity/Style1.0/TextStyles';
import { NavigationButton } from 'styles/Singularity/Style1.0/ButtonStyles';
const NavigationCard = ({ backgroundcolor, component, route }) => {
  return (
    <NavigationButton to={`/${route}`} backgroundcolor={backgroundcolor}>
      <NavigationButtonText>{component}</NavigationButtonText>
    </NavigationButton>
  );
};

export default NavigationCard;
