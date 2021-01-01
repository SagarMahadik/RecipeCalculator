import React, { useEffect, useState } from 'react';

import Loaders from 'components/Singularity/ApplicationView/Loaders';

import {
  MainContainer,
  LoadingText,
  TextContainer,
  DoneText,
  LoadingTextContiner,
  DoneTextContainer
} from 'styles/Singularity/Style1.0/Loaders/Ball';

import DoneSound from 'components/Singularity/ApplicationSounds/DoneSound.js';

const BallLoader = props => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (props.isComplete) {
      setTimeout(() => setRedirect(true), 2000);
    }
  }, [props.isComplete]);

  if (redirect) {
    return window.location.reload();
  }

  return (
    <>
      <MainContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeOut',
          duration: 0.8
        }}
        exit={{ opacity: 0 }}
        completed={props.isComplete}
      >
        <TextContainer>
          {props.isComplete ? (
            <DoneTextContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: 'easeOut',
                duration: 0.9
              }}
              exit={{ opacity: 0 }}
            >
              <DoneText>Done</DoneText>
            </DoneTextContainer>
          ) : (
            <LoadingTextContiner
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: 'easeOut',
                duration: 0.3
              }}
              exit={{ opacity: 0 }}
            >
              <LoadingText>Working on it..</LoadingText>
            </LoadingTextContiner>
          )}
        </TextContainer>
        <Loaders />
        <DoneSound isComplete={props.isComplete} />
      </MainContainer>
    </>
  );
};

export default BallLoader;
