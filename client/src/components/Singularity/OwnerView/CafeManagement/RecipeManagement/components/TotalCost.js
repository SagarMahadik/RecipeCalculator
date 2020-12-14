import React, { useContext } from 'react';
import {
  BaseRateUnit,
  TotalCostQuantityContainer,
  TotalCostLabel,
  FinalRawMaterialCost,
  TotalQuantity
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import { RecipeManagementContainer } from 'styles/Singularity/Style1.0/ContainerStyles';

import recipeManagementContext from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
const TotalCost = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    totalRawMQuantityInRecipe,
    totalRawMaterialCostInRecipe,
    totalBasicRecipeRAWMQuantity,
    totalBasicRecipeRAWMCost,
    finalUnits
  } = RecipeManagementContext;
  return (
    <>
      <RecipeManagementContainer>
        <TotalCostQuantityContainer>
          <TotalCostLabel style={{ fontWeight: 'bold' }}>
            Total Recipe Cost
          </TotalCostLabel>

          <FinalRawMaterialCost>
            Rs.
            {Number(totalRawMaterialCostInRecipe) +
              Number(totalBasicRecipeRAWMCost)}
          </FinalRawMaterialCost>
          <TotalQuantity>
            <FinalRawMaterialCost>
              /{totalRawMQuantityInRecipe + totalBasicRecipeRAWMQuantity}
            </FinalRawMaterialCost>
            <BaseRateUnit>gm</BaseRateUnit>
          </TotalQuantity>
        </TotalCostQuantityContainer>
        <PartialWidthDivider />
      </RecipeManagementContainer>
    </>
  );
};

export default TotalCost;
