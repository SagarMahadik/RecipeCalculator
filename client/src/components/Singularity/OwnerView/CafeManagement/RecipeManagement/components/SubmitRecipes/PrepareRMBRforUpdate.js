import React, { useEffect } from 'react';

import {
  useRecipeState,
  useRecipeDispatch
} from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/RecipeManagementState.js';

import produce from 'immer';

const PrepareRMBRforUpdate = () => {
  const { state } = useRecipeState();
  const dispatch = useRecipeDispatch();

  useEffect(() => {
    if (state.recipePrepareRMBRforUpdate) {
      prepareRMBRforUpdate(state);
    }
  }, [state.recipePrepareRMBRforUpdate]);

  const prepareRMBRforUpdate = state => {
    let basicRecipeRM = produce(state, draft => {
      let newBasiccRRecipeRMArray = [];
      draft.recipeBasicRecipes.forEach(item =>
        newBasiccRRecipeRMArray.push(item.details)
      );
      return newBasiccRRecipeRMArray;
    });

    let finalBasicRecipeRM = basicRecipeRM.flat();

    let finalRecipeRawMaterial = [
      ...state.recipeRawMaterials,
      ...finalBasicRecipeRM
    ];

    const uniqueRawMaterial = finalRecipeRawMaterial.reduce((acc, current) => {
      const x = acc.find(item => item._id === current._id);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

    let newState = produce(state, draftState => {
      var removeObjectProperties = function(obj, props) {
        for (var i = 0; i < props.length; i++) {
          if (obj.hasOwnProperty(props[i])) {
            delete obj[props[i]];
          }
        }
      };

      draftState.recipeRawMaterials.forEach(material => {
        material.details = material._id;
        material.multidelete(
          'brandName',
          'type',
          'name',
          'baseQuantity',
          'baseUnit',
          'recipeUnit',
          '__v'
        );
      });
      draftState.recipeBasicRecipes.forEach(basicRecipe => {
        basicRecipe.details = basicRecipe._id;
        basicRecipe.unitInRecipe = basicRecipe.unitPerBaseQuantity;
        removeObjectProperties(basicRecipe, [
          'brandName',
          'type',
          'name',
          'baseQuantity',
          'baseUnit',
          'recipeUnit',
          '__v',
          'unitPerBaseQuantity',
          'costPerUnit',
          'weightPerUnit',
          'showSearchBox',
          'showAddIcon',
          'totalcostofRMInBR',
          'totalRMQuantityInBR'
        ]);
      });
    });

    let finalRMDetails = newState.recipeRawMaterials;

    let finalBasicRecipeDetails = newState.recipeBasicRecipes;

    dispatch({
      type: 'RECIPE_UPDATE_RAWMATERIALRATE',
      uniqueRM: uniqueRawMaterial,
      finalRecipeRM: finalRMDetails,
      finalRecipeBR: finalBasicRecipeDetails
    });
  };

  return <div />;
};

export default PrepareRMBRforUpdate;
