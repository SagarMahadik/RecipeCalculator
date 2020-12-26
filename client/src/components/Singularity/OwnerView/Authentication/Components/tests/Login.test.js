import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ApplicationState } from 'Context/ApplicationContext/ApplicationState.js';
import LoginMainComponent from 'components/Singularity/OwnerView/Authentication/Components/LoginMainComponent.js';

afterEach(cleanup);

it('renders', () => {
  const { asFragment } = render(
    <Router>
      <ApplicationState>
        <LoginMainComponent />
      </ApplicationState>
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});
