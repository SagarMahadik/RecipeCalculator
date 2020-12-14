import styled from 'styled-components';
import { styles } from 'styles/Singularity/Style1.0/ApplicationStyles';
import { motion } from 'framer-motion';
import { RobotoText } from 'styles/Singularity/Style1.0/TextStyles';

export const MainContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  background-image: ${props =>
    props.completed
      ? 'linear-gradient(315deg, #4dccc6 0%, #96e4df 74%)'
      : 'linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%)'};
  z-index: -1;
`;

export const LoadingTextContiner = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 30px;
  width: 100%;
`;

export const DoneTextContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 30px;
  width: 100%;
`;

export const LoadingText = styled(RobotoText)`
  font-size: 60px;
  text-align: center;
  color: #ffffff;
`;

export const BallContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 150px;
  height: 200vh;
`;

export const Ball = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #c70039;
  background: ${styles.formContentColor};
`;

export const Shadow = styled.div`
  width: 60px;
  height: 30px;
  background: radial-gradient(
    ellipse at center,
    rgba(88, 24, 69, 1) 0%,
    rgba(237, 237, 237, 0) 50%
  );
  position: relative;
  z-index: -1;
  transform: translateY(75px);
  opacity: 0.1;
`;

export const Wall = styled.img`
  width: 100%;
  height: 400px;
  margin-top: 100px;
`;

export const DoneText = styled(RobotoText)`
  font-size: 60px;
  text-align: center;
  color: #ffffff;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 200px;
`;
