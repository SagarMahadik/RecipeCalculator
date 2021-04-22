import { filter } from 'lodash';
import styled from 'styled-components';

import { colorPalette } from 'styles/StylesLibrary/ElementalStyles/ColorPalette';
import { filterStyles } from 'styles/StylesLibrary/ElementalStyles/FilterStyles';
import { fontStyles } from 'styles/StylesLibrary/ElementalStyles/FontStyles';

const { inputButtonLabelTextSize, inputButtonLabelTextFont } = fontStyles;

const {
  inputButton: {
    inputButtonBackground,
    inputButtonBorderBackground,
    InputButtonLabelBackgound,
    inputButtonSelectedBackground,
    inputButtonSelectedBorderBackground,
    inputButtonSelectedLabelTextColor
  }
} = colorPalette;

const { inputButtonShadow } = filterStyles;

export const InputBorder = styled.div`
  height: 45px;
  margin: 4px;
  padding: 1.75px;
  border-radius: 25px;

  background: ${({ selected, theme: { colors } }) =>
    selected
      ? `${colors.inputButtonSelectedBorderBackground}`
      : `${colors.inputButtonBorderBackground}`};
`;

export const InputButtonStyle = styled.div`
  height: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background: ${({ selected, theme: { colors } }) =>
    selected
      ? `${colors.inputButtonSelectedBackground}`
      : `${colors.inputButtonBackground}`};
  box-shadow: ${({ selected, theme: { filters } }) =>
    selected
      ? `${filters.inputButtonSelectedBoxShadow}`
      : ` ${filters.inputButtonBoxShadow}`};

  border: ${({ selected, theme: { borders } }) =>
    selected
      ? `${borders.inputButtonSelectedBorder}`
      : `${borders.inputButtonBorder}`};
`;

export const InputButtonLabel = styled.h1`
  margin: 0;
  padding: 0;
  padding-right: 12px;
  padding-left: 12px;
  background: ${({ selected, theme: { colors } }) =>
    selected
      ? `${colors.inputButtonSelectedLabelTextColor}`
      : `${colors.inputButtonLabelBackgound}`};
  font-family: ${inputButtonLabelTextFont};
  font-size: ${inputButtonLabelTextSize};
  font-style: normal;
  font-weight: bold;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
