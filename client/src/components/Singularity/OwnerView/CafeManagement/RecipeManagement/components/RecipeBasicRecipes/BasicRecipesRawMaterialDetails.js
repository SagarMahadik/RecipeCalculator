import React, { useContext } from 'react';

import {
  RawMaterial,
  Quantity,
  QuantityUnit,
  CostOfRawMaterial,
  BaseRateUnit,
  GridContainenr,
  QuantityDisplayProduction,
  RawmateriaName
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
    handleBasicRecipeRMQuantityChange,
    handleBasicRecipeRawMaterialNameChange
  } = RecipeManagementContext;
  return (
    <GridContainenr
      className="basicReccipe"
      clicked={hideRM}
      isEven={rawMaterialIndex % 2 === 0}
    >
      <RawmateriaName
        value={rawMaterialName}
        type="text"
        onChange={handleBasicRecipeRawMaterialNameChange(
          rawMaterialIndex,
          basicRecipeIndex
        )}
        isEven={rawMaterialIndex % 2 === 0}
      />
      <div
        style={{
          display: 'flex',
          flexDirecction: 'row',
          alignItems: 'baseline',
          justifyContent: 'center',
          marginLeft: '-10px'
        }}
      >
        <Quantity
          type="number"
          value={rawMaterialQtyInRecipe}
          clicked={hideRM}
          onChange={handleBasicRecipeRMQuantityChange(
            rawMaterialIndex,
            basicRecipeIndex
          )}
          isEven={rawMaterialIndex % 2 === 0}
        />

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
          handleBasicRecipeRMDelete(
            basicRecipeIndex,
            rawMaterialIndex,
            rawMaterialID,
            basicRecipeID
          );
        }}
      />
    </GridContainenr>
  );
};

export default BasicRecipesRawMaterialDetails;
