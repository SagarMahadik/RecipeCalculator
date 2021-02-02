import React, { useReducer, useEffect, useContext } from 'react';
import {
  dataContext,
  dataDispatchContext
} from 'Context/DataContext/dataContext.js';
import applicationReducer from 'Context/ApplicationContext/appllicationReducer.js';

import useRawMaterialRate from 'Hooks/APICalls/RawMaterials/useRawMaterialRate.js';
import useRawMaterials from 'Hooks/APICalls/RawMaterials/useRawMaterials.js';
import useBasicRecipes from 'Hooks/APICalls/BasicRecipes/useBasicRecipe.js';

import {
  ApplicationState,
  useApplicationState,
  useApplicationDispatch
} from 'Context/ApplicationContext/ApplicationState.js';

export let util = { validateRegistrationFields: null };

function DataState(props) {
  const initialState = {
    supplierDetails: [],
    rawMaterialDetails: [],
    rawMaterialRates: [],
    basicRecipesss: []
  };

  const [state, dispatch] = useReducer(applicationReducer, initialState);

  const {
    supplierDetails,
    rawMaterialDetails,
    rawMaterialRates,
    basicRecipess
  } = state;

  const { isAuthenticated, user } = useApplicationState();

  const { data: rawMaterialRate } = useRawMaterialRate();

  const { rawMaterials, rawMaterialFetchSuccess } = useRawMaterials();

  const { basicRecipes, basicRecipeFetchSuccess } = useBasicRecipes();

  useEffect(() => {
    if (rawMaterialFetchSuccess && rawMaterials.length > 0) {
      dispatch({ type: 'SET_RAWMATERIALS', payload: rawMaterials });
    }
  }, [rawMaterialFetchSuccess, rawMaterials]);

  useEffect(() => {
    if (basicRecipeFetchSuccess && basicRecipes.length > 0) {
      dispatch({ type: 'SET_BASICRECIPES', payload: basicRecipes });
    }
  }, [basicRecipeFetchSuccess, basicRecipes]);

  if (isAuthenticated) {
    return (
      <dataContext.Provider
        value={{
          supplierDetails,
          rawMaterialDetails,
          rawMaterialRates,
          basicRecipess
        }}
      >
        <dataDispatchContext.Provider value={dispatch}>
          {props.children}
        </dataDispatchContext.Provider>
      </dataContext.Provider>
    );
  }

  return true;
}

function useDataState() {
  const context = useContext(dataContext);

  if (context === undefined) {
    throw new Error('useDataState must be used within a CountProvider');
  }
  return context;
}

function useDataDispatch() {
  const context = useContext(dataDispatchContext);
  if (context === undefined) {
    throw new Error('useDataDispatch must be used within a CountProvider');
  }
  return context;
}

export { DataState, useDataState, useDataDispatch };
