import React, { useContext } from 'react';
import {
  RecipeName,
  InputWrapper,
  RecipeNameLabel
} from 'styles/Singularity/Style1.0/FormInputStyles';
import { RecipeManagementContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import recipeManagementContext from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
import {
  BrandName,
  BrandNameLabel,
  RecipeUrl,
  RecipeUrlLabel
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement/index.js';

const RecipeNameComponent = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    handleChangeFor,
    recipeName,
    brandName,
    recipeUrl
  } = RecipeManagementContext;
  return (
    <>
      <RecipeManagementContainer>
        <InputWrapper>
          <RecipeName
            placeholder=" "
            type="text"
            name="recipeName"
            value={recipeName}
            onChange={handleChangeFor('recipeName')}
          />
          <RecipeNameLabel>Recipe Name</RecipeNameLabel>
        </InputWrapper>
        <InputWrapper>
          <RecipeName
            placeholder=" "
            type="text"
            name="brandName"
            value={brandName}
            onChange={handleChangeFor('brandName')}
          />
          <RecipeNameLabel>Brand Name</RecipeNameLabel>
        </InputWrapper>
        <InputWrapper>
          <RecipeName
            placeholder=" "
            type="text"
            name="recipeUrl"
            value={recipeUrl}
            onChange={handleChangeFor('recipeUrl')}
          />
          <RecipeNameLabel>Recipe URL</RecipeNameLabel>
        </InputWrapper>
        <PartialWidthDivider />
      </RecipeManagementContainer>
    </>
  );
};

export default RecipeNameComponent;
