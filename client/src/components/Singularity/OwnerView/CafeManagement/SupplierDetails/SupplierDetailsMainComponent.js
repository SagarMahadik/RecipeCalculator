import React from 'react';

import { SupplierDetailsState } from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/SupplierDetailsState.js';
import SupplierDetailsManagement from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/Components/SupplierDetailsManagement.js';

import {
  useQuery,
  useQueryClient,
  useMutation,
  QueryClient,
  QueryClientProvider
} from 'react-query';

import { useHttpClient } from 'Hooks/httpsHooks';

import { useApplicationDispatch } from 'Context/ApplicationContext/ApplicationState.js';

import {
  PageAnimationContainer,
  pageTransition,
  pageVariant
} from 'styles/Singularity/Style1.0/FramerAnimations';

const SupplierDetailsMainComponent = () => {
  const dispatch = useApplicationDispatch();

  return (
    <PageAnimationContainer
      initial="out"
      animate="in"
      exit="out"
      transition={pageTransition}
      variants={pageVariant}
    >
      <SupplierDetailsState>
        <SupplierDetailsManagement />
      </SupplierDetailsState>
    </PageAnimationContainer>
  );
};

export default SupplierDetailsMainComponent;
