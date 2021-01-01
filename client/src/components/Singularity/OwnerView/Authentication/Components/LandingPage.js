import React from 'react';
import Logo from 'components/Singularity/ApplicationView/Logo';

import {
  BackgroundImage,
  LandingPageContainer,
  LogoContainer,
  LoginContainer
} from 'styles/Singularity/OwnerView/Authentication/index.js';
import LoginMainComponent from './LoginMainComponent';

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <BackgroundImage src="https://res.cloudinary.com/antilibrary/image/upload/v1608114803/Piatto/rm-1_hrvxia.jpg" />

      <LoginContainer>
        <LoginMainComponent />
      </LoginContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
