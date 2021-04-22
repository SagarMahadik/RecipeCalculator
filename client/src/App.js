import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApplicationState } from 'Context/ApplicationContext/ApplicationState.js';
import Routes from 'components/Routing/Routes.js';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { GlobalStyle } from 'styles/Singularity/Style1.0/ApplicationStyles/globalStyles.js';

const queryClient = new QueryClient();

const App = () => {
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
