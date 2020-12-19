import React, { useReducer, useEffect } from 'react';
import applicationContext from 'Context/ApplicationContext/applicationContext.js';
import applicationReducer from 'Context/ApplicationContext/appllicationReducer.js';
import {
  SET_LOADING,
  UPDATE_FIELD,
  REGISTRATION_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOAD_USER,
  SET_AUTHTOKEN,
  REMOVE_AUTHERROR,
  SET_FRONTENDERROR,
  REMOVE_FRONTENDERROR,
  SET_VALIDATIONERROR,
  REMOVE_VALIDATIONERROR,
  SET_FORMVALIDATIONCOMPLETE,
  SET_REGISTERFORMVALIDATIONCOMPLETE,
  LOGIN_VALIDATIONINITIATED,
  SENDING_LOGINREQUEST,
  REGISTRATION_VALIDATIONINITIATED,
  SENDING_REGISTRATIONREQUEST
} from 'Context/ApplicationContext/types.js';
import { useHttpClient } from 'Hooks/httpsHooks';

import axios from 'axios';

import setAuthToken from 'Utils/setAuthToken.js';

import {
  isEmpty,
  isInValidEmail,
  isInValidIndianMobileNumber,
  isNotMinLength,
  areNotSame
} from 'Utils/validations.js';

export let util = { validateRegistrationFields: null };

