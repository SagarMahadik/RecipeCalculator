import React, { useContext } from 'react';

import { ButtonText } from 'styles/Singularity/Style1.0/TextStyles';

import { RecipeManagementContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

import {
  RecipeSubmitButton,
  AnimationContainer
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';
import recipeManagementContext from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
const SubmitRecipe = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const { onSubmit } = RecipeManagementContext;

  return (
    <>
      <AnimationContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeOut',
          duration: 1.2
        }}
        exit={{ opacity: 0 }}
      >
        <RecipeManagementContainer>
          <RecipeSubmitButton onClick={onSubmit}>
            <ButtonText>I am Done</ButtonText>
          </RecipeSubmitButton>
          <PartialWidthDivider />
        </RecipeManagementContainer>
      </AnimationContainer>
    </>
  );
};

export default SubmitRecipe;
