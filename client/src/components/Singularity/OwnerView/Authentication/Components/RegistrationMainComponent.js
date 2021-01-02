import React from 'react';
import Registration from 'components/Singularity/OwnerView/Authentication/Components/Registration/Register.js';
import RegisterValidations from 'components/Singularity/OwnerView/Authentication/Components/Registration/RegisterValidations.js';
import MakeRegisterRequest from 'components/Singularity/OwnerView/Authentication/Components/Registration/MakeRegisterRequest.js';
import {
  PageAnimationContainer,
  pageTransition,
  pageVariant
} from 'styles/Singularity/Style1.0/FramerAnimations';

const RegistrationMainComponent = () => {
  return (
    <PageAnimationContainer
      initial="out"
      animate="in"
      exit="out"
      transition={pageTransition}
      variants={pageVariant}
    >
      <Registration />
      <RegisterValidations />
      <MakeRegisterRequest />
    </PageAnimationContainer>
  );
};

export default RegistrationMainComponent;
