import React, { useEffect, useContext, useState } from 'react';
import {
  useRecipeState,
  useRecipeDispatch
} from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/RecipeManagementState.js';

import { applicationContext } from 'Context/ApplicationContext/applicationContext.js';

import axios from 'axios';
import produce from 'immer';

const UpdateChangedBasicRecipes = () => {
  const {
    state: {
      trialRecipeFlow: {
        trialRecipeDefaultRM,
        updateDefaultRM,
        defaultRMuploadComplete,
        transformBasicRecipes,
        uploadedDefaultRM,
        transformBasicRecipesComplete,
        basicRecipeCheckComplete,
        basicRecipeWithChange,
        basicRecipeWithDeletedRM,
        basicRecipeWithDefaultRM,
        basicRecipeWithNoDefaultRM,
        basicRecipeWithChangeInNameOrQtY,
        uploadedChangedBasicRecipes
      },
      recipeBasicRecipes
    },
    state
  } = useRecipeState();
  const dispatch = useRecipeDispatch();

  const ApplicationContext = useContext(applicationContext);

  const { userID, userBrandName } = ApplicationContext;

  let [basicRecipeCount, setBasicRecipeCount] = useState(1);

  useEffect(() => {
    if (
      basicRecipeCheckComplete &&
      basicRecipeWithDefaultRM.length === 0 &&
      (basicRecipeWithNoDefaultRM.length > 0 ||
        basicRecipeWithChangeInNameOrQtY.length > 0 ||
        basicRecipeWithDeletedRM.length > 0)
    ) {
      updateChangedBasicRecipeTODB(state, basicRecipeWithChange);
    }
  }, [
    basicRecipeCheckComplete,
    basicRecipeWithNoDefaultRM,
    basicRecipeWithChangeInNameOrQtY,
    basicRecipeWithDefaultRM,
    basicRecipeWithDeletedRM
  ]);

  useEffect(() => {
    if (
      basicRecipeCheckComplete &&
      basicRecipeWithDefaultRM.length > 0 &&
      transformBasicRecipesComplete
    ) {
      updateChangedBasicRecipeTODB(state, basicRecipeWithChange);
    }
  }, [
    basicRecipeCheckComplete,
    basicRecipeWithDefaultRM,
    transformBasicRecipesComplete
  ]);

  useEffect(() => {
    console.log(basicRecipeCount);
    console.log(uploadedChangedBasicRecipes.length);
    console.log(basicRecipeWithChange.length);
    if (
      uploadedChangedBasicRecipes.length !== 0 &&
      basicRecipeWithChange.length !== 0 &&
      uploadedChangedBasicRecipes.length === basicRecipeWithChange.length
    ) {
      console.log('proceed with updating state basic recipes');
      console.log(basicRecipeCount);
      console.log(uploadedChangedBasicRecipes.length);
      dispatch({
        type: 'TRANSFORM_RECIPE_BASICRECIPES'
      });
    }
  }, [uploadedChangedBasicRecipes, basicRecipeCount, basicRecipeWithChange]);

  var removeObjectProperties = function(obj, props) {
    for (var i = 0; i < props.length; i++) {
      if (obj.hasOwnProperty(props[i])) {
        delete obj[props[i]];
      }
    }
  };

  const addChangedBasicRecipeTODB = async (state, br) => {
    let updatedBasicREcipes = produce(br, updatedBR => {
      updatedBR.details.forEach(material => {
        material.rawmaterialdetails = material._id;
        material.rawMaterialName = material.name;
        removeObjectProperties(material, [
          'brandName',
          'type',
          'name',
          'baseQuantity',
          'baseUnit',
          'recipeUnit',
          '__v',
          'costOfRawMaterial',
          'rate',
          '_id'
        ]);
      });
      return updatedBR;
    });

    let name = `${br.name}-${state.recipeName}`;
    let details = updatedBasicREcipes.details;
    let baseQuantity = br.totalRMQuantityInBR;
    let rate = br.totalCostOfRMInBR;
    let yieldBasicRecipe = 0.9 * baseQuantity;
    let unitPerBaseQuantity = br.unitPerBaseQuantity;
    let costPerUnit = rate / unitPerBaseQuantity;
    let weightPerUnit = baseQuantity / unitPerBaseQuantity;
    let brandName = userBrandName;
    let baseUnit = 'gm';

    const body = JSON.stringify({
      userID,
      name,
      details,
      baseQuantity,
      baseUnit,
      rate,
      brandName,
      yieldBasicRecipe,
      unitPerBaseQuantity,
      costPerUnit,
      weightPerUnit
    });
    console.log(body);
    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };

    const res = await axios.post(`/api/v1/basicRecipe/${userID}`, body, config);

    let uploadedBasicRecipe = res.data.data.data;

    let addBasicRecipeDetailsToResponse = {
      ...uploadedBasicRecipe,
      stateBasicRecipe: br._id,
      quantityPerUnit: br.quantityPerUnit
    };

    dispatch({
      type: 'TRIAL_RECIPE_UPDATE_CHANGEDBR',
      payload: addBasicRecipeDetailsToResponse
    });
  };

  const updateChangedBasicRecipeTODB = (state, basicRecipeWithChange) => {
    const arrayofPromises = basicRecipeWithChange.map(br => {
      addChangedBasicRecipeTODB(state, br);
    });
    Promise.all(arrayofPromises).then(() => {
      setBasicRecipeCount(basicRecipeCount++);
    });
  };

  return <div />;
};

export default UpdateChangedBasicRecipes;
