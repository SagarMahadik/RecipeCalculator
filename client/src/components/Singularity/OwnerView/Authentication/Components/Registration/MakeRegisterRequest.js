import React, { useEffect } from 'react';

import {
  useApplicationState,
  useApplicationDispatch
} from 'Context/ApplicationContext/ApplicationState.js';

import axios from 'axios';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

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

  const { sendStepStatusRequest } = useStepStatusRequest();

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

    sendStepStatusRequest(
      `${mobileNumber}`,
      `Initiated registration request for ${mobileNumber}`,
      'success'
    );
    const body = JSON.stringify({
      brandName,
      mobileNumber,
      email,
      password,
      passwordConfirm,
      userID: mobileNumber
    });

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

      sendStepStatusRequest(
        `${mobileNumber}`,
        `Registration successful for ${mobileNumber}`,
        'success'
      );
    } catch (err) {
      dispatch({
        type: 'REGISTRATION_FAIL',
        message: err.response.data.message
      });
      sendStepStatusRequest(
        `${mobileNumber}`,
        `Registration failed for ${mobileNumber}`,
        'failure'
      );
    }
  };

  return <div />;
};

export default MakeRegisterRequest;
