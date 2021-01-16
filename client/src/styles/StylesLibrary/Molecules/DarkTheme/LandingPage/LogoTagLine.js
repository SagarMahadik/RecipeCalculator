import React, { useEffect, useRef } from 'react';

import { LogoTagLineContainer } from 'styles/StylesLibrary/ElementalStyles/PositionStyles/index.js';

import { BrandTagline } from 'styles/StylesLibrary/Atoms/LandingPageElements/Login.js';

import Logo from 'styles/StylesLibrary/Icons/Logo.js';

import animation from 'styles/StylesLibrary/ElementalStyles/Animations/GSAPanimations/index.js';

const LogoTagLine = () => {
  const logoRef = useRef(null);
  const tagLineRef = useRef(null);

  const { verticalBounce, fadeIn } = animation;

  useEffect(() => {
    verticalBounce(logoRef.current);
    fadeIn(tagLineRef.current);
  }, []);
  return (
    <LogoTagLineContainer>
      <Logo ref={logoRef} />
      <BrandTagline ref={tagLineRef} style={{ visibility: 'hidden' }}>
        Cafe Pandu
      </BrandTagline>
    </LogoTagLineContainer>
  );
};

export default LogoTagLine;
