import React, { Fragment, useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApplicationState } from 'Context/ApplicationContext/ApplicationState.js';
import Routes from 'components/Routing/Routes.js';

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
    <ApplicationState>
      <Router>
        <GlobalStyle />
        <button onClick={toggleTheme}>Toggle theme</button>
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Router>
    </ApplicationState>
  );
};

export default App;
