import React from 'react';
import { Redirect } from 'react-router-dom';

import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';
import AppStyleButton from 'components/Singularity/ApplicationView/FormElements/Inputs/AppStyleButton.js';
import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import { MainContentContainer } from 'styles/Singularity/Style1.0/ContainerStyles/index.js';
import { registrationFields } from 'components/Singularity/OwnerView/Authentication/Components/SeedData/register.js';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import {
  RegisterText,
  RegisterLink
} from 'styles/Singularity/OwnerView/Authentication';

import DisplayError from 'components/Singularity/ApplicationView/ErrorMessages/DisplayError.js';
import DisplayDummyErrorText from 'components/Singularity/ApplicationView/ErrorMessages/DisplayDummyErrorText.js';
import FormErrorSound from 'components/Singularity/ApplicationSounds/FormErrorSound.js';

import {
  useApplicationState,
  useApplicationDispatch
} from 'Context/ApplicationContext/ApplicationState.js';

const Register = () => {
  const ApplicationContext = useApplicationState();
  const {
    isAuthenticated,
    registerUser,
    loading,
    customerMatchLogin,
    errorMessage,
    registrationError
  } = ApplicationContext;

  const dispatch = useApplicationDispatch();

  if (isAuthenticated && !loading) {
    return <Redirect to="/ownerDashboard" />;
  }

  return (
    <>
      <FormHeadings heading="Please register" />
      <MainContentContainer>
        {registrationError ? (
          <DisplayError errorMessage={errorMessage} />
        ) : (
          <DisplayDummyErrorText dummyMessage="This is slightly very long message to avoid jank on the page" />
        )}
        <FormErrorSound isError={registrationError} />
        <CenterAlignedColumnContainer style={{ marginTop: '20px' }}>
          {registrationFields.map(field => {
            return (
              <StyledTextBoxLabel
                name={field.name}
                key={field.name}
                type={field.type}
                text={field.fieldLabel}
                isError={ApplicationContext.frontEndError[field.name]}
                isValidationError={
                  ApplicationContext.validationError[field.name]
                }
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
          <AppStyleButton
            display="Register"
            id="register-button"
            onClick={registerUser}
            loading={loading}
          />

          {customerMatchLogin ? (
            <>
              <RegisterLink to="/">
                <RegisterText>Login</RegisterText>
              </RegisterLink>
            </>
          ) : null}
        </CenterAlignedColumnContainer>
      </MainContentContainer>
    </>
  );
};

export default Register;
