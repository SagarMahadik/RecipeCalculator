import React from 'react';

import SupplierDetailsState from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/SupplierDetailsState.js';
import SupplierDetailsManagement from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/Components/SupplierDetailsManagement.js';

const SupplierDetailsMainComponent = () => {
  return (
    <SupplierDetailsState>
      <SupplierDetailsManagement />
    </SupplierDetailsState>
  );
};

export default SupplierDetailsMainComponent;
