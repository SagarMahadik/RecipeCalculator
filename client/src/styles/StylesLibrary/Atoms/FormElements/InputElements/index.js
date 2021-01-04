import styled from 'styled-components';

import { colorPalette } from 'styles/StylesLibrary/ElementalStyles/ColorPalette';
import { filterStyles } from 'styles/StylesLibrary/ElementalStyles/FilterStyles';
import { borderStyles } from 'styles/StylesLibrary/ElementalStyles/BorderStyles';
import { fontStyles } from 'styles/StylesLibrary/ElementalStyles/FontStyles';

const {
  inputTextBoxTextFont,
  inputTextBoxTextWeight,
  inputTextBoxTextSize,
  inputTextBoxLabelFont,
  inputTextBoxLabelTextSize,
  inputTextBoxSelectedLabelTextSize,
  inputButtonLabelTextSize,
  inputButtonLabelTextFont
} = fontStyles;

const {
  textBoxBackgroundColor,
  textBoxTextColor,
  labelTextColor,
  inputButtonBackground,
  inputButtonBorderBackground,
  InputButtonLabelBackgound,
  inputButtonShadowColor
} = colorPalette;

const { textBoxShadowEffect, inputButtonShadow } = filterStyles;

const { inputTextBoxBorder } = borderStyles;

export const TextBox = styled.input.attrs({
  type: 'text'
})`
  width: 53.3%;
  height: 35px;
  text-indent: 5px;
  font-family: ${inputTextBoxTextFont};
  font-size: ${inputTextBoxTextSize};
  font-weight: ${inputTextBoxTextWeight};
  color: ${textBoxTextColor};
  background-color: ${textBoxBackgroundColor};
  box-shadow: ${textBoxShadowEffect};
  border: ${inputTextBoxBorder};
  border-radius: 12px;
  &:focus {
    outline: none;
  }
`;

export const TextBoxLabel = styled.label`
  font-family: ${inputTextBoxLabelFont};
  font-size: ${inputTextBoxLabelTextSize};
  color: ${labelTextColor};
`;

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
