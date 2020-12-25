import React, { useEffect } from 'react';
import {
  useApplicationState,
  useApplicationDispatch
} from 'Context/ApplicationContext/ApplicationState.js';

import axios from 'axios';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

const LoginRequest = () => {
  const {
    initiateLoginRequest,
    loginEmail,
    loginPassword
  } = useApplicationState();
  const dispatch = useApplicationDispatch();

  const { sendStepStatusRequest, stepStatusError } = useStepStatusRequest();

  useEffect(() => {
    if (initiateLoginRequest) {
      makeLoginRequest(loginEmail, loginPassword);
    }
  }, [initiateLoginRequest]);

  const makeLoginRequest = async (loginEmail, loginPassword) => {
    dispatch({
      type: 'SENDING_LOGINREQUEST'
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
        type: 'LOGIN_SUCCESS',
        data: res.data.data.user
      });

      const stepREs = sendStepStatusRequest(
        'sytem',
        'LOGIN_SUCCESS',
        'success'
      );
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'LOGIN_FAIL',
        message: err.response.data.message
      });

      const stepREs = sendStepStatusRequest('sytem', 'LOGIN_FAIL', 'fail');

      setTimeout(() => dispatch({ type: 'REMOVE_AUTHERROR' }), 3000);
    }
  };

  return <div />;
};

export default LoginRequest;
