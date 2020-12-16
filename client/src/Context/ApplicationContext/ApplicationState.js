import React, { useReducer, useEffect } from 'react';
import applicationContext from 'Context/ApplicationContext/applicationContext.js';
import applicationReducer from 'Context/ApplicationContext/appllicationReducer.js';
import {
  SET_LOADING,
  UPDATE_FIELD,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOAD_USER,
  SET_AUTHTOKEN,
  REMOVE_AUTHERROR,
  SET_FRONTENDERROR,
  REMOVE_FRONTENDERROR,
  SET_VALIDATIONERROR,
  REMOVE_VALIDATIONERROR,
  SET_FORMVALIDATIONCOMPLETE
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
    loginPassword: '',
    categoryData: [],
    dMenuProductData: [],
    selectedCategory: '',
    loading: true,
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null,
    authComplete: false,
    authTokenFlag: false,
    authError: false,
    errorMessage: '',
    frontEndError: {
      loginEmail: false,
      loginPassword: false
    },
    validationError: {
      loginEmail: false
    },
    formValidated: false
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
    formValidated
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
      dispatch({
        type: LOGIN_FAIL,
        message: err.response.data.message
      });

      setTimeout(() => dispatch({ type: REMOVE_AUTHERROR }), 2000);
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
    if (loginPassword == '') {
      dispatch({
        type: SET_FRONTENDERROR,
        field: 'loginPassword'
      });
    }
    if (loginEmail == '') {
      dispatch({
        type: SET_FRONTENDERROR,
        field: 'loginEmail'
      });
    }

    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    if (!pattern.test(loginEmail) && loginEmail !== '') {
      dispatch({
        type: SET_VALIDATIONERROR,
        field: 'loginEmail'
      });
    }

    if (loginPassword !== '' && loginEmail !== '' && pattern.test(loginEmail)) {
      dispatch({
        type: SET_FORMVALIDATIONCOMPLETE
      });
    }
    setTimeout(() => dispatch({ type: REMOVE_FRONTENDERROR }), 1500);
    setTimeout(() => dispatch({ type: REMOVE_VALIDATIONERROR }), 1500);
  };

  const registerUser = e => {
    addUserToDB(brandName, mobileNumber, email, password, passwordConfirm);
  };

  const loginUser = e => {
    setLoading();
    validateFields(loginEmail, loginPassword);
    if (formValidated) {
      makeLoginRequest(loginEmail, loginPassword);
    }
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
