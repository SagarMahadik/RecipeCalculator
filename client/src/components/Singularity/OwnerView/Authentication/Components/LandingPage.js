import React from 'react';

import {
  LandingPageContainer,
  LoginContainer
} from 'styles/Singularity/OwnerView/Authentication/index.js';
import LoginMainComponent from './LoginMainComponent';
import {
  PageAnimationContainer,
  pageTransition,
  pageVariant
} from 'styles/Singularity/Style1.0/FramerAnimations';

import { MainContentContainer } from 'styles/Singularity/Style1.0/ContainerStyles/index.js';

import Quotes from 'components/Singularity/ApplicationView/Quotes/index.js';

const LandingPage = () => {
  return (
    <PageAnimationContainer
      initial="out"
      animate="in"
      exit="out"
      transition={pageTransition}
      variants={pageVariant}
    >
      <MainContentContainer style={{ marginTop: '15%' }}>
        <LoginContainer>
          <LoginMainComponent />
        </LoginContainer>
      </MainContentContainer>
      <Quotes />
    </PageAnimationContainer>
  );
};

export default LandingPage;
