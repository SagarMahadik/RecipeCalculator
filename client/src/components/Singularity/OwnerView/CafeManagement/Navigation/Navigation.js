import React, { useEffect } from 'react';

import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import NavigationCard from 'components/Singularity/ApplicationView/MoleculeComponent/NavigationCard';
import { navigationDetails } from './navigationSeed';
import { MainContentContainer } from 'styles/Singularity/Style1.0/ContainerStyles/index.js';

import {
  StaggerAnimationParentContainer,
  StaggerAnimationChildContainer,
  container,
  listItem
} from 'styles/Singularity/Style1.0/FramerAnimations';
import {
  PageAnimationContainer,
  pageTransition,
  pageVariant
} from 'styles/Singularity/Style1.0/FramerAnimations';

import SuccessSound from 'components/Singularity/ApplicationSounds/SuccessSound.js';

import {
  useApplicationState,
  useApplicationDispatch
} from 'Context/ApplicationContext/ApplicationState.js';

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
      <PageAnimationContainer
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariant}
        transition={pageTransition}
      >
        <FormHeadings heading="What's in your mind" id={'dashboard'} />
        <div id="ownerdashboard" />
        <SuccessSound isSuccessful={playWelcomTone} />
        <MainContentContainer>
          <StaggerAnimationParentContainer
            variants={container}
            initial="hidden"
            animate="show"
          >
            {navigationDetails.map(
              ({ backgroundGradient, component, route }) => {
                return (
                  <StaggerAnimationChildContainer variants={listItem}>
                    <NavigationCard
                      backgroundcolor={backgroundGradient}
                      component={component}
                      route={route}
                      key={route}
                      className="card"
                    />
                  </StaggerAnimationChildContainer>
                );
              }
            )}
          </StaggerAnimationParentContainer>
        </MainContentContainer>
      </PageAnimationContainer>
    </>
  );
};

export default Navigation;
