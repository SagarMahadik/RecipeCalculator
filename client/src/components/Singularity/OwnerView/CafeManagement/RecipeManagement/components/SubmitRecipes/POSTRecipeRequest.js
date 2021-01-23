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

  const addRecipeToDB = async state => {
    const {
      recipeName,
      recipeRawMaterials,
      recipeBasicRecipes,
      brandName,
      recipeUrl,
      finalUnits
    } = state;
    let name = recipeName;
    let rawMaterialDetails = [
      ...state.recipeRequestDetails.recipeFinalRMDetails
    ];
    let basicRecipeDetails = [
      ...state.recipeRequestDetails.recipeFinalBRDetails
    ];

    let baseQuantity =
      state.totalRawMQuantityInRecipe + state.totalBasicRecipeRAWMQuantity;
    let baseUnit = 'gm';
    let rate =
      Number(state.totalRawMaterialCostInRecipe) +
      Number(state.totalBasicRecipeRAWMCost);
    let unitPerBaseQuantity = state.finalUnits;

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
