import React, { useContext } from 'react';
import { RecipeManagementContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import {
  FormHeadingText,
  FormSectionHeadingTextContainer
} from 'styles/Singularity/Style1.0/TextStyles';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

import recipeManagementContext from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';

const ProductRecipes = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const { recipeProducts } = RecipeManagementContext;
  return (
    <>
      <RecipeManagementContainer>
        <FormHeadingText>
          <FormSectionHeadingTextContainer>
            {recipeProducts.name}
          </FormSectionHeadingTextContainer>
        </FormHeadingText>
        <PartialWidthDivider />
      </RecipeManagementContainer>
    </>
  );
};

export default ProductRecipes;
