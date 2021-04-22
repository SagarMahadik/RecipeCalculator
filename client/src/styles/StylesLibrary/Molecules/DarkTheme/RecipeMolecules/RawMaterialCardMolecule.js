import React from 'react';
import {
  RawMaterialCardContainer,
  RawMaterialContainer,
  RawMaterialCardText,
  RawMaterialNameRateContainer,
  RawMaterialCardDivider,
  RawMaterialHeaderText,
  RawMaterialDeleteButton,
  TotalRawMaterialQtyCost
} from 'styles/StylesLibrary/Atoms/RecipeElemets/RawMaterialCard.js';

import RawMaterialCardHeader from 'styles/StylesLibrary/Molecules/DarkTheme/RecipeMolecules/RawMaterialCard/RawMaterialCardHeader.js';

import {
  RecipeCalculatorContainer,
  RecipeNameContainer,
  RecipeName,
  RecipeCalculatorDetailsContainer,
  RecipeCalculatorDetailContainer,
  RecipeDetailContentText
} from 'styles/StylesLibrary/Atoms/RecipeElemets/RecipeCalculator.js';

import {
  BasicRecipeInfoContainer,
  BasicRecipeName,
  BasicRecipeInfoDivider,
  BasicRecipeDetailsContainer,
  BasicRecipeQuantity,
  AddButton,
  DeleteButton,
  BasicRecipeHeaderContainer,
  IconButtonText
} from 'styles/StylesLibrary/Atoms/RecipeElemets/BasicRecipeHeader.js';

import {
  TotalCostQtyText,
  TotalCostQtyContainer
} from 'styles/StylesLibrary/Atoms/RecipeElemets/TotalRecipeCostQty.js';

import {
  ProductInfoContainer,
  ProductHeaderContainer,
  ProductName,
  ProductDetailsContainer,
  ProductUnit
} from 'styles/StylesLibrary/Atoms/RecipeElemets/ProductHeader.js';

import {
  QuoteCalculatorContainer,
  QuoteCalculatorHeader,
  QuoteCalculatorHeaderText,
  QuoteProductsContainer,
  QuoteProductContainer,
  QuoteProductNameContainer,
  QuoteProductNameText,
  QuoteProductUnitContainer,
  QuoteProductUnitText,
  QuoteProductCostContainer,
  QuoteProductCostText,
  QuoteTotalCostDetailsContainer,
  QuoteTotalCostLabelText,
  QuoteTotalCostContainer,
  QuoteTotalCostText
} from 'styles/StylesLibrary/Atoms/RecipeElemets/QuoteCalculator.js';

import { CenterAlignedColumnContainerWOShadowBackground } from 'styles/StylesLibrary/ElementalStyles/PositionStyles/index.js';

