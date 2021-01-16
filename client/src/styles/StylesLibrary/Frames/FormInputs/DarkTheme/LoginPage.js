import React, { useEffect, useRef } from 'react';

import {
  LoginPageContainer,
  CenterAlignedColumnContainerWOShadowBackground
} from 'styles/StylesLibrary/ElementalStyles/PositionStyles/index.js';

import {
  QuoteContainer,
  CenterAlignedColumnContainer
} from 'styles/StylesLibrary/ElementalStyles/PositionStyles/index.js';

import {
  BrandTagline,
  Quote,
  Author
} from 'styles/StylesLibrary/Atoms/LandingPageElements/Login.js';

import InputTextBox from 'styles/StylesLibrary/Molecules/DarkTheme/FormMolecules/InputMolecules/InputTextBox.js';

import LogoTagLine from 'styles/StylesLibrary/Molecules/DarkTheme/LandingPage/LogoTagLine.js';

import animation from 'styles/StylesLibrary/ElementalStyles/Animations/GSAPanimations/index.js';

const LoginPage = () => {
  const quoteContainerRef = useRef(null);

  const { slideUp } = animation;

  useEffect(() => {
    slideUp(quoteContainerRef.current);
  }, []);
  return (
    <CenterAlignedColumnContainerWOShadowBackground>
      <LoginPageContainer>
        <LogoTagLine />
        <CenterAlignedColumnContainer marginTop={'1.5em'}>
          <InputTextBox />
          <InputTextBox />
        </CenterAlignedColumnContainer>

        <QuoteContainer ref={quoteContainerRef}>
          <Quote>I'm not a vegetarian, I'm a dessertarian!</Quote>
          <Author>Bill Waterson</Author>
        </QuoteContainer>
      </LoginPageContainer>
    </CenterAlignedColumnContainerWOShadowBackground>
  );
};

export default LoginPage;
