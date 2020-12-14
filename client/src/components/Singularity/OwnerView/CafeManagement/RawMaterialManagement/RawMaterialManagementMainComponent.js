import React from 'react';

import RawMaterialManagementState from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/RawMaterialManagementState.js';
import RawMaterialManagement from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/Components/RawMaterialManagement.js';

const RawMaterialManagementMainComponent = () => {
  return (
    <RawMaterialManagementState>
      <RawMaterialManagement />
    </RawMaterialManagementState>
  );
};

export default RawMaterialManagementMainComponent;
