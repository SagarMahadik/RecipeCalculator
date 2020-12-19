import React, { useContext } from 'react';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';
import StyledSubmitButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledSubmitButton.js';
import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import { registrationFields } from './SeedData/register';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import applicationContext from 'Context/ApplicationContext/applicationContext.js';
import { Redirect } from 'react-router-dom';
import {
  RegisterText,
  RegisterLink,
  ErrorText,
  ErrorTextContainer
} from 'styles/Singularity/OwnerView/Authentication';

const Register = () => {
  const ApplicationContext = useContext(applicationContext);
  const {
    isAuthenticated,
    handleChangeFor,
    registerUser,
    loading,
    customerMatchLogin,
    errorMessage
  } = ApplicationContext;

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
