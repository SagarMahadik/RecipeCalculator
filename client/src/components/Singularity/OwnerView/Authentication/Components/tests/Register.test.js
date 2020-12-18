import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ApplicationState from 'Context/ApplicationContext/ApplicationState.js';
import Register from 'components/Singularity/OwnerView/Authentication/Components/Register.js';

afterEach(cleanup);

it('renders', () => {
  const { asFragment } = render(
    <Router>
      <ApplicationState>
        <Register />
      </ApplicationState>
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});
