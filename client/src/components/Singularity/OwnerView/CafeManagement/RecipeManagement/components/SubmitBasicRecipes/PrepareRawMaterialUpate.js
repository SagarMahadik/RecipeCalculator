import React, { useEffect, useContext } from 'react';

import {
  useRecipeDispatch,
  useRecipeState
} from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/RecipeManagementState.js';

import produce from 'immer';

import { applicationContext } from 'Context/ApplicationContext/applicationContext.js';

import axios from 'axios';

const PrepareRawMaterialUpate = () => {
  const { state, brRawMaterialUpdate } = useRecipeState();
  const dispatch = useRecipeDispatch();

  const ApplicationContext = useContext(applicationContext);

  const { userID, userBrandName } = ApplicationContext;

  useEffect(() => {
    console.log('in use effect');
    if (brRawMaterialUpdate) {
      prepareRawMaterialForUpdate(state);
    }
  }, [brRawMaterialUpdate]);

  useEffect(() => {
    if (
      state.defaultRMDataUploadComplete &&
      state.noOfDefaultRMUsed != 0 &&
      state.uploadedDefaultRM.length != 0 &&
      state.uploadedDefaultRM.length === state.noOfDefaultRMUsed
    ) {
      transformTheRecipeRawMaterials(state);
    }
  }, [
    state.defaultRMDataUploadComplete,
    state.uploadedDefaultRM,
    state.noOfDefaultRMUsed
  ]);

  const transformTheRecipeRawMaterials = state => {
    dispatch({
      type: 'TRANSFORM_RAWMATERIALS'
    });
  };

  const prepareRawMaterialForUpdate = state => {
    let defaultRawMaterials = state.recipeRawMaterials.filter(
      material => material._id === 'bennyRawMaterial'
    );

    dispatch({
      type: 'SET_NUMBER_OF_DEFULAT_RM_USED',
      payload: defaultRawMaterials.length
    });

    const addDefaultRawMaterialsDB = async (item, index) => {
      const body = JSON.stringify({
        userID,
        name: item.name,
        brandName: item.brandName,
        type: item.type,
        rate: item.rate,
        baseQuantity: item.baseQuantity,
        baseUnit: item.baseUnit,
        recipeUnit: item.recipeUnit,
        displayRateUnit: item.displayRateUnit
      });

      const config = {
        headers: {
          'Content-Type': 'application/JSON',
          Authorization: `Bearer ${localStorage.token}`
        }
      };

      const res = await axios.post(
        `/api/v1/rawMaterial/${userID}`,
        body,
        config
      );

      dispatch({
        type: 'CREATE_DEFAULTRMDATA',
        payload: res.data.data.data
      });
    };

    if (defaultRawMaterials.length > 0) {
      const arrayofPromises = defaultRawMaterials.map((item, index) => {
        addDefaultRawMaterialsDB(item, index);
      });

      Promise.all(arrayofPromises).then(() => {
        //makePostRequest(saveOption);
        dispatch({
          type: 'UPLOAD_DEFAULTRMDATA_COMPLETE'
        });
      });
    }

    if (defaultRawMaterials.length === 0 && state.noOfDefaultRMUsed === 0) {
      console.log('in a  br updateraw material');
      let updatedRAWM = produce(state, draftState => {
        if (!('multidelete' in Object.prototype)) {
          Object.defineProperty(Object.prototype, 'multidelete', {
            value: function() {
              for (var i = 0; i < arguments.length; i++) {
                delete this[arguments[i]];
              }
            }
          });
        }

        draftState.recipeRawMaterials.forEach(
          material => (material.rawmaterialdetails = material._id)
        );
        draftState.recipeRawMaterials.forEach(material =>
          material.multidelete(
            'brandName',
            'type',
            'name',
            'baseQuantity',
            'baseUnit',
            'recipeUnit',
            '__v'
          )
        );
        return draftState;
      });
      dispatch({
        type: 'BR_UPDATE_RAWMATERIALS',
        payload: updatedRAWM.recipeRawMaterials
      });
    }
  };
  return <div />;
};

export default PrepareRawMaterialUpate;