const RawMaterialCardMolecule = () => {
  return (
    <CenterAlignedColumnContainerWOShadowBackground>
      <RawMaterialCardContainer>
        <RawMaterialCardHeader />
        <RawMaterialCardDivider />
        <RawMaterialContainer isOdd={true}>
          <RawMaterialNameRateContainer>
            <RawMaterialCardText fontWeight={'bold'}>
              Egg White
            </RawMaterialCardText>
            <RawMaterialCardText>Rs.10/egg</RawMaterialCardText>
          </RawMaterialNameRateContainer>
          <RawMaterialCardText>120 gm</RawMaterialCardText>
          <RawMaterialCardText>20.00</RawMaterialCardText>
          <RawMaterialDeleteButton isOdd={true}>X</RawMaterialDeleteButton>
        </RawMaterialContainer>
        <RawMaterialContainer>
          <RawMaterialNameRateContainer>
            <RawMaterialCardText fontWeight={'bold'}>
              Egg White Egg White
            </RawMaterialCardText>
            <RawMaterialCardText>Rs.10/egg</RawMaterialCardText>
          </RawMaterialNameRateContainer>
          <RawMaterialCardText>120 gm</RawMaterialCardText>
          <RawMaterialCardText>20.00</RawMaterialCardText>
          <RawMaterialDeleteButton>X</RawMaterialDeleteButton>
        </RawMaterialContainer>
        <RawMaterialContainer isOdd={true}>
          <RawMaterialNameRateContainer>
            <RawMaterialCardText fontWeight={'bold'}>
              Egg White
            </RawMaterialCardText>
            <RawMaterialCardText>Rs.10/egg</RawMaterialCardText>
          </RawMaterialNameRateContainer>
          <RawMaterialCardText>120 gm</RawMaterialCardText>
          <RawMaterialCardText>20.00</RawMaterialCardText>
          <RawMaterialDeleteButton isOdd={true}>X</RawMaterialDeleteButton>
        </RawMaterialContainer>
        <RawMaterialCardDivider />
        <TotalRawMaterialQtyCost>
          <RawMaterialHeaderText>Total food cost</RawMaterialHeaderText>
          <RawMaterialHeaderText>1010 gm</RawMaterialHeaderText>
          <RawMaterialHeaderText>Rs.2020</RawMaterialHeaderText>
        </TotalRawMaterialQtyCost>
      </RawMaterialCardContainer>
      <RecipeCalculatorContainer>
        <RecipeNameContainer>
          <RecipeName>Macaron Shell</RecipeName>
        </RecipeNameContainer>
        <RecipeCalculatorDetailsContainer>
          <RecipeCalculatorDetailContainer>
            <RecipeDetailContentText>40</RecipeDetailContentText>
          </RecipeCalculatorDetailContainer>
          <RecipeCalculatorDetailContainer>
            <RecipeDetailContentText>Rs. 6.7/unit</RecipeDetailContentText>
          </RecipeCalculatorDetailContainer>
          <RecipeCalculatorDetailContainer>
            <RecipeDetailContentText>26gm/unit</RecipeDetailContentText>
          </RecipeCalculatorDetailContainer>
        </RecipeCalculatorDetailsContainer>
      </RecipeCalculatorContainer>

      <ProductInfoContainer>
        <ProductHeaderContainer>
          <AddButton style={{ opacity: '0' }}>+</AddButton>
          <ProductName>Macarons</ProductName>
          <DeleteButton>X</DeleteButton>
        </ProductHeaderContainer>
        <BasicRecipeInfoDivider />
        <ProductDetailsContainer>
          <ProductUnit style={{ justifySelf: 'start' }}>140gm</ProductUnit>
          <ProductName style={{ justifySelf: 'end', marginRight: '16px' }}>
            Rs.2700
          </ProductName>
        </ProductDetailsContainer>
      </ProductInfoContainer>

      <BasicRecipeInfoContainer>
        <BasicRecipeHeaderContainer>
          <AddButton>
            <IconButtonText>+</IconButtonText>
          </AddButton>
          <BasicRecipeName>Sponge</BasicRecipeName>
          <DeleteButton>
            <IconButtonText rotate={true}>+</IconButtonText>
          </DeleteButton>
        </BasicRecipeHeaderContainer>
        <BasicRecipeInfoDivider />
        <BasicRecipeDetailsContainer>
          <BasicRecipeQuantity>140 gm</BasicRecipeQuantity>
          <BasicRecipeName>1 unit</BasicRecipeName>
          <BasicRecipeName>Rs. 2000</BasicRecipeName>
        </BasicRecipeDetailsContainer>
      </BasicRecipeInfoContainer>
      <TotalCostQtyContainer>
        <TotalCostQtyText>Total food cost</TotalCostQtyText>
        <TotalCostQtyText>1010 gm</TotalCostQtyText>
        <TotalCostQtyText>Rs. 2020</TotalCostQtyText>
      </TotalCostQtyContainer>

      <QuoteCalculatorContainer>
        <QuoteCalculatorHeader>
          <QuoteCalculatorHeaderText>Product</QuoteCalculatorHeaderText>
          <QuoteCalculatorHeaderText>Units</QuoteCalculatorHeaderText>
          <QuoteCalculatorHeaderText>cost</QuoteCalculatorHeaderText>
        </QuoteCalculatorHeader>
        <QuoteProductsContainer>
          <QuoteProductContainer>
            <QuoteProductNameContainer>
              <QuoteProductNameText>cake</QuoteProductNameText>
            </QuoteProductNameContainer>
            <QuoteProductUnitContainer>
              <QuoteProductUnitText>123</QuoteProductUnitText>
            </QuoteProductUnitContainer>
            <QuoteProductCostContainer>
              <QuoteProductCostText>123</QuoteProductCostText>
            </QuoteProductCostContainer>
          </QuoteProductContainer>
          <QuoteProductContainer>
            <QuoteProductNameContainer>
              <QuoteProductNameText>Macarons</QuoteProductNameText>
            </QuoteProductNameContainer>
            <QuoteProductUnitContainer>
              <QuoteProductUnitText>123</QuoteProductUnitText>
            </QuoteProductUnitContainer>
            <QuoteProductCostContainer>
              <QuoteProductCostText>123</QuoteProductCostText>
            </QuoteProductCostContainer>
          </QuoteProductContainer>
          <QuoteProductContainer>
            <QuoteProductNameContainer>
              <QuoteProductNameText>Cup Cakes</QuoteProductNameText>
            </QuoteProductNameContainer>
            <QuoteProductUnitContainer>
              <QuoteProductUnitText>123</QuoteProductUnitText>
            </QuoteProductUnitContainer>
            <QuoteProductCostContainer>
              <QuoteProductCostText>123</QuoteProductCostText>
            </QuoteProductCostContainer>
          </QuoteProductContainer>
        </QuoteProductsContainer>
        <QuoteTotalCostDetailsContainer>
          <QuoteTotalCostLabelText>Total cost</QuoteTotalCostLabelText>
          <QuoteTotalCostContainer>
            <QuoteTotalCostText>5500</QuoteTotalCostText>
          </QuoteTotalCostContainer>
        </QuoteTotalCostDetailsContainer>
      </QuoteCalculatorContainer>
    </CenterAlignedColumnContainerWOShadowBackground>
  );
};

export default RawMaterialCardMolecule;
