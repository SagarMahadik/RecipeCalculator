import React, { useEffect } from 'react';

import {
  useApplicationState,
  useApplicationDispatch
} from 'Context/ApplicationContext/ApplicationState.js';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

import { isEmpty, isInValidEmail } from 'Utils/validations';

const LoginValidations = () => {
  const {
    loginEmail,
    loginPassword,
    loginValidationInitiated,
    formValidated,
    loginRequiredFields
  } = useApplicationState();
  const dispatch = useApplicationDispatch();
  const ApplicationContext = useApplicationState();

  const { sendStepStatusRequest, stepStatusError } = useStepStatusRequest();

  useEffect(() => {
    if (loginValidationInitiated) {
      validateLoginFields(loginEmail, loginPassword);
    }
  }, [loginValidationInitiated]);

  const validateLoginFields = (loginEmail, loginPassword) => {
    loginRequiredFields.map(requiredField => {
      if (isEmpty(ApplicationContext[requiredField])) {
        return dispatch({
          type: 'SET_FRONTENDERROR',
          field: `${requiredField}`
        });
      }
    });

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
      sendStepStatusRequest(
        `${loginEmail}`,
        `login form validations successful for ${loginEmail}`,
        'success'
      );
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
