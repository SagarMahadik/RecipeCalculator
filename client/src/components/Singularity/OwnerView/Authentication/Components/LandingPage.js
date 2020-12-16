import React from 'react';
import Logo from 'components/Singularity/ApplicationView/Logo';
import Login from 'components/Singularity/OwnerView/Authentication/Components/Login.js';
import {
  BackgroundImage,
  LandingPageContainer,
  LogoContainer,
  LoginContainer
} from 'styles/Singularity/OwnerView/Authentication/index.js';

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <BackgroundImage src="https://res.cloudinary.com/antilibrary/image/upload/v1608114803/Piatto/rm-1_hrvxia.jpg" />
      <LogoContainer>
        <Logo height={150} width={150} />
      </LogoContainer>

      <LoginContainer>
        <Login />
      </LoginContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;