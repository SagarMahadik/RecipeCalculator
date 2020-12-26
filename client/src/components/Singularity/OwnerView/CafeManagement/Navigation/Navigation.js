import React from 'react';
import { navigationDetails } from './navigationSeed';
import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import NavigationCard from 'components/Singularity/ApplicationView/MoleculeComponent/NavigationCard';

const Navigation = () => {
  return (
    <>
      <FormHeadings heading="What's in your mind" id={'dashboard'} />
      <div id="ownerdashboard" />
      {navigationDetails.map(detail => {
        return (
          <NavigationCard
            backgroundcolor={detail.backgroundGradient}
            component={detail.component}
            route={detail.route}
            key={detail.route}
          />
        );
      })}
    </>
  );
};

export default Navigation;
