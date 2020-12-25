import React from 'react';

import { LoginContainer } from 'styles/Singularity/OwnerView/Authentication/index.js';

import Login from 'components/Singularity/OwnerView/Authentication/Components/Login/Login.js';
import LoginValidations from 'components/Singularity/OwnerView/Authentication/Components/Login/LoginValidations.js';
import LoginRequest from 'components/Singularity/OwnerView/Authentication/Components/Login/LoginRequest.js';

const LoginMainComponent = () => {
  return (
    <LoginContainer>
      <Login />
      <LoginValidations />
      <LoginRequest />
    </LoginContainer>
  );
};

export default LoginMainComponent;
