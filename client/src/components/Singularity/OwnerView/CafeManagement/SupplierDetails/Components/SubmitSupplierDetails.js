import React, { useContext } from 'react';
import supplierDetailsContext from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/supplierDetailsContext.js';

import StyledSubmitButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledSubmitButton.js';

const SubmitSupplierDetails = () => {
  const SupplierDetailsContext = useContext(supplierDetailsContext);

  const { onSubmit } = SupplierDetailsContext;

  return <StyledSubmitButton onClick={onSubmit} text="Add Supplier" />;
};

export default SubmitSupplierDetails;
