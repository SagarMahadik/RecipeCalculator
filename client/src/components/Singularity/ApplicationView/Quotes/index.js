import React, { useState } from 'react';
import { MainContentContainer } from 'styles/Singularity/Style1.0/ContainerStyles/index.js';
import { QuoteText } from 'styles/Singularity/Style1.0/Loaders/index.js';

import { RightAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles/index.js';
import { quotes, generateRandomInteger } from 'Utils/quotes';

import StyledRadioButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledRadioButton.js';

const Quotes = () => {
  const [index, setIndex] = useState(generateRandomInteger(1, 25));

  return (
    <MainContentContainer style={{ padding: '10px', height: '15%' }}>
      <QuoteText>"{quotes[index].quote}"</QuoteText>
      <RightAlignedColumnContainer style={{ marginTop: '10px' }}>
        <QuoteText>{quotes[index].author}</QuoteText>
      </RightAlignedColumnContainer>
      <StyledRadioButton
        display="Random"
        onClick={() => setIndex(generateRandomInteger(1, 25))}
      />
    </MainContentContainer>
  );
};

export default Quotes;
