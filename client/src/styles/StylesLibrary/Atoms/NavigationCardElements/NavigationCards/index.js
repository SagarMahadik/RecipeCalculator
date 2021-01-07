import styled from 'styled-components';

import { CenterAlignedColumnContainerWithShadowBackground } from 'styles/StylesLibrary/ElementalStyles/PositionStyles/index.js';

import { colorPalette } from 'styles/StylesLibrary/ElementalStyles/ColorPalette/index.js';

import { filterStyles } from 'styles/StylesLibrary/ElementalStyles/FilterStyles/index.js';

import { fontStyles } from 'styles/StylesLibrary/ElementalStyles/FontStyles/index.js';

const {
  navigationCard: { navigationCardBorderColor, navigationCardTextColor }
} = colorPalette;

const {
  navigationCard: { navigationCardBoxShadow, navigationCardTextShadow }
} = filterStyles;

const {
  navigationCard: { navigationCardTextFont }
} = fontStyles;

export const DashboardNavigationCard = styled.div`
  width: 100%;
  height: 8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    99.97deg,
    #1c815c 5.16%,
    rgba(28, 99, 73, 0) 136.74%
  );
  box-shadow: ${navigationCardBoxShadow};
  border-radius: 20px;
`;

export const DashboardNavigationCardBorder = styled.div`
  width: 86%;
  height: 7em;
  padding: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${navigationCardBorderColor};
  border-radius: 20px;
`;

export const DashboardNavigationCardText = styled.h1`
  font-family: ${navigationCardTextFont};
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${navigationCardTextColor};
  margin: 0;
  padding: 0;
  text-shadow: ${navigationCardTextShadow};
`;

export const DashboardNavigationCardContainer = styled(
  CenterAlignedColumnContainerWithShadowBackground
)`
  width: 76%;
  padding: 1.2em;
  margin-left: 0.8em;
  margin-right: 0.8em;
  margin-top: 1em;
`;
