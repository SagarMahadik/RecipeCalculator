import React, { useEffect } from 'react';

import {
  useApplicationState,
  useApplicationDispatch
} from 'Context/ApplicationContext/ApplicationState.js';

import { isEmpty, isInValidEmail } from 'Utils/validations';

const LoginValidations = () => {
  const {
    loginEmail,
    loginPassword,
    loginValidationInitiated,
    formValidated
  } = useApplicationState();
  const dispatch = useApplicationDispatch();

  useEffect(() => {
    if (loginValidationInitiated) {
      validateLoginFields(loginEmail, loginPassword);
    }
  }, [loginValidationInitiated]);

  const validateLoginFields = (loginEmail, loginPassword) => {
    console.log('Insider validate login');
    if (isEmpty(loginPassword)) {
      dispatch({
        type: 'SET_FRONTENDERROR',
        field: 'loginPassword'
      });
    }
    if (isEmpty(loginEmail)) {
      dispatch({
        type: 'SET_FRONTENDERROR',
        field: 'loginEmail'
      });
    }

    if (isInValidEmail(loginEmail) && !isEmpty(loginEmail)) {
      dispatch({
        type: 'SET_VALIDATIONERROR',
        field: 'loginEmail'
      });
    }

    if (
      !isEmpty(loginPassword) &&
      !isEmpty(loginEmail) &&
      !isInValidEmail(loginEmail)
    ) {
      dispatch({
        type: 'SET_FORMVALIDATIONCOMPLETE'
      });
    }

    setTimeout(() => dispatch({ type: 'REMOVE_FRONTENDERROR' }), 1500);
    setTimeout(() => dispatch({ type: 'REMOVE_VALIDATIONERROR' }), 1500);
    return true;
  };

  useEffect(() => {
    if (formValidated) {
      dispatch({
        type: 'INITIIATE_LOGINREQEST'
      });
    }
  }, [formValidated]);

  return <div />;
};

export default LoginValidations;
