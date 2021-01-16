import React, { useContext } from 'react';
import {
  BaseRateUnit,
  DetailsContainer,
  TotalCostLabel,
  FinalRawMaterialCost
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';

import { TotalQuantity } from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement/index';

import { recipeManagementContext } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';

const TotalRawMaterialCost = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    totalRawMQuantityInRecipe,
    totalRawMaterialCostInRecipe
  } = RecipeManagementContext;
  return (
    <DetailsContainer>
      <TotalCostLabel>Total Raw Material Cost</TotalCostLabel>
      <FinalRawMaterialCost>
        {totalRawMaterialCostInRecipe}
      </FinalRawMaterialCost>
      <TotalQuantity>
        /
        <FinalRawMaterialCost>{totalRawMQuantityInRecipe}</FinalRawMaterialCost>
        <BaseRateUnit>gm</BaseRateUnit>
      </TotalQuantity>
    </DetailsContainer>
  );
};

export default TotalRawMaterialCost;
