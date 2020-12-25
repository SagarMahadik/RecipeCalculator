import React from 'react';
import { useSupplierDetailsDispatch } from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/SupplierDetailsState.js';
import StyledSubmitButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledSubmitButton.js';

const SubmitSupplierDetails = () => {
  const dispatch = useSupplierDetailsDispatch();

  return (
    <StyledSubmitButton
      onClick={e => {
        e.preventDefault();
        dispatch({ type: 'SET_SUPPLIERVALIDATIONS' });
      }}
      text="Add Supplier"
    />
  );
};

export default SubmitSupplierDetails;
