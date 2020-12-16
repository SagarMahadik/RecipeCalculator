import React, { useReducer, useEffect } from 'react';
import applicationContext from 'Context/ApplicationContext/applicationContext.js';
import applicationReducer from 'Context/ApplicationContext/appllicationReducer.js';
import {
  SET_LOADING,
  UPDATE_FIELD,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAIL,
  LOGIN_SUCCESS,
  LOAD_USER,
  SET_AUTHTOKEN
} from 'Context/ApplicationContext/types.js';
import { useHttpClient } from 'Hooks/httpsHooks';
import { useAuthRequest } from './APIrequests/login';

import axios from 'axios';

import setAuthToken from 'Utils/setAuthToken.js';

const ApplicationState = props => {
  const initialState = {
    brandname: '',
    mobileNumber: '',
    email: '',
    password: '',
    passwordConfirm: '',
    loginEmail: '',
    loginpassword: '',
    categoryData: [],
    dMenuProductData: [],
    selectedCategory: '',
    loading: true,
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null,
    authComplete: false,
    authTokenFlag: false
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
    authTokenFlag
  } = state;

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

  const setLoading = () => dispatch({ type: SET_LOADING });

  const setAuthTokenFlag = () => dispatch({ type: SET_AUTHTOKEN });

  const addUserToDB = async (
    brandName,
    mobileNumber,
    email,
    password,
    passwordConfirm
  ) => {
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

    const res = await axios.post('/api/v1/users/signup', body, config);

    localStorage.setItem('token', res.data.token);

    dispatch({
      type: REGISTRATION_SUCCESS,
      data: res.data.data.user
    });
  };

  const makeLoginRequest = async (loginEmail, loginPassword) => {
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
      console.log(err.response);
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

  const registerUser = e => {
    addUserToDB(brandName, mobileNumber, email, password, passwordConfirm);
  };

  const loginUser = e => {
    setLoading();
    makeLoginRequest(loginEmail, loginPassword);
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
