import React from 'react';

import { RawMaterialManagementState } from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/RawMaterialManagementState.js';
import RawMaterialManagement from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/Components/RawMaterialManagement.js';

import {
  PageAnimationContainer,
  pageTransition,
  pageVariant
} from 'styles/Singularity/Style1.0/FramerAnimations';

const RawMaterialManagementMainComponent = () => {
  return (
    <PageAnimationContainer
      initial="out"
      animate="in"
      exit="out"
      transition={pageTransition}
      variants={pageVariant}
    >
      <RawMaterialManagementState>
        <RawMaterialManagement />
      </RawMaterialManagementState>
    </PageAnimationContainer>
  );
};

export default RawMaterialManagementMainComponent;
