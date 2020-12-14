import styled from 'styled-components';

import { styles } from '../ApplicationStyles';

export const SubmitButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 60px;
  border-radius: 50px;
  margin-top: 40px;
  background: ${styles.buttonBackgroundGradient};
`;
