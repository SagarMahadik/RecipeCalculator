import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Navigation from 'components/Singularity/OwnerView/CafeManagement/Navigation/Navigation.js';
import { BrowserRouter as Router } from 'react-router-dom';
afterEach(cleanup);

it('Should match a snapshot', () => {
  const { asFragment } = render(
    <Router>
      <Navigation />
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});
