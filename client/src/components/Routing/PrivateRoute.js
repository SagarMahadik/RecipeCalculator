import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import applicationContext from 'Context/ApplicationContext/applicationContext.js';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import AuthenticationLoader from 'components/Singularity/ApplicationView/Loaders/AuthenticationLoader';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const ApplicationContext = useContext(applicationContext);
  const {
    isAuthenticated,
    loading,
    authComplete,
    authTokenFlag
  } = ApplicationContext;

  return (
    <Route
      {...rest}
      render={props =>
        loading && !authComplete ? (
          <AuthenticationLoader />
        ) : !isAuthenticated && authComplete && !authTokenFlag ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
