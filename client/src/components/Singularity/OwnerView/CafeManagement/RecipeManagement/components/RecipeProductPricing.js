import React, { useContext } from 'react';
import {
  FormHeadingText,
  FormSectionHeadingTextContainer
} from 'styles/Singularity/Style1.0/TextStyles';
import { RecipeManagementContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

import recipeManagementContext from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
import {
  AnimationContainer,
  RawMaterial,
  Quantity,
  QuantityUnit,
  BaseRate,
  CostOfRawMaterial,
  BaseRateUnit,
  GridContainenr,
  QuantityDisplay,
  DetailsContainer,
  TotalCostText,
  FinalRawMaterialCost,
  RotateIcon,
  RawmateriaName,
  ProductPricingLabelGridContainer,
  ProductPricingDataContainer,
  ProductPricingNameContainer,
  ProductPricingLabel,
  ProductPricingContentText
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';

import DeleteIcon from 'components/Singularity/ApplicationView/Icons/DeleteIcon.js';
import HideIcon from 'components/Singularity/ApplicationView/Icons/HideIcon.js';
import { TotalQuantity } from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement/index';
import { AnimatePresence, motion } from 'framer-motion';

const RecipeProductPricing = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    finalUnits,
    recipeName,
    recipeRawMaterials,
    totalRawMQuantityInRecipe,
    totalRawMaterialCostInRecipe,
    totalBasicRecipeRAWMQuantity,
    totalBasicRecipeRAWMCost
  } = RecipeManagementContext;

  return (
    <>
      {finalUnits !== '' ? (
        <>
          <ProductPricingLabelGridContainer>
            <ProductPricingNameContainer>
              <ProductPricingLabel>No. of units</ProductPricingLabel>
            </ProductPricingNameContainer>
            <ProductPricingNameContainer>
              <ProductPricingLabel>Recipe Name</ProductPricingLabel>
            </ProductPricingNameContainer>
            <ProductPricingNameContainer>
              <ProductPricingLabel>Cost per product</ProductPricingLabel>
            </ProductPricingNameContainer>
            <ProductPricingNameContainer>
              <ProductPricingLabel>Wt. per unit</ProductPricingLabel>
            </ProductPricingNameContainer>
          </ProductPricingLabelGridContainer>
          <ProductPricingDataContainer>
            <ProductPricingContentText>{finalUnits}</ProductPricingContentText>
            <ProductPricingContentText>{recipeName}</ProductPricingContentText>
            <ProductPricingContentText>
              {(Number(totalRawMaterialCostInRecipe) +
                Number(totalBasicRecipeRAWMCost)) /
                finalUnits}
            </ProductPricingContentText>
            <ProductPricingContentText>
              {(totalRawMQuantityInRecipe + totalBasicRecipeRAWMQuantity) /
                finalUnits}
            </ProductPricingContentText>
          </ProductPricingDataContainer>
        </>
      ) : null}
    </>
  );
};

export default RecipeProductPricing;
