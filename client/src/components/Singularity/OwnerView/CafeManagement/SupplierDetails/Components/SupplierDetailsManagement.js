import React, { useContext } from 'react';

import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import SupplierDetails from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/Components/SupplierDetails.js';
import { useSupplierDetailsState } from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/SupplierDetailsState.js';
import SubmitSupplierDetails from './SubmitSupplierDetails';
import SupplierValidations from './SupplierValidations';
import POSTsupplierRequest from './POSTsupplierRequest';

import Ball from 'components/Singularity/ApplicationView/Loaders/Ball';

const SupplierDetailsManagement = () => {
  const {
    onSubmit,
    showLoader,
    trigger,
    loading,
    isComplete
  } = useSupplierDetailsState();

  if (showLoader) {
    return <Ball loading={loading} isComplete={isComplete} />;
  }
  return (
    <>
      <FormHeadings heading="Supplier Details" />

      <SupplierDetails />
      <SubmitSupplierDetails onClick={onSubmit} />
      <SupplierValidations />
      <POSTsupplierRequest />
    </>
  );
};

export default SupplierDetailsManagement;
