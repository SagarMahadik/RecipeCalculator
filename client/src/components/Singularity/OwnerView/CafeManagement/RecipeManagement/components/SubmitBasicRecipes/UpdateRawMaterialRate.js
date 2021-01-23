import React, { useEffect } from 'react';

import {
  useRecipeDispatch,
  useRecipeState
} from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/RecipeManagementState.js';

import { useApplicationState } from 'Context/ApplicationContext/ApplicationState.js';

import axios from 'axios';

const UpdateRawMaterialRate = () => {
  const {
    state: {
      saveOption,
      brRawMaterialRateUpdateArray,
      initiateBRrawMRateUpdate,
      initiateRecipeRawMaterialRateUpdate,
      recipeRequestDetails: { recipeUniqueRawMaterials }
    }
  } = useRecipeState();
  const { userID, rawMaterialRates } = useApplicationState();
  const dispatch = useRecipeDispatch();

  useEffect(() => {
    if (initiateBRrawMRateUpdate) {
      intiateRawMaterialRateUpdate(brRawMaterialRateUpdateArray);
    }

    if (initiateRecipeRawMaterialRateUpdate) {
      intiateRawMaterialRateUpdate(recipeUniqueRawMaterials);
    }
  }, [initiateBRrawMRateUpdate, initiateRecipeRawMaterialRateUpdate]);

  const getRawMaterialWithRateChange = (
    allRawMaterialsArray,
    rawMaterialRates
  ) => {
    let onlyUpdatedRawMaterials = [];

    allRawMaterialsArray.forEach(rawMaterial => {
      rawMaterialRates.forEach(item => {
        if (item._id === rawMaterial._id) {
          if (item.rate !== rawMaterial.rate) {
            onlyUpdatedRawMaterials = [...onlyUpdatedRawMaterials, rawMaterial];
          }
        }
      });
    });

    return onlyUpdatedRawMaterials;
  };

  const makePostRequest = saveOption => {
    if (saveOption == 'basicRecipe') {
      dispatch({
        type: 'MAKE_BR_REQUEST'
      });
    }
    if (saveOption === 'product') {
      dispatch({
        type: 'MAKE_RECIPE_REQUEST'
      });
    }
  };

  const intiateRawMaterialRateUpdate = async allRawMaterialsArray => {
    const onlyUpdatedRawMaterials = getRawMaterialWithRateChange(
      allRawMaterialsArray,
      rawMaterialRates
    );

    if (onlyUpdatedRawMaterials.length === 0) {
      makePostRequest(saveOption);
    }

    if (onlyUpdatedRawMaterials.length > 0) {
      const arrayofPromises = onlyUpdatedRawMaterials.map((item, index) => {
        updateRawMaterialsDB(item._id, item.rate, index);
      });

      Promise.all(arrayofPromises).then(() => {
        makePostRequest(saveOption);
      });
    }
  };

  const updateRawMaterialsDB = async (id, rate, index) => {
    const body = JSON.stringify({
      rate
    });

    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };

    const res = await axios.patch(
      `/api/v1/rawMaterial/${userID}/${id}`,
      body,
      config
    );

    dispatch({
      type: 'CREATE_RATEUPDATEDRM',
      payload: res
    });
  };

  return <div />;
};

export default UpdateRawMaterialRate;
