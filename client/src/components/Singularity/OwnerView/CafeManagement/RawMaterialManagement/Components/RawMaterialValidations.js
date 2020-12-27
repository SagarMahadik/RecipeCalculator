import React, { useContext, useEffect } from 'react';

import {
  rawMaterialManagementContext,
  rawMaterialDispatchContext
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/rawMaterialManagementContext.js';

import {
  useRawMaterialsState,
  useRawMaterialsDispatch
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/RawMaterialManagementState';

import { isEmpty } from 'Utils/validations.js';

const RawMaterialValidations = () => {
  const {
    rawMaterialRequiredFields,
    initiateRawMaterialValidations,
    rawMaterialName,
    rawMaterialType,
    rawMaterialBaseQuanitiy,
    rawMaterialGST,
    rawMaterialGSTPercent,
    rawMaterialStatePrice,
    rawMaterialStatePriceGST,
    validationsInitiated
  } = useRawMaterialsState();

  const dispatch = useRawMaterialsDispatch();

  const RawMaterialStateContext = useContext(rawMaterialManagementContext);

  useEffect(() => {
    if (initiateRawMaterialValidations) {
      validateRawMaterialFields(rawMaterialRequiredFields);
    }
  }, [initiateRawMaterialValidations]);

  useEffect(() => {
    removeValidationError(rawMaterialRequiredFields);

    if (validationsInitiated) {
      validateRawMaterialFields(rawMaterialRequiredFields);
    }
  }, [
    rawMaterialName,
    rawMaterialType,
    rawMaterialBaseQuanitiy,
    rawMaterialGST,
    rawMaterialStatePrice,
    rawMaterialStatePriceGST,
    validationsInitiated,
    rawMaterialGSTPercent
  ]);

  const validateRawMaterialFields = rawMaterialRequiredFields => {
    rawMaterialRequiredFields.map(requiredField => {
      if (isEmpty(RawMaterialStateContext[requiredField])) {
        dispatch({
          type: 'SET_FIELD_REQUIRED_ERROR',
          field: `${requiredField}`
        });
      }
    });

    if (rawMaterialGST === 'No GST') {
      dispatch({
        type: 'REMOVE_FIELD_REQUIRED_ERROR',
        field: 'rawMaterialStatePriceGST'
      });
    }
  };

  const removeValidationError = rawMaterialRequiredFields => {
    rawMaterialRequiredFields.map(requiredField => {
      if (!isEmpty(RawMaterialStateContext[requiredField])) {
        dispatch({
          type: 'REMOVE_FIELD_REQUIRED_ERROR',
          field: `${requiredField}`
        });
      }
    });
  };

  return <div />;
};

export default RawMaterialValidations;
