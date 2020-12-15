import React from 'react';
import Loaders from 'components/Singularity/ApplicationView/Loaders';
import {
  MainContainer,
  QuoteText,
  LoginText
} from 'styles/Singularity/Style1.0/Loaders/index.js';

const AuthenticationLoader = () => {
  return (
    <MainContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeOut',
        duration: 0.8
      }}
      exit={{ opacity: 0 }}
    >
      <LoginText>Logging you in..</LoginText>
      <Loaders />
      <QuoteText>
        "All you need is love. But a little chocolate now and then doesn't
        hurt."
      </QuoteText>
    </MainContainer>
  );
};

export default AuthenticationLoader;
