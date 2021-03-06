import styled from 'styled-components';

import { colorPalette } from 'styles/StylesLibrary/ElementalStyles/ColorPalette/index.js';

import { filterStyles } from 'styles/StylesLibrary/ElementalStyles/FilterStyles/index.js';

import { fontStyles } from 'styles/StylesLibrary/ElementalStyles/FontStyles/index.js';

const {
  pageheading: { pageHeadingBackgroundColor, pageHeadingTextColor }
} = colorPalette;

const {
  pageheading: {
    pageHeadingShadowEffect,
    pageHeadingTextShadow,
    pageHeadingTextFilter
  }
} = filterStyles;

const {
  pageheading: { pageHeadingTextFont }
} = filterStyles;

export const PageHeadingsContainer = styled.div`
  width: 94%;
  display: grid;
  margin: 12px;
  grid-template-columns: 1fr 4fr 1fr;
  justify-items: center;
  align-items: center;
  background: ${({ theme: { colors } }) => colors.pageHeadingBackgroundColor};
  box-shadow: ${({ theme: { filters } }) => filters.frameShadowEffect};
  border: ${({ theme: { borders } }) => borders.pageContentContainerBorder};
  border-radius: 5px;
  background: url('https://res.cloudinary.com/antilibrary/image/upload/v1612561378/MattBackground_zcz2ma.jpg')
    repeat;
`;

export const PageHeadingText = styled.h1`
  margin: 0;
  padding: 0;
  margin-left: -20px;
  font-family: ${pageHeadingTextFont};
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 43px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.pageHeadingTextColor};
  text-shadow: ${({ theme: { filters } }) => filters.frameShadowEffect};
  filter: ${({ theme: { filters } }) => filters.pageHeadingTextFilter};
`;
