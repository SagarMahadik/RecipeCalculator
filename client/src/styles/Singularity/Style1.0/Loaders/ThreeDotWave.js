import { motion } from 'framer-motion';
import styled from 'styled-components';
import { CenterAlignedColumnContainer } from '../ContainerStyles/index';

export const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2
    }
  },
  end: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const loadingCircleVariants = {
  start: {
    y: '150%'
  },
  end: {
    y: '50%'
  }
};

export const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut'
};

export const LoadingCircle = styled(motion.span)`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin: 5px;
  display: block;
  background: #514e4e;
  box-shadow: -2px -2px 8px 2px rgba(255, 255, 255, 0.25),
    0px 6px 8px 2px rgba(0, 0, 0, 0.5);
`;

export const LoadingCircleContainer = styled(motion.div)`
  width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: 'space-around';
  margin-top: -10px;
`;

export const MainContainer = styled(CenterAlignedColumnContainer)`
  margin-top: -10px;
  width: 100%;
  height: 24px;
`;
