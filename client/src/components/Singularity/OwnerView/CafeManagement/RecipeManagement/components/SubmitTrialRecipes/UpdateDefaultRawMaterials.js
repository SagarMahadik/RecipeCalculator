import React, { useEffect, useContext, useState } from 'react';
import {
  useRecipeState,
  useRecipeDispatch
} from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/RecipeManagementState.js';

import { applicationContext } from 'Context/ApplicationContext/applicationContext.js';

import axios from 'axios';
import produce from 'immer';

const UpdateDefaultRawMaterials = () => {
  const {
    state: {
      trialRecipeFlow: {
        trialRecipeDefaultRM,
        updateDefaultRM,
        defaultRMuploadComplete,
        transformBasicRecipes,
        uploadedDefaultRM,
        transformBasicRecipesComplete,
        basicRecipeCheckComplete
      },
      recipeBasicRecipes
    },
    state
  } = useRecipeState();
  const dispatch = useRecipeDispatch();

  const ApplicationContext = useContext(applicationContext);

  const { userID, userBrandName } = ApplicationContext;

  let [basicRecipeCount, setBasicRecipeCount] = useState(1);
  let [count, setCount] = useState(0);

  const addDefaultRawMaterialsDB = async (item, index, basiRecipeID) => {
    const body = JSON.stringify({
      userID,
      name: item.name,
      brandName: item.brandName,
      type: item.type,
      rate: item.rate,
      baseQuantity: item.baseQuantity,
      baseUnit: item.baseUnit,
      recipeUnit: item.recipeUnit,
      displayRateUnit: item.displayRateUnit,
      quantityInRecipe: item.quantityInRecipe,
      GSTPercent: item.GSTPercent,
      supplier: item.supplier
    });

    const config = {
      headers: {
        'Content-Type': 'application/JSON',
        Authorization: `Bearer ${localStorage.token}`
      }
    };

    const res = await axios.post(`/api/v1/rawMaterial/${userID}`, body, config);

    const uploadedRAWM = res.data.data.data;

    let addBasicRecipeIDToResponse = {
      ...uploadedRAWM,
      basicRecipe: basiRecipeID,
      quantityPerUnit: item.quantityPerUnit
    };

    dispatch({
      type: 'RECIPE_DEFAULTRM_UPLAODED',
      payload: addBasicRecipeIDToResponse
    });
  };

  useEffect(() => {
    trialRecipeDefaultRM.flat().forEach(rm => {
      setCount(rm.defaultRMs.length + count);
    });
    console.log(count);
  }, [trialRecipeDefaultRM]);

  useEffect(() => {
    if (basicRecipeCount === uploadedDefaultRM.length) {
      dispatch({
        type: 'RECIPE_DEFAULTRM_UPLAOD_COMPLETE'
      });
    }
  }, [basicRecipeCount, uploadedDefaultRM]);

  useEffect(() => {
    if (updateDefaultRM && basicRecipeCheckComplete) {
      updateDefaultRMTODB(trialRecipeDefaultRM);
    }
  }, [updateDefaultRM, basicRecipeCheckComplete]);

  useEffect(() => {
    if (defaultRMuploadComplete) {
      dispatch({
        type: 'TRIAL_TRANSFORM_BASIC_RECIPES'
      });
    }
  }, [defaultRMuploadComplete]);

  const transformRecipeBasicRecipes = state => {
    console.log('Basic Recipe with update default transformed');
    /**
     *     let updatedBasicRecipe = produce(state, draftState => {

      draftState.recipeBasicRecipes.forEach(br => {
        br.details = br.details.filter(x => x._id != 'bennyRawMaterial');
        draftState.trialRecipeFlow.uploadedDefaultRM.forEach(rm => {
          if (rm.basicRecipe === br._id) {
            br.details.push(rm);
          }
        });
     
      });
      return draftState;
    });
     */
  };

  useEffect(() => {
    if (transformBasicRecipesComplete) {
      const result = transformRecipeBasicRecipes(state);
    }
  }, [transformBasicRecipesComplete]);

  const updateDefaultRMTODB = RMarray => {
    console.log(RMarray.flat());
    let basicRecipeDefaultRMArray = RMarray.flat();

    basicRecipeDefaultRMArray.forEach((br, index) => {
      const arrayofPromises = br.defaultRMs.map((rm, index) => {
        addDefaultRawMaterialsDB(rm, index, br.basicRecipe);
      });
      Promise.all(arrayofPromises).then(() => {
        setBasicRecipeCount(basicRecipeCount++);
      });
    });
  };
  return <div />;
};

export default UpdateDefaultRawMaterials;
