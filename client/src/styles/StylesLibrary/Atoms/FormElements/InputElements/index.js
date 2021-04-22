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
  inputTextBoxSelectedLabelTextSize
} = fontStyles;

const {
  textBoxBackgroundColor,
  textBoxTextColor,
  labelTextColor
} = colorPalette;

const { textBoxShadowEffect } = filterStyles;

const { inputTextBoxBorder } = borderStyles;

export const TextBox = styled.input`
  width: 100%;
  height: 2.5em;
  text-indent: 5px;
  font-family: ${inputTextBoxTextFont};
  font-size: ${inputTextBoxTextSize};
  font-weight: ${inputTextBoxTextWeight};
  color: ${({ theme: { colors } }) => colors.textBoxTextColor};
  background: ${({ theme: { colors } }) => colors.textBoxBackgroundColor};
  box-shadow: ${({ theme: { filters } }) => filters.textBoxShadowEffect};
  border: ${({ theme: { borders } }) => borders.inputTextBoxBorder};
  margin-top: ${props => props.marginTop || '1.5em'};
  box-sizing: border-box;
  text-indent: 5px;
  border-radius: 25px;
  display: flex;
  &:focus {
    outline: none;
    text-indent: 8px;
  }
`;

export const TextBoxLabel = styled.label`
  position: absolute;
  top: 2.3em;
  left: 1em;
  font-family: ${inputTextBoxLabelFont};
  font-size: ${inputTextBoxLabelTextSize};
  color: ${({ theme: { colors } }) => colors.labelTextColor};
  transition: 0.6s;
  pointer-events: none;
  ${TextBox}:focus ~ &,
  ${TextBox}:not(:placeholder-shown) ~ & {
    top: 0;
    left: 0;
    color: ${({ theme: { colors } }) => colors.labelTextColor};
    font-size: ${inputTextBoxSelectedLabelTextSize};
    padding-left: 12px;
  }
`;

export const InputTextBoxWrapper = styled.div`
  position: relative;
  width: 60%;
  margin-bottom: 1em;
  margin-top: 1em;
`;
