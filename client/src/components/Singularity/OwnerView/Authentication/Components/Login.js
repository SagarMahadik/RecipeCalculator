import React, { useContext, useEffect } from 'react';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';
import StyledSubmitButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledSubmitButton.js';
import AppStyleButton from 'components/Singularity/ApplicationView/FormElements/Inputs/AppStyleButton.js';
import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';

import { loginFields } from './SeedData/login';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import {
  RegisterText,
  RegisterLink,
  ErrorText,
  ErrorTextContainer
} from 'styles/Singularity/OwnerView/Authentication';
import applicationContext from 'Context/ApplicationContext/applicationContext.js';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import AuthenticationLoader from 'components/Singularity/ApplicationView/Loaders/AuthenticationLoader';

const Login = props => {
  const ApplicationContext = useContext(applicationContext);
  const {
    isAuthenticated,
    handleChangeFor,
    loginUser,
    authError,
    errorMessage,
    frontEndError
  } = ApplicationContext;

  if (isAuthenticated) {
    return <Redirect to="/ownerDashboard" />;
  }

  return (
    <>
      <CenterAlignedColumnContainer>
        {authError ? (
          <ErrorTextContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeIn',
              duration: 1.0
            }}
            exit={{ opacity: 0 }}
          >
            {' '}
            <ErrorText>{errorMessage}</ErrorText>
          </ErrorTextContainer>
        ) : null}

        {loginFields.map(field => {
          return (
            <StyledTextBoxLabel
              name={field.name}
              type={field.type}
              text={field.fieldLabel}
              isError={ApplicationContext.frontEndError[field.name]}
              isValidationError={ApplicationContext.validationError[field.name]}
              requiredErrorText={field.requiredErrorMessage}
              validationErrorText={field.validationErrorMessage}
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
