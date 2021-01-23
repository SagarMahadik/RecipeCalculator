import React from 'react';

import {
  BaseRateUnit,
  TotalCostLabel,
  FinalRawMaterialCost,
  TotalQuantity,
  BasicRecipeCostQuantityContainer
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';

const BasicRecipeTotalQtyCost = ({
  basicRecipeName,
  basicRecipeCostofRM,
  basicRecipeRMTotalQty
}) => {
  return (
    <BasicRecipeCostQuantityContainer>
      <TotalCostLabel>{`${basicRecipeName}`}</TotalCostLabel>
      <FinalRawMaterialCost>Rs. {basicRecipeCostofRM}</FinalRawMaterialCost>
      <TotalQuantity>
        <FinalRawMaterialCost>/{basicRecipeRMTotalQty}</FinalRawMaterialCost>
        <BaseRateUnit style={{ marginLeft: '2px' }}>gm</BaseRateUnit>
      </TotalQuantity>
    </BasicRecipeCostQuantityContainer>
  );
};

export default BasicRecipeTotalQtyCost;
