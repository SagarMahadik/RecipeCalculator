import React, { useReducer, useEffect } from 'react';
import addProductContext from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/AddProduct/State/addProductContext.js';
import addProductReducer from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/AddProduct/State/addProductReducer.js';
import {
  SET_CATEGORYDATA,
  UPDATE_FIELD,
  SET_LOADING,
  SET_SLECTEDCATEGORY,
  SET_SUBCATEGORY,
  SHOW_LOADER,
  COMPLETE_FORM
} from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/AddProduct/State/types.js';

import { useHttpClient } from 'Hooks/httpsHooks';

import axios from 'axios';

const AddProductState = props => {
  const initialState = {
    category: 'Cakes',
    subCategory: 'Naked Cake',
    productName: '',
    isCategory: false,
    productPrice: '',
    cuisine: '',
    loading: false,
    categoryData: [],
    isSubCategory: false,
    selectedCategory: '',
    isComplete: false,
    showLoader: false
  };

  const [state, dispatch] = useReducer(addProductReducer, initialState);

  const {
    category,
    subCategory,
    productName,
    isCategory,
    productPrice,
    loading,
    categoryData,
    isSubCategory,
    selectedCategory,
    isComplete,
    showLoader,
    cuisine
  } = state;

  useEffect(() => {
    getData('/api/v1/category');
  }, []);

  const addDataToDB = async (
    category,
    subCategory,
    productName,
    productPrice,
    cuisine
  ) => {
    const body = JSON.stringify({
      category,
      subCategory,
      productName,
      productPrice,
      cuisine
    });

    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };
    const res = await axios.post('/api/v1/dMenuProduct', body, config);
    setLoading();
    console.log(res);
    if (res.data.status === 'success') {
      dispatch({
        type: COMPLETE_FORM
      });
    }
  };

  const { sendRequest, error } = useHttpClient();

  const getData = async url => {
    try {
      let res = await sendRequest(url);

      dispatch({
        type: SET_CATEGORYDATA,
        payload: res
      });
    } catch (err) {}
  };

  const setLoading = () => dispatch({ type: SET_LOADING });
  const setShowLoader = () => dispatch({ type: SHOW_LOADER });

  const handleSelectedCategory = e => {
    const value = e.currentTarget.value;

    const selectedCategory1 = state.categoryData.filter(c => {
      return c.category === value;
    });

    let IsSubcategory = false;

    if (
      selectedCategory1.length > 0 &&
      selectedCategory1[0].subCategory.length > 0
    ) {
      IsSubcategory = true;
    } else IsSubcategory = false;
    dispatch({
      type: SET_SLECTEDCATEGORY,
      payload: {
        value2: value,
        data: selectedCategory1,
        condition: IsSubcategory
      }
    });
  };

  const setSubCategory = e => {
    const value = e.currentTarget.value;
    console.log(value);

    dispatch({
      type: SET_SUBCATEGORY,
      payload: {
        data: value
      }
    });
  };

  const handleChangeFor = input => e => {
    {
      dispatch({
        type: UPDATE_FIELD,
        payload: { input, value: e.target.value }
      });
    }
  };

  const initiateSubmit = e => {
    e.preventDefault();
    setShowLoader();
    addDataToDB(category, subCategory, productName, productPrice, cuisine);
  };

  return (
    <addProductContext.Provider
      value={{
        category,
        subCategory,
        productName,
        isCategory,
        productPrice,
        cuisine,
        loading,
        categoryData,
        isSubCategory,
        selectedCategory,
        isComplete,
        showLoader,
        setLoading,
        setShowLoader,
        handleSelectedCategory,
        setSubCategory,
        handleChangeFor,
        initiateSubmit
      }}
    >
      {props.children}
    </addProductContext.Provider>
  );
};

export default AddProductState;
