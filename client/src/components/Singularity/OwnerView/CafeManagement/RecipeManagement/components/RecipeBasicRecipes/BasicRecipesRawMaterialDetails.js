import React, { useContext } from 'react';

import {
  RawMaterial,
  Quantity,
  QuantityUnit,
  CostOfRawMaterial,
  BaseRateUnit,
  GridContainenr,
  QuantityDisplayProduction
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';

import DeleteIcon from 'components/Singularity/ApplicationView/Icons/DeleteIcon.js';

import { recipeManagementContext } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';

const BasicRecipesRawMaterialDetails = ({
  basicRecipeName,
  basicRecipeIndex,
  basicRecipeID,
  rawMaterialName,
  hideRM,
  rawMaterialIndex,
  rawMaterialID,
  rawMaterialQtyInRecipe,
  rawMaterialRecipeUnit,
  rawmaterialbaseUnit,
  rawMaterialRate,
  rawMaterialBaseQty,
  rawmaterialQtyPerUnit,
  basicRecipeUnitPerbaseQty
}) => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    handleBasicRecipeRMRateChange,
    handleBasicRecipeRMDelete,
    hideBasicRecipeRMOnDelete
  } = RecipeManagementContext;
  return (
    <GridContainenr
      className="basicReccipe"
      clicked={hideRM}
      isEven={rawMaterialIndex % 2 === 0}
    >
      <RawMaterial>{rawMaterialName}</RawMaterial>
      <div
        style={{
          display: 'flex',
          flexDirecction: 'row',
          alignItems: 'baseline',
          justifyContent: 'center',
          marginLeft: '-10px'
        }}
      >
        <QuantityDisplayProduction
          isEven={rawMaterialIndex % 2 === 0}
          clicked={hideRM}
        >
          {Math.round(rawMaterialQtyInRecipe)}
        </QuantityDisplayProduction>

        <QuantityUnit>{rawMaterialRecipeUnit}</QuantityUnit>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirecction: 'row',
          alignItems: 'baseline',
          justifyContent: 'center',
          padding: 0
        }}
      >
        <Quantity
          type="number"
          value={rawMaterialRate}
          clicked={hideRM}
          onChange={handleBasicRecipeRMRateChange(
            rawMaterialID,
            basicRecipeName,
            basicRecipeIndex
          )}
          isEven={rawMaterialIndex % 2 === 0}
        />
        <BaseRateUnit>
          /{rawMaterialBaseQty}
          {rawmaterialbaseUnit}
        </BaseRateUnit>
      </div>
      <CostOfRawMaterial>
        {Math.round(
          (rawMaterialRate *
            rawmaterialQtyPerUnit *
            basicRecipeUnitPerbaseQty) /
            rawMaterialBaseQty,
          0
        )}
      </CostOfRawMaterial>
      <DeleteIcon
        onClick={() => {
          hideBasicRecipeRMOnDelete(basicRecipeIndex, rawMaterialIndex);
          setTimeout(() => {
            handleBasicRecipeRMDelete(
              basicRecipeIndex,
              rawMaterialIndex,
              rawMaterialID,
              basicRecipeID
            );
          }, 1200);
        }}
      />
    </GridContainenr>
  );
};

export default BasicRecipesRawMaterialDetails;
