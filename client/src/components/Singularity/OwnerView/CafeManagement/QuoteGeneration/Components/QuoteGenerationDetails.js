import React, { useContext } from 'react';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

import quoteGenerationContext from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/State/quoteGenerationContext.js';
import { QuoteManagementContainer } from 'styles/Singularity/OwnerView/CafeManagement/QuoteGeneration';
const QuoteGenerationDetails = () => {
  const QuoteGenerationContext = useContext(quoteGenerationContext);

  const { orderName, orderTag, handleChangeFor } = QuoteGenerationContext;

  return (
    <>
      <QuoteManagementContainer>
        <StyledTextBoxLabel
          name={orderName}
          value={orderName}
          onChange={handleChangeFor('orderName')}
          text="Order Name"
        />
        <StyledTextBoxLabel
          name={orderTag}
          value={orderTag}
          onChange={handleChangeFor('orderTag')}
          text="Tag Name"
        />
        <PartialWidthDivider />
      </QuoteManagementContainer>
    </>
  );
};

export default QuoteGenerationDetails;
