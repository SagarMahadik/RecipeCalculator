import React from 'react';
import { useSupplierDetailsDispatch } from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/SupplierDetailsState.js';
import { useApplicationState } from 'Context/ApplicationContext/ApplicationState.js';
import StyledSubmitButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledSubmitButton.js';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';
const SubmitSupplierDetails = () => {
  const { userID } = useApplicationState();

  const dispatch = useSupplierDetailsDispatch();

  const { sendStepStatusRequest } = useStepStatusRequest();

  return (
    <StyledSubmitButton
      onClick={e => {
        e.preventDefault();
        dispatch({ type: 'SET_SUPPLIERVALIDATIONS' });
        sendStepStatusRequest(
          `${userID}`,
          'Initiated validation for POST supplier requests'
        );
      }}
      text="Add Supplier"
    />
  );
};

export default SubmitSupplierDetails;
