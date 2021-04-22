import styled from 'styled-components';

export const ResetButtonStyle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme: { colors } }) => colors.resetButtonBackgroundColor};
  border: ${({ theme: { borders } }) => borders.resetButtonBorder};
  box-shadow: ${({ theme: { filters } }) => filters.resetButtonBoxShadow};
  filter: ${({ theme: { filters } }) => filters.resetButtonDropShadow};
  border-radius: 25px;
`;

export const ResetButtonLabel = styled.h1`
  margin: 0;
  padding: 0;
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 13px;
  background: ${({ theme: { colors } }) => colors.resetButtonLabelColor};
  text-shadow: ${({ theme: { filters } }) =>
    filters.resetButtonLabelTextShadow};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
