import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApplicationState from 'Context/ApplicationContext/ApplicationState.js';
import Routes from 'components/Routing/Routes.js';
import LandingPage from 'components/Singularity/OwnerView/LandingPage.js';
import ScrollToTop from 'Utils/ScrollToTop.js';

function App() {
  return (
    <ApplicationState>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </ApplicationState>
  );
}

export default App;
