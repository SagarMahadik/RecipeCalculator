import React, { useContext, useEffect } from 'react';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';
import StyledSubmitButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledSubmitButton.js';
import AppStyleButton from 'components/Singularity/ApplicationView/FormElements/Inputs/AppStyleButton.js';
import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';

import { loginFields } from './SeedData/login';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import {
  RegisterText,
  RegisterLink
} from 'styles/Singularity/OwnerView/Authentication';
import applicationContext from 'Context/ApplicationContext/applicationContext.js';
import { Redirect } from 'react-router-dom';
import AuthenticationLoader from 'components/Singularity/ApplicationView/Loaders/AuthenticationLoader';

const Login = props => {
  const ApplicationContext = useContext(applicationContext);
  const {
    isAuthenticated,
    handleChangeFor,
    loginUser,
    loading,
    authComplete,
    user
  } = ApplicationContext;

  if (isAuthenticated) {
    return <Redirect to="/ownerDashboard" />;
  }

  return (
    <>
      <CenterAlignedColumnContainer>
        {loginFields.map(field => {
          return (
            <StyledTextBoxLabel
              name={field.name}
              type={field.type}
              text={field.fieldLabel}
              onChange={handleChangeFor(field.name)}
              value={ApplicationContext[field.name]}
            />
          );
        })}
        <AppStyleButton display="Login" onClick={loginUser} />
        <RegisterLink to="/register">
          <RegisterText>Don’t have an account yet?</RegisterText>
        </RegisterLink>
      </CenterAlignedColumnContainer>
    </>
  );
};

export default Login;
