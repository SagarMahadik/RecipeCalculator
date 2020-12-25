import React, { useEffect } from 'react';

import {
  useApplicationState,
  useApplicationDispatch
} from 'Context/ApplicationContext/ApplicationState.js';

import {
  isEmpty,
  isInValidEmail,
  isInValidIndianMobileNumber,
  isNotMinLength,
  areNotSame
} from 'Utils/validations.js';

const RegisterValidations = () => {
  const {
    regValIntitiated,
    brandName,
    mobileNumber,
    email,
    password,
    passwordConfirm,
    registrationFromValidated
  } = useApplicationState();
  const dispatch = useApplicationDispatch();

  useEffect(() => {
    if (regValIntitiated) {
      validateRegistrationFields(
        brandName,
        mobileNumber,
        email,
        password,
        passwordConfirm
      );
    }
  }, [regValIntitiated]);

  const validateRegistrationFields = (
    brandName,
    mobileNumber,
    email,
    password,
    passwordConfirm
  ) => {
    dispatch({
      type: 'REGISTRATION_VALIDATIONINITIATED'
    });
    if (isEmpty(brandName)) {
      dispatch({
        type: 'SET_FRONTENDERROR',
        field: 'brandName'
      });
    }
    if (isEmpty(mobileNumber)) {
      dispatch({
        type: 'SET_FRONTENDERROR',
        field: 'mobileNumber'
      });
    }
    if (isEmpty(email)) {
      dispatch({
        type: 'SET_FRONTENDERROR',
        field: 'email'
      });
    }
    if (isEmpty(password)) {
      dispatch({
        type: 'SET_FRONTENDERROR',
        field: 'password'
      });
    }
    if (isEmpty(passwordConfirm)) {
      dispatch({
        type: 'SET_FRONTENDERROR',
        field: 'passwordConfirm'
      });
    }
    if (isInValidIndianMobileNumber(mobileNumber) && !isEmpty(mobileNumber)) {
      dispatch({
        type: 'SET_VALIDATIONERROR',
        field: 'mobileNumber'
      });
    }

    if (isInValidEmail(email) && !isEmpty(email)) {
      dispatch({
        type: 'SET_VALIDATIONERROR',
        field: 'email'
      });
    }
    if (isNotMinLength(password, 8) && !isEmpty(password)) {
      dispatch({
        type: 'SET_VALIDATIONERROR',
        field: 'password'
      });
    }

    if (
      areNotSame(password, passwordConfirm) &&
      !isEmpty(password) &&
      !isEmpty(passwordConfirm)
    ) {
      dispatch({
        type: 'SET_VALIDATIONERROR',
        field: 'passwordConfirm'
      });
    }
    setTimeout(() => dispatch({ type: 'REMOVE_FRONTENDERROR' }), 2500);
    setTimeout(() => dispatch({ type: 'REMOVE_VALIDATIONERROR' }), 2500);
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
        type: 'SET_REGISTERFORMVALIDATIONCOMPLETE'
      });
    }
  };
  useEffect(() => {
    if (registrationFromValidated) {
      dispatch({
        type: 'INITIIATE_REGISTRATIONREQEST'
      });
    }
  }, [registrationFromValidated]);
  return <div />;
};

export default RegisterValidations;
