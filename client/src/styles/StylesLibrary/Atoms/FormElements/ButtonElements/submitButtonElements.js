import styled from 'styled-components';

import { colorPalette } from 'styles/StylesLibrary/ElementalStyles/ColorPalette';
import { fontStyles } from 'styles/StylesLibrary/ElementalStyles/FontStyles';

const { inputButtonLabelTextFont, submitButtonLabelTextSize } = fontStyles;

const {
  submitButtonLabelTextColor,
  submitButtonBorderColor,
  submitColorBackgroundColor
} = colorPalette;

export const SubmitButtonStyle = styled.div`
  height: 56px;
  background: ${submitColorBackgroundColor};
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 16px 5px rgba(0, 0, 0, 0.75),
    -3px -2px 16px 4px rgba(255, 255, 255, 0.75);
`;

export const SubmitButtonBorder = styled.div`
  height: 56px;
  padding: 3px;
  margin: 1.4em;
  background: ${submitButtonBorderColor};
  border-radius: 25px;
  z-index: 1;
`;

export const SubmitButtonLabel = styled.h1`
  background: ${submitButtonLabelTextColor};
  font-family: ${inputButtonLabelTextFont};
  font-style: normal;
  font-size: ${submitButtonLabelTextSize};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  padding: 0;
  padding-right: 12px;
  padding-left: 12px;
`;
