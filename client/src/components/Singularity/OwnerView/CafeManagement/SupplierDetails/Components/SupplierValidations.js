import React, { useEffect, useContext } from 'react';

import {
  useSupplierDetailsState,
  useSupplierDetailsDispatch
} from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/SupplierDetailsState.js';

import { isEmpty } from 'Utils/validations';
const SupplierValidations = () => {
  const {
    supplierName,
    supplierPersonDetails,
    supplierValidationsInitiated,
    supplierValidationCompleted
  } = useSupplierDetailsState();
  const dispatch = useSupplierDetailsDispatch();

  useEffect(() => {
    if (supplierValidationsInitiated) {
      runSupplierValidations(supplierName, supplierPersonDetails);
    }
  }, [supplierValidationsInitiated]);

  const runSupplierValidations = (supplierName, supplierPersonDetails) => {
    if (isEmpty(supplierName)) {
      dispatch({
        type: 'SET_MISSINGFIELDSERROR',
        field: 'supplierName'
      });
    }
    if (isEmpty(supplierPersonDetails)) {
      dispatch({
        type: 'SET_MISSINGFIELDSERROR',
        field: 'supplierPersonDetails'
      });
    }

    setTimeout(() => dispatch({ type: 'REMOVE_MISSINGFIELDSERROR' }), 1500);
    if (!isEmpty(supplierName && !isEmpty(supplierPersonDetails))) {
      dispatch({
        type: 'SET_SUPPLIERVALIDATIONCOMPLETED'
      });
    }
  };

  useEffect(() => {
    if (supplierValidationCompleted) {
      dispatch({
        type: 'INITIATE_POSTSUPPLIERREQUEST'
      });
    }
  }, [supplierValidationCompleted]);

  return <div />;
};

export default SupplierValidations;
