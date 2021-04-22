import styled from 'styled-components';
import { fontStyles } from 'styles/StylesLibrary/ElementalStyles/FontStyles';
const { inputButtonLabelTextFont, submitButtonLabelTextSize } = fontStyles;

export const SubmitButtonStyle = styled.div`
  height: 56px;
  background: ${({ theme: { colors } }) => colors.submitButtonBackgroundColor};
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SubmitButtonBorder = styled.div`
  height: 56px;
  padding: 2px;
  margin: 1.4em;
  border-radius: 25px;
  z-index: 1;
  background: ${({ theme: { colors } }) => colors.submitButtonBorderColor};
  box-shadow: ${({ theme: { filters } }) => filters.submitButtonBoxShadow};
`;

export const SubmitButtonLabel = styled.h1`
  background: ${({ theme: { colors } }) => colors.submitButtonLabelTextColor};
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
