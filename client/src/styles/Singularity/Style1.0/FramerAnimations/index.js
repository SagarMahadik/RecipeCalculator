import { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
};

export const listItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export const pageVariant = {
  in: { opacity: 1 },
  out: { opacity: 0 }
};

export const pageTransition = {
  duration: 1.5
};

export const PageAnimationContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  z-index: 0;
  background: none;
`;

export const StaggerAnimationParentContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  z-index: 0;
  background: none;
`;

export const StaggerAnimationChildContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  z-index: 0;
  background: none;
`;
