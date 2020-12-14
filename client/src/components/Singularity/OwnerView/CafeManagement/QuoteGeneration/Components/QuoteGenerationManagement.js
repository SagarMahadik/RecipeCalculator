import React from 'react';
import quoteGenerationContext from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/State/quoteGenerationContext.js';
import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import { QuoteManagementContainer } from 'styles/Singularity/OwnerView/CafeManagement/QuoteGeneration/index.js';
import QuoteGenerationDetails from './QuoteGenerationDetails';
import SearchRecipes from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/Components/SearchRecipes.js';
import QuoteProduct from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/Components/QuoteProduct/QuoteProduct.js';
import QuoteTotalCost from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/Components/QuoteTotalCost.js';
import QuoteProductPricing from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/Components/QuoteProductPricing.js';
const QuoteGenerationManagement = () => {
  return (
    <>
      <FormHeadings heading="Generate Quote" />
      <QuoteGenerationDetails />
      <SearchRecipes />
      <QuoteProduct />
      <QuoteTotalCost />
      <QuoteProductPricing />
    </>
  );
};

export default QuoteGenerationManagement;
