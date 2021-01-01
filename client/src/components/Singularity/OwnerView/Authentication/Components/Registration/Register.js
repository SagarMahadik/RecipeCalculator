import React from 'react';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';
import StyledSubmitButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledSubmitButton.js';
import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import { registrationFields } from 'components/Singularity/OwnerView/Authentication/Components/SeedData/register.js';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';

import {
  useApplicationState,
  useApplicationDispatch
} from 'Context/ApplicationContext/ApplicationState.js';

import { Redirect } from 'react-router-dom';
import {
  RegisterText,
  RegisterLink,
  ErrorText,
  ErrorTextContainer
} from 'styles/Singularity/OwnerView/Authentication';

const Register = () => {
  const ApplicationContext = useApplicationState();
  const {
    isAuthenticated,
    registerUser,
    loading,
    customerMatchLogin,
    errorMessage
  } = ApplicationContext;

  const dispatch = useApplicationDispatch();

  if (isAuthenticated && !loading) {
    return <Redirect to="/ownerDashboard" />;
  }

  return (
    <>
      <FormHeadings heading="Please register" />
      {customerMatchLogin ? (
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

      <CenterAlignedColumnContainer>
        {registrationFields.map(field => {
          return (
            <StyledTextBoxLabel
              name={field.name}
              key={field.name}
              type={field.type}
              text={field.fieldLabel}
              isError={ApplicationContext.frontEndError[field.name]}
              isValidationError={ApplicationContext.validationError[field.name]}
              requiredErrorText={field.requiredErrorMessage}
              validationErrorText={field.validationErrorMessage}
              onChange={e => {
                dispatch({
                  type: 'UPDATE_FIELD',
                  payload: { input: field.name, value: e.target.value }
                });
              }}
              value={ApplicationContext[field.name]}
            />
          );
        })}
        <StyledSubmitButton text="Register" onClick={registerUser} />

        {customerMatchLogin ? (
          <>
            {' '}
            <RegisterLink to="/">
              <RegisterText>Login</RegisterText>
            </RegisterLink>
          </>
        ) : null}
      </CenterAlignedColumnContainer>
    </>
  );
};

export default Register;
