import React, { useContext } from 'react';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

import quoteGenerationContext from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/State/quoteGenerationContext.js';
import {
  QuoteManagementContainer,
  TotalQuoteCost,
  TotalCostContainer
} from 'styles/Singularity/OwnerView/CafeManagement/QuoteGeneration';

const QuoteTotalCost = () => {
  const QuoteGenerationContext = useContext(quoteGenerationContext);

  const { totalQuoteCost } = QuoteGenerationContext;
  return (
    <>
      <QuoteManagementContainer>
        <PartialWidthDivider />
        <TotalCostContainer>
          <TotalQuoteCost>Total Cost :</TotalQuoteCost>
          <TotalQuoteCost>{totalQuoteCost}</TotalQuoteCost>
        </TotalCostContainer>

        <PartialWidthDivider />
      </QuoteManagementContainer>
    </>
  );
};

export default QuoteTotalCost;
