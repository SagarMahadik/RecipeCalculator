import styled from 'styled-components';

import { colorPalette } from 'styles/StylesLibrary/ElementalStyles/ColorPalette';

import { filterStyles } from 'styles/StylesLibrary/ElementalStyles/FilterStyles';

const { frameShadowEffect } = filterStyles;
const { pageBackgroundColor } = colorPalette;

export const CenterAlignedColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: ${pageBackgroundColor};
  box-shadow: ${frameShadowEffect};
  border-radius: 5px;
`;
