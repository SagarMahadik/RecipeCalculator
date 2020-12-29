import React, { useContext } from 'react';

import {
  RecipeName,
  InputWrapper,
  RecipeNameLabel
} from 'styles/Singularity/Style1.0/FormInputStyles';
import { RecipeManagementContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import recipeManagementContext from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';

const YieldUnits = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const { recipeYield, finalUnits, handleChangeFor } = RecipeManagementContext;

  return (
    <RecipeManagementContainer>
      <InputWrapper>
        <RecipeName
          placeholder=" "
          type="number"
          name="recipeYield"
          value={recipeYield}
          onChange={handleChangeFor('recipeYield')}
        />
        <RecipeNameLabel>Yield</RecipeNameLabel>
      </InputWrapper>
      <InputWrapper>
        <RecipeName
          placeholder=" "
          type="number"
          name="finalUnits"
          value={finalUnits}
          onChange={handleChangeFor('finalUnits')}
        />
        <RecipeNameLabel>Final Units</RecipeNameLabel>
      </InputWrapper>
      <PartialWidthDivider />
    </RecipeManagementContainer>
  );
};

export default YieldUnits;
