import React, { Fragment, useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApplicationState } from 'Context/ApplicationContext/ApplicationState.js';
import Routes from 'components/Routing/Routes.js';
import {
  useQuery,
  useQueryClient,
  useMutation,
  QueryClient,
  QueryClientProvider
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import FormInput from 'styles/StylesLibrary/Frames/FormInputs/DarkTheme/FormInput.js';
import { GlobalStyle } from 'styles/Singularity/Style1.0/ApplicationStyles/globalStyles.js';

import { whiteTheme } from 'styles/StylesLibrary/Themes/whiteTheme.js';

import { darkTheme } from 'styles/StylesLibrary/Themes/darkTheme.js';

import {
  useApplicationState,
  useApplicationDispatch
} from 'Context/ApplicationContext/ApplicationState.js';

import {
  applicationContext,
  applicationDispatchContext
} from 'Context/ApplicationContext/applicationContext.js';

import { DataState } from 'Context/DataContext/DataState.js';

import GlobalDataState from 'Context/GlobalDataState.js';

const queryClient = new QueryClient();

const App = () => {
  const [theme, setTheme] = useState('white');
  const toggleTheme = () => {
    if (theme === 'white') {
      setTheme('dark');
    } else {
      setTheme('white');
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationState>
        <Router>
          <GlobalStyle />

          <Switch>
            <Route component={Routes} />
          </Switch>
        </Router>
      </ApplicationState>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
