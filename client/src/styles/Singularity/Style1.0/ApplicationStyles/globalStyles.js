import { createGlobalStyle } from 'styled-components';
import { styles } from 'styles/Singularity/Style1.0/ApplicationStyles/index.js';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme: { colors } }) => colors.pageBackgroundColor};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
