import React, { useReducer, useEffect, useContext } from 'react';
import {
  applicationContext,
  applicationDispatchContext
} from 'Context/ApplicationContext/applicationContext.js';
import applicationReducer from 'Context/ApplicationContext/appllicationReducer.js';
import {
  SET_LOADING,
  UPDATE_FIELD,
  LOAD_USER,
  SET_AUTHTOKEN
} from 'Context/ApplicationContext/types.js';

import { useHttpClient } from 'Hooks/httpsHooks';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

import axios from 'axios';

import { submitVibrations } from 'Utils/vibrations';

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { whiteTheme } from 'styles/StylesLibrary/Themes/whiteTheme.js';

import { darkTheme } from 'styles/StylesLibrary/Themes/darkTheme.js';

import setAuthToken from 'Utils/setAuthToken.js';

import useRawMaterialRate from 'Hooks/APICalls/RawMaterials/useRawMaterialRate.js';
import useRawMaterials from 'Hooks/APICalls/RawMaterials/useRawMaterials.js';
import useBasicRecipes from 'Hooks/APICalls/BasicRecipes/useBasicRecipe.js';
import useRecipes from 'Hooks/APICalls/Recipes/useRecipes.js';

export let util = { validateRegistrationFields: null };

function ApplicationState(props) {
  const initialState = {
    userID: '',
    theme: 'white',
    userBrandName: '',
    brandName: '',
    mobileNumber: '',
    email: '',
    password: '',
    passwordConfirm: '',
    loginEmail: '',
    loginPassword: '',
    categoryData: [],
    supplierDetails: [],
    rawMaterialDetails: [],
    rawMaterialRates: [],
    basicRecipes: [],
    recipes: [],
    dMenuProductData: [],
    selectedCategory: '',
    loading: false,
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null,
    authComplete: false,
    authTokenFlag: false,
    authError: false,
    registrationError: false,
    errorMessage: '',
    loginRequiredFields: ['loginEmail', 'loginPassword'],
    registrationRequiredFields: [
      'email',
      'brandName',
      'mobileNumber',
      'password',
      'passwordConfirm'
    ],
    frontEndError: {
      loginEmail: false,
      loginPassword: false,
      email: false,
      password: false,
      passwordConfirm: false,
      brandName: false,
      mobileNumber: false
    },
    validationError: {
      loginEmail: false,
      mobileNumber: false,
      password: false,
      passwordConfirm: false
    },
    formValidated: false,
    registrationFromValidated: false,
    loginValidationInitiated: false,
    regValIntitiated: false,
    sendingLoginRequest: false,
    sendingRegRequest: false,
    customerMatchLogin: false,
    initiateLoginRequest: false,
    initiateRegRequest: false,
    fetchAppData: false,
    supplierDetailsLoaded: false,
    rawMaterialDetailsLoaded: false,
    basicRecipesLoaded: false,
    playWelcomTone: false,
    welcomeTonePlayedCount: 0
  };

  const [state, dispatch] = useReducer(applicationReducer, initialState);

  const {
    userID,
    theme,
    userBrandName,
    brandName,
    mobileNumber,
    email,
    password,
    passwordConfirm,
    loginEmail,
    loginPassword,
    categoryData,
    dMenuProductData,
    selectedCategory,
    loading,
    isAuthenticated,
    user,
    authComplete,
    authTokenFlag,
    authError,
    loginRequiredFields,
    registrationRequiredFields,
    errorMessage,
    frontEndError,
    validationError,
    formValidated,
    registrationFromValidated,
    loginValidationInitiated,
    regValIntitiated,
    sendingLoginRequest,
    sendingRegRequest,
    customerMatchLogin,
    loginSuccess,
    regSuccess,
    loginFail,
    registrationError,
    initiateLoginRequest,
    initiateRegRequest,
    fetchAppData,
    supplierDetails,
    supplierDetailsLoaded,
    rawMaterialDetails,
    rawMaterialDetailsLoaded,
    rawMaterialRates,
    basicRecipes,
    basicRecipesLoaded,
    recipes,
    playWelcomTone,
    welcomeTonePlayedCount
  } = state;

  const { data: rawMaterialRate } = useRawMaterialRate(userID);

  const { rawMaterials, rawMaterialFetchSuccess } = useRawMaterials(userID);

  const { basicRecipes: data, basicRecipeFetchSuccess } = useBasicRecipes(
    userID
  );

  const { appRecipes, recipeFetchSuccess, isError, error } = useRecipes(userID);

  useEffect(() => {
    if (rawMaterialFetchSuccess && rawMaterials.length > 0) {
      dispatch({ type: 'SET_RAWMATERIALS', payload: rawMaterials });
    }
  }, [rawMaterialFetchSuccess, rawMaterials]);

  useEffect(() => {
    if (basicRecipeFetchSuccess && data.length > 0) {
      dispatch({ type: 'SET_BASICRECIPES', payload: data });
    }
  }, [basicRecipeFetchSuccess, data]);
  useEffect(() => {
    if (recipeFetchSuccess && appRecipes.length > 0) {
      dispatch({ type: 'SET_RECIPES', payload: appRecipes });
    }
  }, [recipeFetchSuccess, appRecipes]);

  useEffect(() => {
    if (fetchAppData) {
      //getData(`/api/v1/supplier/${userID}`, 'SET_SUPPLIERDETAILS', 'supplier');
      /**
      *       getData(
        `/api/v1/rawMaterial/${userID}`,
        'SET_RAWMATERIALS',
        'raw Material'
      );
      */
      /**
       *       getData(
        `/api/v1/basicRecipe/${userID}`,
        'SET_BASICRECIPES',
        'basic recipe'
      );
       */
      //getData(`/api/v1/recipe/${userID}`, 'SET_RECIPES', 'recipe');
      /**
       *       getData(
        `/api/v1/rawMaterial/9921514875/rate`,
        'SET_RAWMATERIALRATE',
        'raw Material rates'
      );
       */
    }
  }, [fetchAppData]);

  const { sendRequest } = useHttpClient();
  const { sendStepStatusRequest } = useStepStatusRequest();

  const getData = async (url, typeString, module) => {
    try {
      let res = await sendRequest(url);

      dispatch({
        type: `${typeString}`,
        payload: res
      });

      sendStepStatusRequest(
        `${userID}`,
        `Successfully fecthed ${module} data for ${userID}`,
        'success'
      );
    } catch (err) {
      sendStepStatusRequest(
        `${userID}`,
        `Fetching ${module} data failed for ${userID}`,
        'failure'
      );
    }
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const setAuthTokenFlag = () => dispatch({ type: SET_AUTHTOKEN });

  const handleChangeFor = input => e => {
    dispatch({
      type: UPDATE_FIELD,
      payload: { input, value: e.target.value }
    });
  };

  const registerUser = e => {
    submitVibrations();
    setLoading();
    sendStepStatusRequest(
      `${mobileNumber}`,
      `Initiating Registration validations for ${mobileNumber}`,
      'success'
    );
    dispatch({
      type: 'REGISTRATION_VALIDATIONINITIATED'
    });
  };

  const loginUser = e => {
    submitVibrations();
    setLoading();
    sendStepStatusRequest(
      `${loginEmail}`,
      `Initiating login validations for ${loginEmail}`,
      'success'
    );
    dispatch({
      type: 'LOGIN_VALIDATIONINITIATED'
    });
  };

  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      setAuthTokenFlag();
    }
    setLoading();
    try {
      const res = await axios.get('/api/v1/users/auth');

      dispatch({
        type: LOAD_USER,
        payload: res.data
      });

      sendStepStatusRequest(
        `${res.data.userID}`,
        `Authentication succesful for ${res.data.userID}`,
        'success'
      );
    } catch (err) {
      sendStepStatusRequest(`Authentication failed`, 'success');
      dispatch({
        type: 'LOADING_USER_FAILED'
      });
    }
  };

  return (
    <applicationContext.Provider
      value={{
        userID,
        theme,
        brandName,
        userBrandName,
        mobileNumber,
        email,
        password,
        passwordConfirm,
        loginEmail,
        loginPassword,
        categoryData,
        dMenuProductData,
        selectedCategory,
        loading,
        isAuthenticated,
        user,
        authComplete,
        authTokenFlag,
        authError,
        errorMessage,
        frontEndError,
        validationError,
        formValidated,
        loginValidationInitiated,
        regValIntitiated,
        sendingLoginRequest,
        sendingRegRequest,
        registrationFromValidated,
        customerMatchLogin,
        registrationError,
        initiateLoginRequest,
        initiateRegRequest,
        loginRequiredFields,
        registrationRequiredFields,
        supplierDetails,
        supplierDetailsLoaded,
        rawMaterialDetails,
        rawMaterialDetailsLoaded,
        basicRecipes,
        basicRecipesLoaded,
        playWelcomTone,
        welcomeTonePlayedCount,
        recipes,
        rawMaterialRates,
        handleChangeFor,
        registerUser,
        loginUser,
        loadUser
      }}
    >
      <ThemeProvider theme={theme === 'white' ? whiteTheme : darkTheme}>
        <applicationDispatchContext.Provider value={dispatch}>
          {props.children}
        </applicationDispatchContext.Provider>
      </ThemeProvider>
    </applicationContext.Provider>
  );
}

function useApplicationState() {
  const context = useContext(applicationContext);

  if (context === undefined) {
    throw new Error('useApplicationState must be used within a CountProvider');
  }
  return context;
}

function useApplicationDispatch() {
  const context = useContext(applicationDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useApplicationDispatch must be used within a CountProvider'
    );
  }
  return context;
}

export { ApplicationState, useApplicationState, useApplicationDispatch };
