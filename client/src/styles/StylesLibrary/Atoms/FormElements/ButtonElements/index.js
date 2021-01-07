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
  background: ${props =>
    props.selected
      ? `${inputButtonSelectedBorderBackground}`
      : `${inputButtonBorderBackground}`};
`;

export const InputButtonStyle = styled.div`
  height: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background: ${props =>
    props.selected
      ? `${inputButtonSelectedBackground}`
      : `${inputButtonBackground}`};
  box-shadow: ${props => (props.selected ? 'none' : ` ${inputButtonShadow}`)};
`;

export const InputButtonLabel = styled.h1`
  margin: 0;
  padding: 0;
  padding-right: 12px;
  padding-left: 12px;
  background: ${props =>
    props.selected
      ? `${inputButtonSelectedLabelTextColor}`
      : `${InputButtonLabelBackgound}`};
  font-family: ${inputButtonLabelTextFont};
  font-size: ${inputButtonLabelTextSize};
  font-style: normal;
  font-weight: bold;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
