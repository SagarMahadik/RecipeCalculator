import React, { useContext, useEffect } from 'react';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';
import StyledSubmitButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledSubmitButton.js';
import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import { loginFields } from './SeedData/login';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import applicationContext from 'Context/ApplicationContext/applicationContext.js';
import { Redirect } from 'react-router-dom';
import AuthenticationLoader from 'components/Singularity/ApplicationView/Loaders/AuthenticationLoader';

const Login = props => {
  console.log('in login');
  console.log(props.history.location.pathname);
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
      <FormHeadings heading="Please Login" />
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
        <StyledSubmitButton text="Login" onClick={loginUser} />
      </CenterAlignedColumnContainer>
    </>
  );
};

export default Login;
