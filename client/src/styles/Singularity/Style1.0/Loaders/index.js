import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PTSansText } from 'styles/Singularity/Style1.0/TextStyles';

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

export const QuoteText = styled(PTSansText)`
  font-size: 16px;
  color: white;
`;

export const QuoteContainer = styled(motion.div)`
  width: 88%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginText = styled(PTSansText)`
  font-size: 36px;
  background: none;
  padding: 10px;
  color: white;
`;
