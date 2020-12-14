import React, { useContext, useRef } from 'react';
import { RecipeManagementContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import {
  SearchResultContainer,
  SearchResultText,
  SearchBrandName,
  SearchPrice,
  SearchBaseUnitRate,
  BrandPriceContainer,
  AnimationContainer
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';

import recipeManagementContext from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
import {
  SearchInputWrapper,
  SearchBox,
  SearchBoxLabel
} from 'styles/Singularity/Style1.0/FormInputStyles';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

const SearchBoxResults = props => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    handleSearchText,
    searchString,
    searchResults,
    handleSearchItemClick,
    rawMaterials
  } = RecipeManagementContext;

  const searchResultRefs = useRef([]);
  searchResultRefs.current = [];

  const addToRefs = el => {
    if (el && !searchResultRefs.current.includes(el)) {
      searchResultRefs.current.push(el);
    }
  };

  if (rawMaterials.length === 0) {
    return null;
  }

  return (
    <AnimationContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <RecipeManagementContainer>
        <SearchInputWrapper>
          <SearchBox
            placeholder=" "
            value={searchString}
            onChange={handleSearchText}
          />
          <SearchBoxLabel>Search the above selected item</SearchBoxLabel>
        </SearchInputWrapper>
        {searchResults.map((result, index) => {
          return (
            <SearchResultContainer
              onClick={() =>
                handleSearchItemClick(
                  result,
                  props.arrayIndex,
                  props.basicRecipeID
                )
              }
              key={index}
              ref={addToRefs}
            >
              <SearchResultText>{result.name}</SearchResultText>
              <BrandPriceContainer>
                <SearchBrandName>{result.brandName} </SearchBrandName>
                <SearchPrice>{result.rate}</SearchPrice>
                <SearchBaseUnitRate>
                  /{result.baseQuantity}
                  {result.baseUnit}
                </SearchBaseUnitRate>
              </BrandPriceContainer>
            </SearchResultContainer>
          );
        })}

        <PartialWidthDivider />
      </RecipeManagementContainer>
    </AnimationContainer>
  );
};

export default SearchBoxResults;
