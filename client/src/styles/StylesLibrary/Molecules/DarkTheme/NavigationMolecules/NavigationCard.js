import React from 'react';

import {
  CenterAlignedColumnContainerWithShadowBackground,
  CenterAlignedColumnContainer
} from 'styles/StylesLibrary/ElementalStyles/PositionStyles/index.js';

import {
  DashboardNavigationCard,
  DashboardNavigationCardText,
  DashboardNavigationCardContainer,
  DashboardNavigationCardBorder
} from 'styles/StylesLibrary/Atoms/NavigationCardElements/NavigationCards/index.js';

const NavigationCard = () => {
  return (
    <CenterAlignedColumnContainer>
      <DashboardNavigationCardContainer>
        <DashboardNavigationCardBorder>
          <DashboardNavigationCard>
            <DashboardNavigationCardText>
              Raw Material
            </DashboardNavigationCardText>
          </DashboardNavigationCard>
        </DashboardNavigationCardBorder>
      </DashboardNavigationCardContainer>
    </CenterAlignedColumnContainer>
  );
};

export default NavigationCard;
