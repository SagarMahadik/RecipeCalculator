import styled from 'styled-components';
import { styles } from 'styles/Singularity/Style1.0/ApplicationStyles';

export const PartialWidthDivider = styled.line`
  width: 80%;
  border: 2px dashed ${styles.themecolor};
  transform: rotate(-0.22deg);
  color: ${styles.dividerLineColor};
  margin-top: 2em;
`;

export const FullWidthDivider = styled.div`
  width: 90%;
  border: 4px solid ${styles.themecolor};
  transform: rotate(-0.16deg);
  color: ${styles.dividerLineColor};
`;
