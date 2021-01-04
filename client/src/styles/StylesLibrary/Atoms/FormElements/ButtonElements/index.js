import styled from 'styled-components';

import { colorPalette } from 'styles/StylesLibrary/ElementalStyles/ColorPalette';
import { filterStyles } from 'styles/StylesLibrary/ElementalStyles/FilterStyles';
import { fontStyles } from 'styles/StylesLibrary/ElementalStyles/FontStyles';

const { inputButtonLabelTextSize, inputButtonLabelTextFont } = fontStyles;

const {
  inputButtonBackground,
  inputButtonBorderBackground,
  InputButtonLabelBackgound
} = colorPalette;

const { inputButtonShadow } = filterStyles;

export const InputBorder = styled.div`
  background: ${inputButtonBorderBackground};
  padding: 1.75px;
  border-radius: 25px;
  height: 45px;
`;

export const InputButton = styled.div`
  background: ${inputButtonBackground};
  box-shadow: ${inputButtonShadow};
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45px;
  z-index: 1;
`;

export const InputButtonLabel = styled.h1`
  background: ${InputButtonLabelBackgound};
  font-family: ${inputButtonLabelTextFont};
  font-style: normal;
  font-weight: bold;
  font-size: ${inputButtonLabelTextSize};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  padding: 0;
  padding-right: 12px;
  padding-left: 12px;
`;
