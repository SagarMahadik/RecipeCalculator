import React, { useContext } from 'react';

import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import SupplierDetails from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/Components/SupplierDetails.js';
import supplierDetailsContext from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/supplierDetailsContext.js';
import SubmitSupplierDetails from './SubmitSupplierDetails';

import Ball from 'components/Singularity/ApplicationView/Loaders/Ball';

const SupplierDetailsManagement = () => {
  const SupplierDetailsContext = useContext(supplierDetailsContext);

  const { onSubmit, showLoader, loading, isComplete } = SupplierDetailsContext;

  if (showLoader) {
    return <Ball loading={loading} isComplete={isComplete} />;
  }
  return (
    <>
      <FormHeadings heading="Supplier Details" />
      <SupplierDetails />
      <SubmitSupplierDetails onClick={onSubmit} />
    </>
  );
};

export default SupplierDetailsManagement;
