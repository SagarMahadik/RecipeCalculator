import React from 'react';
import Loaders from 'components/Singularity/ApplicationView/Loaders';
import {
  MainContainer,
  QuoteText,
  LoginText
} from 'styles/Singularity/Style1.0/Loaders/index.js';

import { quotes, generateRandomInteger } from 'Utils/quotes';

const AuthenticationLoader = () => {
  const index = generateRandomInteger(1, 29);

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
      <QuoteText>{quotes[index].quote}</QuoteText>
    </MainContainer>
  );
};

export default AuthenticationLoader;
