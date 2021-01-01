import React, { useEffect, useContext } from 'react';

import {
  useSupplierDetailsState,
  useSupplierDetailsDispatch
} from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/SupplierDetailsState.js';

import { useApplicationState } from 'Context/ApplicationContext/ApplicationState.js';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

import { isEmpty } from 'Utils/validations';
const SupplierValidations = () => {
  const { userID } = useApplicationState();
  const {
    supplierName,
    supplierPersonDetails,
    supplierValidationsInitiated,
    supplierValidationCompleted,
    requiredFields
  } = useSupplierDetailsState();

  const SupplierContext = useSupplierDetailsState();
  const dispatch = useSupplierDetailsDispatch();

  const { sendStepStatusRequest } = useStepStatusRequest();

  useEffect(() => {
    if (supplierValidationsInitiated) {
      runSupplierValidations(supplierName, supplierPersonDetails);
    }
  }, [supplierValidationsInitiated]);

  const runSupplierValidations = (supplierName, supplierPersonDetails) => {
    requiredFields.map(field => {
      if (isEmpty(SupplierContext[field])) {
        return dispatch({
          type: 'SET_MISSINGFIELDSERROR',
          field: `${field}`
        });
      }
    });

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

      sendStepStatusRequest(
        `${userID}`,
        `Validated Supplier for for ${userID}`
      );
    }
  }, [supplierValidationCompleted]);

  return <div />;
};

export default SupplierValidations;
