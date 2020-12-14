import React, { useContext, useState, useEffect } from 'react';
import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import RecipeName from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeName.js';
import ProductRecipes from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/ProductRecipes.js';
import SearchItems from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SeachItems.js';
import SearchBoxResults from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SearchBoxResults.js';
import RecipeRawMaterials from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeRawMaterials.js';
import TotalCost from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/TotalCost.js';
import SaveRecipeOptions from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SaveRecipeOptions.js';
import YieldUnits from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/YieldUnits.js';

import SubmitRecipe from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SubmitRecipe.js';
import Ball from 'components/Singularity/ApplicationView/Loaders/Ball';

import recipeManagementContext from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
import RecipeBasicRecipies from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeBasicRecipes.js';
import ProductDetails from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/ProductDetails';
import RecipeProductPricing from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeProductPricing.js';

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
      <RecipeName />

      {!showBasicRecipeSearch && (
        <>
          {' '}
          <SearchItems />
          <SearchBoxResults />
        </>
      )}
      {Object.keys(recipeProducts).length > 0 ? <ProductRecipes /> : null}
      {recipeRawMaterials.length > 0 ? <RecipeRawMaterials /> : null}
      {recipeBasicRecipes.length > 0 ? <RecipeBasicRecipies /> : null}
      {recipeBasicRecipes.length > 0 || recipeRawMaterials.length > 0 ? (
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
