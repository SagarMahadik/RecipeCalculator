import React, { useEffect } from 'react';

import {
  useApplicationState,
  useApplicationDispatch
} from 'Context/ApplicationContext/ApplicationState.js';

import axios from 'axios';

const MakeRegisterRequest = () => {
  const {
    initiateRegRequest,
    brandName,
    mobileNumber,
    email,
    password,
    passwordConfirm
  } = useApplicationState();
  const dispatch = useApplicationDispatch();

  useEffect(() => {
    if (initiateRegRequest) {
      addUserToDB(brandName, mobileNumber, email, password, passwordConfirm);
    }
  }, [initiateRegRequest]);

  const addUserToDB = async (
    brandName,
    mobileNumber,
    email,
    password,
    passwordConfirm
  ) => {
    dispatch({
      type: 'SENDING_REGISTRATIONREQUEST'
    });
    const body = JSON.stringify({
      brandName,
      mobileNumber,
      email,
      password,
      passwordConfirm,
      userID: mobileNumber
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
        type: 'REGISTRATION_SUCCESS',
        data: res.data.data.user
      });
    } catch (err) {
      console.log(err.response.data.message);

      dispatch({
        type: 'REGISTRATION_FAIL',
        message: err.response.data.message
      });
    }
  };

  return <div />;
};

export default MakeRegisterRequest;
