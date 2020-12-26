import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ApplicationState } from 'Context/ApplicationContext/ApplicationState.js';
import RegistrationMainComponent from 'components/Singularity/OwnerView/Authentication/Components/RegistrationMainComponent.js';

afterEach(cleanup);

it('renders', () => {
  const { asFragment } = render(
    <Router>
      <ApplicationState>
        <RegistrationMainComponent />
      </ApplicationState>
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});
