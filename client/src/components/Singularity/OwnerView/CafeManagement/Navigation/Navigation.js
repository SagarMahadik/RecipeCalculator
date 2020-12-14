import React from 'react';
import { navigationDetails } from './navigationSeed';
import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import NavigationCard from 'components/Singularity/ApplicationView/MoleculeComponent/NavigationCard';

const Navigation = () => {
  return (
    <>
      <FormHeadings heading="What's in your mind" />
      {navigationDetails.map(detail => {
        return (
          <NavigationCard
            backgroundColor={detail.backgroundGradient}
            component={detail.component}
            route={detail.route}
          />
        );
      })}
    </>
  );
};

export default Navigation;
