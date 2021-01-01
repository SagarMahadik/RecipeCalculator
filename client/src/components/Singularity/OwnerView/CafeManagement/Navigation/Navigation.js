import React, { useEffect, useState } from 'react';
import { navigationDetails } from './navigationSeed';
import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import NavigationCard from 'components/Singularity/ApplicationView/MoleculeComponent/NavigationCard';
import SuccessSound from 'components/Singularity/ApplicationSounds/SuccessSound.js';
import {
  useApplicationState,
  useApplicationDispatch
} from 'Context/ApplicationContext/ApplicationState.js';

import { AnimationContainer } from 'styles/Singularity/OwnerView/CafeManagement/RawMaterialManagement';

const Navigation = () => {
  const {
    isAuthenticated,
    playWelcomTone,
    welcomeTonePlayedCount
  } = useApplicationState();

  const dispatch = useApplicationDispatch();

  useEffect(() => {
    if (isAuthenticated && welcomeTonePlayedCount === 0) {
      dispatch({
        type: 'PLAY_WELCOMETONE'
      });

      setTimeout(
        () =>
          dispatch({
            type: 'INCREMENT_WELCOMETONECOUNT'
          }),
        2000
      );
    }
  }, [isAuthenticated, welcomeTonePlayedCount]);
  return (
    <>
      <FormHeadings heading="What's in your mind" id={'dashboard'} />
      <div id="ownerdashboard" />
      <SuccessSound isSuccessful={playWelcomTone} />

      <AnimationContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeOut',
          duration: 0.8
        }}
        exit={{ opacity: 0 }}
      >
        {navigationDetails.map(detail => {
          return (
            <NavigationCard
              backgroundcolor={detail.backgroundGradient}
              component={detail.component}
              route={detail.route}
              key={detail.route}
              className="card"
            />
          );
        })}
      </AnimationContainer>
    </>
  );
};

export default Navigation;
