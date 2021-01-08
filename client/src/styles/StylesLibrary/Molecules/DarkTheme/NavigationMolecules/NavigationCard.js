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

const NavigationCard = ({ module }) => {
  return (
    <CenterAlignedColumnContainer>
      <DashboardNavigationCardContainer>
        <DashboardNavigationCardBorder>
          <DashboardNavigationCard moduleName={module}>
            <DashboardNavigationCardText moduleName={module}>
              Raw Material
            </DashboardNavigationCardText>
          </DashboardNavigationCard>
        </DashboardNavigationCardBorder>
      </DashboardNavigationCardContainer>
    </CenterAlignedColumnContainer>
  );
};

export default NavigationCard;
