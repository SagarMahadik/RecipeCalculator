import React, { useReducer, useEffect } from 'react';
import applicationContext from 'Context/ApplicationContext/applicationContext.js';
import applicationReducer from 'Context/ApplicationContext/appllicationReducer.js';

import { useHttpClient } from 'Hooks/httpsHooks';

const ApplicationState = props => {
  const initialState = {
    categoryData: [],
    dMenuProductData: [],
    selectedCategory: '',
    loading: false
  };

  const [state, dispatch] = useReducer(applicationReducer, initialState);

  const { categoryData, dMenuProductData, selectedCategory, loading } = state;

  useEffect(() => {
    if (categoryData.length === 0) {
      getData('/api/v1/category', 'SET_CATEGORYDATA');
    }
  }, []);

  useEffect(() => {
    if (dMenuProductData.length === 0) {
      getData('/api/v1/dMenuProduct', 'SET_DMENUPRODUCTDATA');
    }
  }, []);

  const { sendRequest, error } = useHttpClient();

  const getData = async (url, typeString) => {
    try {
      let res = await sendRequest(url);

      dispatch({
        type: `${typeString}`,
        payload: res
      });
    } catch (err) {}
  };

  return (
    <applicationContext.Provider
      value={{
        categoryData,
        dMenuProductData,
        selectedCategory,
        loading
      }}
    >
      {props.children}
    </applicationContext.Provider>
  );
};

export default ApplicationState;
