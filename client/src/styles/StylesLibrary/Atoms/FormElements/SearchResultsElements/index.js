import styled from 'styled-components';

import { colorPalette } from 'styles/StylesLibrary/ElementalStyles/ColorPalette';
import { fontStyles } from 'styles/StylesLibrary/ElementalStyles/FontStyles';

import { filterStyles } from 'styles/StylesLibrary/ElementalStyles/FilterStyles/index.js';

import {
  LeftAlignedColumnContainer,
  CenterAlignedColumnContainerWithShadowBackground
} from 'styles/StylesLibrary/ElementalStyles/PositionStyles/index.js';

const {
  searchResults: { searchResultTextFont }
} = fontStyles;

const {
  searchResults: { searchResultContainerBackgroundColor, searchResultColor }
} = colorPalette;

const {
  searchResults: { searchResultBoxShadow }
} = filterStyles;

export const SearchResultContiner = styled(LeftAlignedColumnContainer)`
  width: 90%;
  height: 2em;
  border-radius: 5px;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  padding-left: 0.5em;
  background: ${searchResultContainerBackgroundColor};
  box-shadow: ${searchResultBoxShadow};
`;

export const SearchResultText = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 13px;
  font-family: ${searchResultTextFont};
  color: ${searchResultColor};
`;

export const SearchResultsContainer = styled(
  CenterAlignedColumnContainerWithShadowBackground
)`
  width: 50%;
  margin-top: 0.4em;
  margin-bottom: 1em;
  padding: 1em;
`;
