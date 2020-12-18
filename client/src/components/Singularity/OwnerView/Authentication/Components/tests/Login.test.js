import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ApplicationState from 'Context/ApplicationContext/ApplicationState.js';
import Login from 'components/Singularity/OwnerView/Authentication/Components/Login.js';

afterEach(cleanup);

it('renders', () => {
  const { asFragment } = render(
    <Router>
      <ApplicationState>
        <Login />
      </ApplicationState>
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});
