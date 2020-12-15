import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const NavigationButton = styled(Link)`
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 200px;
  border-radius: 20px;
  margin-top: 30px;
  padding: 5px;
  background: ${props => props.backgroundcolor};
  color: white;
  text-decoration: none;
`;
