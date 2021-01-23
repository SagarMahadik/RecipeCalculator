import React, { useContext } from 'react';

import {
  BasicRecipeNameContainer,
  RotateIcon,
  BasicRecipeName,
  NumberOfUnits,
  BaseRecipeCostForUnits
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';

import DeleteIcon from 'components/Singularity/ApplicationView/Icons/DeleteIcon.js';
import HideIcon from 'components/Singularity/ApplicationView/Icons/HideIcon.js';
import { recipeManagementContext } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';

const BasicRecipeDisplay = ({
  name,
  unitPerBaseQuantity,
  showItem,
  totalCostOfRMInBR,
  basicRecipeBaseQuantity,
  index,
  id
}) => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    handleRemoveBasicRecipe,
    handleBasicRecipeDisplay,
    handleBasicRecipeUnits,
    handleBasicRecipeBaseQty
  } = RecipeManagementContext;

  return (
    <BasicRecipeNameContainer>
      <BasicRecipeName>{name}</BasicRecipeName>
      <NumberOfUnits
        type="number"
        value={basicRecipeBaseQuantity === 0 ? '' : basicRecipeBaseQuantity}
        onChange={handleBasicRecipeBaseQty(index)}
      />
      <NumberOfUnits
        type="number"
        value={unitPerBaseQuantity}
        onChange={handleBasicRecipeUnits(index)}
      />
      <BaseRecipeCostForUnits>Rs.{totalCostOfRMInBR}</BaseRecipeCostForUnits>
      <DeleteIcon onClick={() => handleRemoveBasicRecipe(index)} />
      <RotateIcon clicked={showItem}>
        <HideIcon onClick={() => handleBasicRecipeDisplay(id)} />
      </RotateIcon>
    </BasicRecipeNameContainer>
  );
};

export default BasicRecipeDisplay;
