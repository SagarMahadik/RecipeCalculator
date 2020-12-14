import React, { useContext } from 'react';
import rawMaterialManagementContext from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/rawMaterialManagementContext.js';

import StyledSubmitButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledSubmitButton.js';

const SubmitRawMaterial = () => {
  const RawMaterialManagementContext = useContext(rawMaterialManagementContext);

  const { onSubmit } = RawMaterialManagementContext;

  return <StyledSubmitButton onClick={onSubmit} text="Add Raw Material" />;
};

export default SubmitRawMaterial;
