import React from 'react';
import QuoteGenerationManagement from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/Components/QuoteGenerationManagement.js';
import QuoteGenerationState from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/State/QuoteGenerationState.js';

const QuoteGenerationMainComponent = () => {
  return (
    <QuoteGenerationState>
      <QuoteGenerationManagement />
    </QuoteGenerationState>
  );
};

export default QuoteGenerationMainComponent;
