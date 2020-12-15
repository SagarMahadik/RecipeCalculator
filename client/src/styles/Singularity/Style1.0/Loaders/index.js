import styled from 'styled-components';
import { styles } from 'styles/Singularity/Style1.0/ApplicationStyles';
import { motion } from 'framer-motion';
import { RobotoText } from 'styles/Singularity/Style1.0/TextStyles';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles/index.js';

export const MainContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
  z-index: -1;
`;

export const QuoteText = styled(RobotoText)`
  font-size: 18px;
  color: white;
`;

export const QuoteContainer = styled(CenterAlignedColumnContainer)`
  width: 80%;
  padding: 10px;
  background: none;
`;

export const LoginText = styled(RobotoText)`
  font-size: 36px;
  background: none;
  padding: 10px;
  color: white;
`;
