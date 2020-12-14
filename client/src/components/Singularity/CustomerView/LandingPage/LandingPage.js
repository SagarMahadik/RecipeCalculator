import React from 'react';

import {
  Background,
  LandingPageContainer,
  LandingPageContentContainer,
  ContentContainer,
  Content,
  Button,
  Quote,
  AuthorName
} from 'styles/Singularity/CustomerView/LandingPage';

import Logo from 'components/Singularity/ApplicationView/Logo.js';

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Background />
      <LandingPageContentContainer>
        <ContentContainer>
          <Logo />
          <Content>Premium handcrafted delicacies</Content>
          <Button>Lets go!</Button>
          <Quote>I'm not a vegetarian, I'm a dessertarian</Quote>
          <AuthorName>Bill Waterson</AuthorName>
        </ContentContainer>
      </LandingPageContentContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
