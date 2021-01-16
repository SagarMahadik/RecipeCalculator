import React from 'react';

import {
  SearchResultContainer,
  SearchResultText,
  SearchBrandName,
  SearchPrice,
  SearchBaseUnitRate,
  BrandPriceContainer
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';

const SearchResultsContainer = ({
  onClick,
  index,
  itemName,
  brandName,
  itemRate,
  itemBaseQuantity,
  itemBaseUnit
}) => {
  return (
    <SearchResultContainer onClick={() => onClick()} key={index}>
      <SearchResultText>{itemName}</SearchResultText>
      <BrandPriceContainer>
        <SearchBrandName>{brandName} </SearchBrandName>
        <SearchPrice>{itemRate}</SearchPrice>
        <SearchBaseUnitRate>
          /{itemBaseQuantity}
          {itemBaseUnit}
        </SearchBaseUnitRate>
      </BrandPriceContainer>
    </SearchResultContainer>
  );
};

export default SearchResultsContainer;
