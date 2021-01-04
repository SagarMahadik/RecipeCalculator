import React, { Fragment, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApplicationState } from 'Context/ApplicationContext/ApplicationState.js';
import Routes from 'components/Routing/Routes.js';

import FormInput from 'styles/StylesLibrary/Frames/FormInputs/DarkTheme/FormInput.js';
import { GlobalStyle } from 'styles/Singularity/Style1.0/ApplicationStyles/globalStyles.js';

const App = () => {
  return (
    <ApplicationState>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Router>
    </ApplicationState>
  );
};

export default App;
