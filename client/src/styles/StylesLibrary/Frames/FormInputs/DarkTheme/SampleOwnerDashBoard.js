import React from 'react';

import NavigationCard from 'styles/StylesLibrary/Molecules/DarkTheme/NavigationMolecules/NavigationCard.js';
import PageHeading from 'styles/StylesLibrary/Molecules/DarkTheme/PageHeadingMolecule/index.js';

import {
  PageContentContainer,
  CenterAlignedColumnContainerWOShadowBackground
} from 'styles/StylesLibrary/ElementalStyles/PositionStyles/index.js';

const SampleOwnerDashBoard = () => {
  return (
    <CenterAlignedColumnContainerWOShadowBackground>
      <PageHeading />
      <PageContentContainer>
        <NavigationCard />
        <NavigationCard />
        <NavigationCard />
        <NavigationCard />
      </PageContentContainer>
    </CenterAlignedColumnContainerWOShadowBackground>
  );
};

export default SampleOwnerDashBoard;
