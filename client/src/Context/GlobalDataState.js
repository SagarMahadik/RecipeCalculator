import React from 'react';

import { DataState } from 'Context/DataContext/DataState.js';

import {
  ApplicationState,
  useApplicationState,
  useApplicationDispatch
} from 'Context/ApplicationContext/ApplicationState.js';

const GlobalDataState = () => {
  const { isAuthenticated, user } = useApplicationState();

  if (isAuthenticated) {
    return <DataState />;
  }

  return null;
};

export default GlobalDataState;
