import React, { useContext, useEffect } from 'react';
import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import RecipeDetails from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeDetails.js';
import ProductRecipes from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/ProductRecipes.js';
import SearchOptions from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/Search/SeachOptions.js';
import SearchBoxResults from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/Search/SearchBoxResults.js';
import RecipeRawMaterials from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeRawMaterials/RecipeRawMaterials.js';
import TotalCost from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/TotalCost.js';
import SaveRecipeOptions from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SaveRecipeOptions.js';
import YieldUnits from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/YieldUnits.js';
import PrepareRawMaterialUpate from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SubmitBasicRecipes/PrepareRawMaterialUpate.js';
import UpdateRawMaterialRate from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SubmitBasicRecipes/UpdateRawMaterialRate.js';
import POSTBRrequest from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SubmitBasicRecipes/POSTBRrequest.js';
import PrepareRMBRforUpdate from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SubmitRecipes/PrepareRMBRforUpdate.js';
import POSTRecipeRequest from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SubmitRecipes/POSTRecipeRequest.js';

import useRawMaterialRate from 'Hooks/APICalls/RawMaterials/useRawMaterialRate.js';
import useRawMaterials from 'Hooks/APICalls/RawMaterials/useRawMaterials.js';
import useBasicRecipes from 'Hooks/APICalls/BasicRecipes/useBasicRecipe.js';

import InitiateTrialRecipeFlow from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SubmitTrialRecipes/InitiateTrialRecipeFlow.js';
import UpdateDefaultRawMaterials from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SubmitTrialRecipes/UpdateDefaultRawMaterials.js';
import UpdateChangedBasicRecipes from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SubmitTrialRecipes/UpdateChangedBasicRecipes.js';

import SubmitRecipe from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/SubmitRecipe.js';
import Ball from 'components/Singularity/ApplicationView/Loaders/Ball';

import { recipeManagementContext } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
import RecipeBasicRecipies from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeBasicRecipes.js';
import RecipeProductPricing from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeProductPricing.js';

import { isArrayNonEmpty } from 'Utils/validations.js';
import { applicationContext } from 'Context/ApplicationContext/applicationContext.js';

import { AnimatePresence } from 'framer-motion';
import { AnimationContainer } from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';
import Anime from '@mollycule/react-anime';

import {
  useApplicationDispatch,
  useApplicationState
} from 'Context/ApplicationContext/ApplicationState.js';

const RecipeManagement = () => {
  const dispatch = useApplicationDispatch();

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

      {isArrayNonEmpty(recipeRawMaterials) ? <RecipeRawMaterials /> : null}

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

      <PrepareRawMaterialUpate />
      <UpdateRawMaterialRate />
      <POSTBRrequest />
      <InitiateTrialRecipeFlow />
      <UpdateDefaultRawMaterials />
      <UpdateChangedBasicRecipes />
      <PrepareRMBRforUpdate />
      <POSTRecipeRequest />
    </>
  );
};

export default RecipeManagement;
