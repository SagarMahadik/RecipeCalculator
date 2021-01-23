import React, { useEffect } from 'react';

import {
  useRecipeDispatch,
  useRecipeState
} from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/RecipeManagementState.js';

import { useApplicationState } from 'Context/ApplicationContext/ApplicationState.js';

import axios from 'axios';

import produce from 'immer';
const POSTBRrequest = () => {
  const { state } = useRecipeState();
  const { userID } = useApplicationState();
  const dispatch = useRecipeDispatch();

  useEffect(() => {
    if (state.makeBRrequest) {
      addBasicRecipeToDB(state);
    }
  }, [state.makeBRrequest]);

  if (!('multidelete' in Object.prototype)) {
    Object.defineProperty(Object.prototype, 'multidelete', {
      value: function() {
        for (var i = 0; i < arguments.length; i++) {
          delete this[arguments[i]];
        }
      }
    });
  }

  const addBasicRecipeToDB = async state => {
    let updatedRAWM = produce(state, draftState => {
      draftState.recipeRawMaterials.forEach(material => {
        material.rawmaterialdetails = material._id;
        material.quantityPerUnit = material.quantityInRecipe / state.finalUnits;
      });
      draftState.recipeRawMaterials.forEach(material =>
        material.multidelete(
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
        )
      );
      return draftState;
    });

    const {
      recipeName,
      totalRawMQuantityInRecipe,
      totalRawMaterialCostInRecipe,
      recipeYield,
      finalUnits,
      brandName,
      recipeUrl
    } = state;

    let name = recipeName;
    let details = updatedRAWM.recipeRawMaterials;
    let baseQuantity = totalRawMQuantityInRecipe;
    let baseUnit = 'gm';
    let rate = totalRawMaterialCostInRecipe;

    let yieldBasicRecipe = recipeYield;

    let unitPerBaseQuantity = finalUnits;

    let costPerUnit = rate / finalUnits;

    let weightPerUnit = baseQuantity / finalUnits;

    const body = JSON.stringify({
      userID,
      name,
      details,
      baseQuantity,
      baseUnit,
      rate,
      brandName,
      recipeUrl,
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

    if (res.data.status === 'success') {
      dispatch({
        type: 'COMPLETE_FORM'
      });
    }
  };

  return <div />;
};

export default POSTBRrequest;