export const ApplicationState = props => {
  const initialState = {
    brandName: '',
    mobileNumber: '',
    email: '',
    password: '',
    passwordConfirm: '',
    loginEmail: '',
    loginPassword: '',
    categoryData: [],
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
    sendingRegRequest: false
  };

  const [state, dispatch] = useReducer(applicationReducer, initialState);

  const {
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
    errorMessage,
    frontEndError,
    validationError,
    formValidated,
    registrationFromValidated,
    loginValidationInitiated,
    regValIntitiated,
    sendingLoginRequest,
    sendingRegRequest
  } = state;

  useEffect(() => {
    if (categoryData.length === 1) {
      getData('/api/v1/category', 'SET_CATEGORYDATA');
    }
  }, []);

  useEffect(() => {
    if (dMenuProductData.length === 1) {
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

  const setLoading = () => dispatch({ type: SET_LOADING });

  const setAuthTokenFlag = () => dispatch({ type: SET_AUTHTOKEN });

  const addUserToDB = async (
    brandName,
    mobileNumber,
    email,
    password,
    passwordConfirm
  ) => {
    dispatch({
      type: SENDING_REGISTRATIONREQUEST
    });
    const body = JSON.stringify({
      brandName,
      mobileNumber,
      email,
      password,
      passwordConfirm
    });

    console.log(body);
    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };

    try {
      const res = await axios.post('/api/v1/users/signup', body, config);

      localStorage.setItem('token', res.data.token);

      dispatch({
        type: REGISTRATION_SUCCESS,
        data: res.data.data.user
      });
    } catch (err) {
      console.log(err);
    }
  };

  const makeLoginRequest = async (loginEmail, loginPassword) => {
    dispatch({
      type: SENDING_LOGINREQUEST
    });
    const body = JSON.stringify({
      email: loginEmail,
      password: loginPassword
    });

    console.log(body);
    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };
    try {
      const res = await axios.post('/api/v1/users/login', body, config);
      console.log(res);
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        data: res.data.data.user
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: LOGIN_FAIL,
        message: err.response.data.message
      });

      setTimeout(() => dispatch({ type: REMOVE_AUTHERROR }), 3000);
    }
  };

  const handleChangeFor = input => e => {
    {
      dispatch({
        type: UPDATE_FIELD,
        payload: { input, value: e.target.value }
      });
    }
  };

  const validateFields = (loginEmail, loginPassword) => {
    console.log('in validate');
    dispatch({
      type: LOGIN_VALIDATIONINITIATED
    });
    if (isEmpty(loginPassword)) {
      dispatch({
        type: SET_FRONTENDERROR,
        field: 'loginPassword'
      });
    }
    if (isEmpty(loginEmail)) {
      dispatch({
        type: SET_FRONTENDERROR,
        field: 'loginEmail'
      });
    }

    if (isInValidEmail(loginEmail) && !isEmpty(loginEmail)) {
      dispatch({
        type: SET_VALIDATIONERROR,
        field: 'loginEmail'
      });
    }

    if (
      !isEmpty(loginPassword) &&
      !isEmpty(loginEmail) &&
      !isInValidEmail(loginEmail)
    ) {
      dispatch({
        type: SET_FORMVALIDATIONCOMPLETE
      });
    }

    setTimeout(() => dispatch({ type: REMOVE_FRONTENDERROR }), 1500);
    setTimeout(() => dispatch({ type: REMOVE_VALIDATIONERROR }), 1500);
    return true;
  };

  const validateRegistrationFields = (
    brandName,
    mobileNumber,
    email,
    password,
    passwordConfirm
  ) => {
    dispatch({
      type: REGISTRATION_VALIDATIONINITIATED
    });
    if (isEmpty(brandName)) {
      dispatch({
        type: SET_FRONTENDERROR,
        field: 'brandName'
      });
    }
    if (isEmpty(mobileNumber)) {
      dispatch({
        type: SET_FRONTENDERROR,
        field: 'mobileNumber'
      });
    }
    if (isEmpty(email)) {
      dispatch({
        type: SET_FRONTENDERROR,
        field: 'email'
      });
    }
    if (isEmpty(password)) {
      dispatch({
        type: SET_FRONTENDERROR,
        field: 'password'
      });
    }
    if (isEmpty(passwordConfirm)) {
      dispatch({
        type: SET_FRONTENDERROR,
        field: 'passwordConfirm'
      });
    }
    if (isInValidIndianMobileNumber(mobileNumber) && !isEmpty(mobileNumber)) {
      dispatch({
        type: SET_VALIDATIONERROR,
        field: 'mobileNumber'
      });
    }

    if (isInValidEmail(email) && !isEmpty(email)) {
      dispatch({
        type: SET_VALIDATIONERROR,
        field: 'email'
      });
    }
    if (isNotMinLength(password, 8) && !isEmpty(password)) {
      dispatch({
        type: SET_VALIDATIONERROR,
        field: 'password'
      });
    }

    if (
      areNotSame(password, passwordConfirm) &&
      !isEmpty(password) &&
      !isEmpty(passwordConfirm)
    ) {
      dispatch({
        type: SET_VALIDATIONERROR,
        field: 'passwordConfirm'
      });
    }
    setTimeout(() => dispatch({ type: REMOVE_FRONTENDERROR }), 2500);
    setTimeout(() => dispatch({ type: REMOVE_VALIDATIONERROR }), 2500);
    if (
      !isEmpty(email) &&
      !isEmpty(mobileNumber) &&
      !isEmpty(password) &&
      !isEmpty(passwordConfirm) &&
      !isEmpty(brandName) &&
      !isInValidEmail(email) &&
      !isInValidIndianMobileNumber(mobileNumber) &&
      !areNotSame(passwordConfirm, password) &&
      !isNotMinLength(password, 8)
    ) {
      dispatch({
        type: SET_REGISTERFORMVALIDATIONCOMPLETE
      });
    }
  };

  const registerUser = e => {
    setLoading();
    validateRegistrationFields(
      brandName,
      mobileNumber,
      email,
      password,
      passwordConfirm
    );
  };

  useEffect(() => {
    if (registrationFromValidated) {
      addUserToDB(brandName, mobileNumber, email, password, passwordConfirm);
    }
  }, [registrationFromValidated]);

  useEffect(() => {
    if (formValidated) {
      makeLoginRequest(loginEmail, loginPassword);
    }
  }, [formValidated]);

  const loginUser = e => {
    setLoading();
    validateFields(loginEmail, loginPassword);
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
        payload: res
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <applicationContext.Provider
      value={{
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
        errorMessage,
        frontEndError,
        validationError,
        formValidated,
        loginValidationInitiated,
        regValIntitiated,
        sendingLoginRequest,
        sendingRegRequest,
        registrationFromValidated,
        handleChangeFor,
        registerUser,
        loginUser,
        loadUser
      }}
    >
      {props.children}
    </applicationContext.Provider>
  );
};

export default ApplicationState;
