import React, { useContext } from 'react';
import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import RecipeDetails from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeDetails.js';
import ProductRecipes from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/ProductRecipes.js';
import SearchOptions from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/Search/SeachOptions.js';
import SearchBoxResults from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/Search/SearchBoxResults.js';
import RecipeRawMaterials from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeRawMaterials/RecipeRawMaterials.js';
import TotalCost from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/TotalCost.js';
import SaveRecipeOptions from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SaveRecipeOptions.js';
import YieldUnits from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/YieldUnits.js';

import SubmitRecipe from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SubmitRecipe.js';
import Ball from 'components/Singularity/ApplicationView/Loaders/Ball';

import { recipeManagementContext } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
import RecipeBasicRecipies from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeBasicRecipes.js';
import RecipeProductPricing from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeProductPricing.js';

import { isArrayNonEmpty } from 'Utils/validations.js';

import { AnimatePresence } from 'framer-motion';
import { AnimationContainer } from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';

const RecipeManagement = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    isDataUploaded,
    showLoader,
    loading,
    recipeRawMaterials,
    recipeBasicRecipes,
    showBasicRecipeSearch,
    recipeProducts
  } = RecipeManagementContext;

  if (showLoader) {
    return <Ball loading={loading} isComplete={isDataUploaded} />;
  }
  return (
    <>
      <FormHeadings heading="Start Building Your Recipe" />
      <SaveRecipeOptions />
      <RecipeDetails />

      {!showBasicRecipeSearch && (
        <>
          {' '}
          <SearchOptions />
          <SearchBoxResults />
        </>
      )}
      {Object.keys(recipeProducts).length > 0 ? <ProductRecipes /> : null}
      <AnimatePresence>
        {isArrayNonEmpty(recipeRawMaterials) ? (
          <AnimationContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeOut',
              duration: 0.8
            }}
            exit={{ opacity: 0 }}
          >
            <RecipeRawMaterials />
          </AnimationContainer>
        ) : null}
      </AnimatePresence>
      {isArrayNonEmpty(recipeBasicRecipes) ? <RecipeBasicRecipies /> : null}
      {isArrayNonEmpty(recipeBasicRecipes) ||
      isArrayNonEmpty(recipeRawMaterials) ? (
        <>
          <TotalCost />
          <YieldUnits />
          <RecipeProductPricing />
          <SubmitRecipe />
        </>
      ) : null}
    </>
  );
};

export default RecipeManagement;
