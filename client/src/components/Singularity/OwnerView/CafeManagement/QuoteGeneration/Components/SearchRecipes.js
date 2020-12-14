import React, { useContext } from 'react';
import { QuoteManagementContainer } from 'styles/Singularity/OwnerView/CafeManagement/QuoteGeneration';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';
import FormSectionHeading from 'components/Singularity/ApplicationView/FormHeadings/FormSectionHading.js';
import {
  SearchResultText,
  SearchResultContainer
} from 'styles/Singularity/OwnerView/CafeManagement/RawMaterialManagement';
import quoteGenerationContext from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/State/quoteGenerationContext.js';
const SearchRecipes = () => {
  const QuoteGenerationContext = useContext(quoteGenerationContext);

  const {
    searchString,
    searchResults,
    handleSearchText,
    handleSearchClick
  } = QuoteGenerationContext;
  return (
    <QuoteManagementContainer>
      <FormSectionHeading sectionName="Search Product" />
      <StyledTextBoxLabel
        name={searchString}
        value={searchString}
        onChange={handleSearchText}
        text="Search Recipe"
      />
      {searchResults.map((result, index) => {
        return (
          <SearchResultContainer onClick={() => handleSearchClick(result)}>
            <SearchResultText>{result.name}</SearchResultText>
          </SearchResultContainer>
        );
      })}
    </QuoteManagementContainer>
  );
};

export default SearchRecipes;
