import React from 'react';

import StyledSubmitButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledSubmitButton.js';

import { useRawMaterialsState } from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/RawMaterialManagementState.js';

const SubmitRawMaterial = () => {
  const { onSubmit } = useRawMaterialsState();

  return <StyledSubmitButton onClick={onSubmit} text="Add Raw Material" />;
};

export default SubmitRawMaterial;
