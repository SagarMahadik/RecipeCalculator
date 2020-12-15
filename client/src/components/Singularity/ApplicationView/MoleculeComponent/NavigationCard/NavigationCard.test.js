import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NavigationCard from 'components/Singularity/ApplicationView/MoleculeComponent/NavigationCard';
import { BrowserRouter as Router } from 'react-router-dom';
afterEach(cleanup);

it('Should match a snapshot', () => {
  const { asFragment } = render(
    <Router>
      <NavigationCard />
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});
