import React from 'react';

import {
  loadingContainerVariants,
  loadingCircleVariants,
  loadingCircleTransition,
  LoadingCircle,
  LoadingCircleContainer,
  MainContainer
} from 'styles/Singularity/Style1.0/Loaders/ThreeDotWave.js';

const ThreeDotsWave = () => {
  return (
    <MainContainer>
      <LoadingCircleContainer
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <LoadingCircle
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <LoadingCircle
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <LoadingCircle
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </LoadingCircleContainer>
    </MainContainer>
  );
};

export default ThreeDotsWave;
