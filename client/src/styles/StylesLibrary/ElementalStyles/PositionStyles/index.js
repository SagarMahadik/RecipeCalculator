import styled from 'styled-components/macro';

import { colorPalette } from 'styles/StylesLibrary/ElementalStyles/ColorPalette';

import { filterStyles } from 'styles/StylesLibrary/ElementalStyles/FilterStyles';

const { frameShadowEffect } = filterStyles;
const { pageBackgroundColor } = colorPalette;

export const RowContainer = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: auto;
  flex-wrap: wrap;
  align-items: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: auto;
  border-radius: 5px;
`;

export const CenterAlignedColumnContainer = styled(ColumnContainer)`
  align-items: center;
  justify-content: center;
`;

export const LeftAlignedColumnContainer = styled(ColumnContainer)`
  align-items: flex-start;
`;

export const PageContentContainer = styled(CenterAlignedColumnContainer)`
  width: 94%;
  margin: 12px;
  background-color: ${pageBackgroundColor};
  box-shadow: ${frameShadowEffect};
  padding-bottom: 2em;
`;

export const CenterAlignedColumnContainerWithShadowBackground = styled(
  CenterAlignedColumnContainer
)`
  background-color: ${pageBackgroundColor};
  box-shadow: ${frameShadowEffect};
  margin: auto;
`;

export const CenterAlignedColumnContainerWOShadowBackground = styled(
  CenterAlignedColumnContainer
)`
  background-color: 'none';
  box-shadow: 'none';
  margin: auto;
`;

export const FormOptionButtonContainer = styled(RowContainer)`
  width: 90%;
  justify-content: space-evenly;
  overflow-y: auto;
  @media (min-width: 765px) {
    width: 60%;
  }
`;

export const FormSectionHeadingContainer = styled(
  CenterAlignedColumnContainerWOShadowBackground
)`
  height: 54px;
  margin-bottom: 1em;
  margin-top: 1em;
`;

export const FormShortDividerContainer = styled(
  CenterAlignedColumnContainerWOShadowBackground
)`
  margin-top: 1.5em;
`;
