import React, { useEffect } from 'react';
import {
  useRecipeState,
  useRecipeDispatch
} from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/RecipeManagementState.js';

import { useApplicationState } from 'Context/ApplicationContext/ApplicationState.js';

import axios from 'axios';

const POSTRecipeRequest = () => {
  const { userID } = useApplicationState();
  const { state } = useRecipeState();
  const dispatch = useRecipeDispatch();

  useEffect(() => {
    if (state.makeRecipeRequest) {
      addRecipeToDB(state);
    }
  }, [state.makeRecipeRequest]);

  /**
   * 
  const setTotalCost = state => {
    if (state.saveoption === 'trial') {
      return (
        state.trialRecipeFlow.copyOfStateBeforeSubmission
          .totalRawMaterialCostInRecipe +
        state.trialRecipeFlow.copyOfStateBeforeSubmission
          .totalBasicRecipeRAWMCost
      );
    }
    if (state.saveoption === 'product') {
      return (
        Number(state.totalRawMaterialCostInRecipe) +
        Number(state.totalBasicRecipeRAWMCost)
      );
    }
  };

  const setTotalRawMaterialQty = state => {
    if (state.saveoption === 'trial') {
      return (
        state.trialRecipeFlow.copyOfStateBeforeSubmission
          .totalRawMQuantityInRecipe +
        state.trialRecipeFlow.copyOfStateBeforeSubmission
          .totalBasicRecipeRAWMQuantity
      );
    }
    if (state.saveoption === 'product') {
      return (
        Number(state.totalBasicRecipeRAWMQuantity) +
        Number(state.totalRawMQuantityInRecipe)
      );
    }
  };
   * 
   */

  const addRecipeToDB = async state => {
    const {
      recipeName,
      recipeRawMaterials,
      recipeBasicRecipes,
      brandName,
      recipeUrl,
      finalUnits,
      saveoption
    } = state;
    let name = recipeName;
    let rawMaterialDetails = [
      ...state.recipeRequestDetails.recipeFinalRMDetails
    ];
    let basicRecipeDetails = [
      ...state.recipeRequestDetails.recipeFinalBRDetails
    ];
    let baseUnit = 'gm';

    let baseQuantity =
      Number(
        state.trialRecipeFlow.copyOfStateBeforeSubmission
          .totalRawMQuantityInRecipe
      ) +
      Number(
        state.trialRecipeFlow.copyOfStateBeforeSubmission
          .totalBasicRecipeRAWMQuantity
      );

    let rate =
      Number(
        state.trialRecipeFlow.copyOfStateBeforeSubmission
          .totalRawMaterialCostInRecipe
      ) +
      Number(
        state.trialRecipeFlow.copyOfStateBeforeSubmission
          .totalBasicRecipeRAWMCost
      );

    let unitPerBaseQuantity = Number(state.finalUnits);

    const body = JSON.stringify({
      userID,
      name,
      rawMaterialDetails,
      basicRecipeDetails,
      baseQuantity,
      baseUnit,
      rate,
      brandName,
      recipeUrl,
      unitPerBaseQuantity
    });

    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };

    const res = await axios.post(`/api/v1/recipe/${userID}`, body, config);

    if (res.data.status === 'success') {
      dispatch({
        type: 'COMPLETE_FORM'
      });
    }
  };

  return <div />;
};

export default POSTRecipeRequest;
