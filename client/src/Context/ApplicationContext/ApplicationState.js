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

import setAuthToken from 'Utils/setAuthToken.js';

export let util = { validateRegistrationFields: null };

function ApplicationState(props) {
  const initialState = {
    userID: '',
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
    dMenuProductData: [],
    selectedCategory: '',
    loading: false,
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null,
    authComplete: false,
    authTokenFlag: false,
    authError: false,
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
    fetchAppData: false
  };

  const [state, dispatch] = useReducer(applicationReducer, initialState);

  const {
    userID,
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
    initiateLoginRequest,
    initiateRegRequest,
    fetchAppData,
    supplierDetails
  } = state;

  useEffect(() => {
    if (fetchAppData) {
      console.log('In fetchdata');
      getData(`/api/v1/supplier/${userID}`, 'SET_SUPPLIERDETAILS');
    }
  }, [fetchAppData]);

  const { sendRequest, error } = useHttpClient();
  const { sendStepStatusRequest, stepStatusError } = useStepStatusRequest();

  const getData = async (url, typeString) => {
    try {
      let res = await sendRequest(url);

      dispatch({
        type: `${typeString}`,
        payload: res
      });
    } catch (err) {}
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
    setLoading();
    dispatch({
      type: 'REGISTRATION_VALIDATIONINITIATED'
    });
  };

  const loginUser = e => {
    setLoading();
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
      console.log(res);
      dispatch({
        type: LOAD_USER,
        payload: res.data
      });

      const stepREs = sendStepStatusRequest(
        `${res.data.userID}`,
        'AUTH_SUCCESS',
        'success'
      );
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: 'LOADING_USER_FAILED'
      });
    }
  };

  return (
    <applicationContext.Provider
      value={{
        userID,
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
        initiateLoginRequest,
        initiateRegRequest,
        loginRequiredFields,
        registrationRequiredFields,
        supplierDetails,
        handleChangeFor,
        registerUser,
        loginUser,
        loadUser
      }}
    >
      <applicationDispatchContext.Provider value={dispatch}>
        {props.children}
      </applicationDispatchContext.Provider>
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
