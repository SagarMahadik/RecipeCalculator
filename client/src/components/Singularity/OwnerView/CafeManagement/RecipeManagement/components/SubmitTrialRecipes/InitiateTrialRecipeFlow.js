import React, { useEffect } from 'react';
import {
  useRecipeState,
  useRecipeDispatch
} from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/RecipeManagementState.js';

import { useApplicationState } from 'Context/ApplicationContext/ApplicationState.js';

const InitiateTrialRecipeFlow = () => {
  const {
    state: {
      trialRecipeFlow: { initiateTrialRecipeFlow }
    },
    state: { recipeBasicRecipes }
  } = useRecipeState();
  const dispatch = useRecipeDispatch();

  const { basicRecipes } = useApplicationState();

  useEffect(() => {
    if (initiateTrialRecipeFlow) {
      checkForDifference(basicRecipes, recipeBasicRecipes);
    }
  }, [initiateTrialRecipeFlow]);

  const getTheDifference = (array1, array2) => {
    const operation = (list1, list2, isUnion = false) =>
      list1.filter(a => isUnion === list2.some(b => a._id === b._id));

    const inBoth = (list1, list2) => operation(list1, list2, true),
      inFirstOnly = operation,
      inSecondOnly = (list1, list2) => inFirstOnly(list2, list1);

    const newRawMaterialsInBasicRecipe = inFirstOnly(array1, array2);
    const deletedRawMaterialInBasicRecipe = inSecondOnly(array1, array2);
    const rawMaterialBothInStateDB = inBoth(array1, array2, true);
    return {
      newRawMaterialsInBasicRecipe,
      deletedRawMaterialInBasicRecipe,
      rawMaterialBothInStateDB
    };
  };

  const checkForDifference = (basicRecipes, recipeBasicRecipes) => {
    let position = 0;
    recipeBasicRecipes.forEach((br, brIndex) => {
      basicRecipes.some((obj, index) => {
        if (obj._id === br._id) {
          position = index;
          return true;
        }
        return false;
      });
      const {
        newRawMaterialsInBasicRecipe,
        deletedRawMaterialInBasicRecipe,
        rawMaterialBothInStateDB
      } = getTheDifference(
        recipeBasicRecipes[brIndex].details,
        basicRecipes[position].details
      );

      console.log(newRawMaterialsInBasicRecipe.length);

      if (newRawMaterialsInBasicRecipe.length === 0) {
        if (deletedRawMaterialInBasicRecipe.length > 0) {
          dispatch({
            type: 'TRIAL_RECIPE_SET_BR_CHANGE',
            payload: brIndex,
            changeType: 'RawMaterialDeleted'
          });
        } else {
          console.log(rawMaterialBothInStateDB);
          console.log(basicRecipes[position].details);
          rawMaterialBothInStateDB.forEach((stateRM, stateRMIndex) => {
            basicRecipes[position].details.forEach(dbRM => {
              if (stateRM.uniqueID === dbRM.uniqueID) {
                if (
                  stateRM.quantityInRecipe != dbRM.quantityInRecipe ||
                  stateRM.name != dbRM.name
                ) {
                  dispatch({
                    type: 'TRIAL_RECIPE_SETRM_QTYNAMECHANGE',
                    basicRecipeIndex: brIndex,
                    rawMaterialIndex: stateRMIndex
                  });
                  dispatch({
                    type: 'TRIAL_RECIPE_SET_BR_CHANGE',
                    payload: brIndex,
                    changeType: 'ChangeInRMQtyName'
                  });
                }
              }
            });
          });
        }
      }

      if (newRawMaterialsInBasicRecipe.length > 0) {
        dispatch({
          type: 'TRIAL_RECIPE_SET_BR_CHANGE',
          payload: brIndex,
          changeType: 'NewRawMAdded'
        });
        const defaultRawMaterials = newRawMaterialsInBasicRecipe.filter(
          material => material._id === 'bennyRawMaterial'
        );

        if (defaultRawMaterials.length > 0) {
          dispatch({
            type: 'TRIAL_RECIPE_SET_BR_CHANGE',
            payload: brIndex,
            changeType: 'NewRawMWithDefaultAdded'
          });
          let basicRecipeDefaultRMObj = {};
          basicRecipeDefaultRMObj.basicRecipe = br._id;
          basicRecipeDefaultRMObj.defaultRMs = defaultRawMaterials;
          console.log(basicRecipeDefaultRMObj);
          dispatch({
            type: 'RECIPE_UPDATE_DEFAULTRM',
            payload: basicRecipeDefaultRMObj
          });
        } else {
          dispatch({
            type: 'TRIAL_RECIPE_SET_BR_CHANGE',
            payload: brIndex,
            changeType: 'NewRawMWithNoDefaultAdded'
          });
        }
      }
    });
    console.log('completed checking the basic recipes');
    dispatch({
      type: 'TRIAL_BASIC_RECIPE_CHANGE_CHECK_COMPLETE'
    });
  };
  return <div />;
};

export default InitiateTrialRecipeFlow;
