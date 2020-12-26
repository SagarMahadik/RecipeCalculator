import React, { useContext, useEffect } from 'react';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';
import AppStyleButton from 'components/Singularity/ApplicationView/FormElements/Inputs/AppStyleButton.js';

import { loginFields } from 'components/Singularity/OwnerView/Authentication/Components/SeedData/login.js';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import {
  RegisterText,
  RegisterLink,
  ErrorText,
  ErrorTextContainer
} from 'styles/Singularity/OwnerView/Authentication';

import {
  useApplicationState,
  useApplicationDispatch
} from 'Context/ApplicationContext/ApplicationState.js';
import { Redirect } from 'react-router-dom';

const Login = props => {
  const ApplicationContext = useApplicationState();
  const {
    isAuthenticated,
    loginUser,
    authError,
    errorMessage
  } = ApplicationContext;

  const dispatch = useApplicationDispatch();

  if (isAuthenticated) {
    return <Redirect to="/ownerDashboard" />;
  }

  return (
    <>
      <CenterAlignedColumnContainer style={{ marginTop: '50px' }}>
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
            <ErrorText id="error-message">{errorMessage}</ErrorText>
          </ErrorTextContainer>
        ) : null}

        {loginFields.map(field => {
          return (
            <StyledTextBoxLabel
              id={field.name}
              name={field.name}
              key={field.name}
              type={field.type}
              text={field.fieldLabel}
              isError={ApplicationContext.frontEndError[field.name]}
              isValidationError={ApplicationContext.validationError[field.name]}
              requiredErrorText={field.requiredErrorMessage}
              validationErrorText={field.validationErrorMessage}
              onChange={e =>
                dispatch({
                  type: 'UPDATE_FIELD',
                  payload: { input: field.name, value: e.target.value }
                })
              }
              value={ApplicationContext[field.name]}
            />
          );
        })}
        <AppStyleButton display="Login" id="login-button" onClick={loginUser} />

        <RegisterLink to="/register">
          <RegisterText>Don’t have an account yet?</RegisterText>
        </RegisterLink>
      </CenterAlignedColumnContainer>
    </>
  );
};

export default Login;
