import React, { useContext } from 'react';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';
import StyledSubmitButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledSubmitButton.js';
import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import { registrationFields } from './SeedData/register';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import applicationContext from 'Context/ApplicationContext/applicationContext.js';
import { Redirect } from 'react-router-dom';

const Register = () => {
  const ApplicationContext = useContext(applicationContext);
  const {
    isAuthenticated,
    handleChangeFor,
    registerUser,
    loading
  } = ApplicationContext;

  if (isAuthenticated && !loading) {
    return <Redirect to="/ownerDashboard" />;
  }

  return (
    <>
      <FormHeadings heading="Please register" />
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
      </CenterAlignedColumnContainer>
    </>
  );
};

export default Register;
