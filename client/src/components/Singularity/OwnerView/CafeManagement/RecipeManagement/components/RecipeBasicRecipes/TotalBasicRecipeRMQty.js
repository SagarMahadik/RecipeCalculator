import React, { useContext } from 'react';

import {
  BaseRateUnit,
  DetailsContainer,
  TotalCostLabel,
  FinalRawMaterialCost,
  TotalQuantity
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';
import { recipeManagementContext } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';

const TotalBasicRecipeRMQty = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    totalBasicRecipeRAWMQuantity,
    totalBasicRecipeRAWMCost
  } = RecipeManagementContext;

  return (
    <DetailsContainer>
      <TotalCostLabel>Total Basic Recipe Cost</TotalCostLabel>
      <FinalRawMaterialCost>
        Rs. {totalBasicRecipeRAWMCost}
      </FinalRawMaterialCost>
      <TotalQuantity>
        <FinalRawMaterialCost>
          /{totalBasicRecipeRAWMQuantity}
        </FinalRawMaterialCost>
        <BaseRateUnit>gm</BaseRateUnit>
      </TotalQuantity>
    </DetailsContainer>
  );
};

export default TotalBasicRecipeRMQty;
