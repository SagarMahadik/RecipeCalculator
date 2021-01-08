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

const setNavigationCardBackground = (moduleName, themeName) => {
  console.log(themeName, moduleName);
  if (themeName === 'white') {
    return '#e0e4e9';
  }
  if (themeName === 'dark') {
    switch (moduleName) {
      case 'rawMaterials':
        return 'linear-gradient(99.97deg, #1C815C 5.16%, rgba(28, 99, 73, 0) 136.74%)';
      case 'recipe':
        return 'linear-gradient(100.43deg, #4A48AA 5.51%, rgba(74, 72, 170, 0) 142.67%)';
      case 'suppliers':
        return 'linear-gradient(101.65deg, #B71D1D 2.22%, rgba(134, 39, 39, 0) 146.27%)';
      case 'quote':
        return 'linear-gradient(99.47deg, #0B9EA8 1.24%, rgba(37, 122, 128, 0) 163.38%)';
    }
  }
};

const setNavigationCardTextColor = (moduleName, themeName) => {
  console.log(themeName, moduleName);
  if (themeName === 'dark') {
    return '#9B740F';
  }
  if (themeName === 'white') {
    switch (moduleName) {
      case 'rawMaterials':
        return 'linear-gradient(278.38deg, #AB7070 30.83%, rgba(255, 0, 0, 0.37) 66.37%)';
      case 'recipe':
        return 'linear-gradient(278.38deg, #86AB70 30.83%, rgba(31, 210, 38, 0.74) 66.37%)';
      case 'suppliers':
        return ' linear-gradient(278.38deg, #5A9393 30.83%, #6BD5E3 66.37%)';
      case 'quote':
        return 'linear-gradient(278.38deg, #7072AB 30.83%, rgba(36, 0, 255, 0.37) 66.37%)';
    }
  }
};

export const DashboardNavigationCard = styled.div`
  width: 100%;
  height: 8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({
    moduleName,
    theme: {
      details: { themeName }
    }
  }) => setNavigationCardBackground(moduleName, themeName)};

  border-radius: 20px;
`;

export const DashboardNavigationCardBorder = styled.div`
  width: 86%;
  height: 7em;
  padding: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme: { colors } }) => colors.navigationCardBorderColor};
  box-shadow: ${({ theme: { filters } }) => filters.navigationCardBoxShadow};
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
  background: ${({
    moduleName,
    theme: {
      details: { themeName }
    }
  }) => setNavigationCardTextColor(moduleName, themeName)};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  margin: 0;
  padding: 0;
  text-shadow: ${({ theme: { filters } }) => filters.navigationCardTextShadow};
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
