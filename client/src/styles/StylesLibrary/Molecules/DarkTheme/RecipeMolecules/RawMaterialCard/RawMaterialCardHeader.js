import React from 'react';
import {
  RawMaterialCardHeaderContainer,
  RawMaterialHeaderText
} from 'styles/StylesLibrary/Atoms/RecipeElemets/RawMaterialCard.js';

const RawMaterialCardHeader = () => {
  return (
    <RawMaterialCardHeaderContainer>
      <RawMaterialHeaderText>Raw Material</RawMaterialHeaderText>
      <RawMaterialHeaderText>Quantity</RawMaterialHeaderText>
      <RawMaterialHeaderText>Price</RawMaterialHeaderText>
    </RawMaterialCardHeaderContainer>
  );
};

export default RawMaterialCardHeader;
