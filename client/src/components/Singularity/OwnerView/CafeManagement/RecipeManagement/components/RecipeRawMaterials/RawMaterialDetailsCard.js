import React, { useContext } from 'react';
import DeleteIcon from 'components/Singularity/ApplicationView/Icons/DeleteIcon.js';
import { recipeManagementContext } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';

import {
  Quantity,
  QuantityUnit,
  CostOfRawMaterial,
  BaseRateUnit,
  GridContainenr,
  RawmateriaName
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';
const RawMaterialDetailsCard = ({
  index,
  name,

  quantityInRecipe,
  materialId,

  recipeUnit,
  rate,

  baseQuantity,
  baseUnit,
  handleRemoveRawMaterial,
  handleRawMaterialNameChange,
  handleRateChange,
  handleQuantityChange
}) => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const { recipeRawMaterials } = RecipeManagementContext;

  return (
    <GridContainenr isEven={index % 2 === 0}>
      <RawmateriaName
        value={name}
        type="text"
        onChange={handleRawMaterialNameChange(index)}
        isEven={index % 2 === 0}
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
          name="quantity"
          value={quantityInRecipe}
          onChange={handleQuantityChange(materialId, index)}
          isEven={index % 2 === 0}
        />
        <QuantityUnit>{recipeUnit}</QuantityUnit>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirecction: 'row',
          alignItems: 'baseline',
          justifyContent: 'center'
        }}
      >
        <Quantity
          type="number"
          value={rate}
          onChange={handleRateChange(materialId)}
          isEven={index % 2 === 0}
        />
        <BaseRateUnit>
          /{baseQuantity}
          {baseUnit}
        </BaseRateUnit>
      </div>
      <CostOfRawMaterial>
        {((rate * quantityInRecipe) / baseQuantity).toFixed(2)}
      </CostOfRawMaterial>
      <DeleteIcon
        onClick={() => handleRemoveRawMaterial(materialId)}
        style={{ margin: '0' }}
      />
    </GridContainenr>
  );
};

export default RawMaterialDetailsCard;
