import React, { Fragment, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApplicationState } from 'Context/ApplicationContext/ApplicationState.js';
import Routes from 'components/Routing/Routes.js';
import LandingPage from 'components/Singularity/OwnerView/Authentication/Components/LandingPage.js';
import ScrollToTop from 'Utils/ScrollToTop.js';
import { GlobalStyle } from 'styles/Singularity/Style1.0/ApplicationStyles/globalStyles.js';

const App = () => {
  return (
    <ApplicationState>
      <ScrollToTop />
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
