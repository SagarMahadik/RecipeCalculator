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
  console.log('In Raw M validatiosn');
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
    validationsInitiated,
    validationsCompleted
  } = useRawMaterialsState();

  const dispatch = useRawMaterialsDispatch();

  const RawMaterialStateContext = useContext(rawMaterialManagementContext);

  useEffect(() => {
    if (initiateRawMaterialValidations) {
      validateRawMaterialFields(rawMaterialRequiredFields);
      checkIfFieldsAreValidated(
        rawMaterialGST,
        rawMaterialName,
        rawMaterialType,
        rawMaterialBaseQuanitiy,
        rawMaterialStatePrice,
        dispatch,
        rawMaterialStatePriceGST
      );
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

  function checkIfFieldsAreValidated(
    rawMaterialGST,
    rawMaterialName,
    rawMaterialType,
    rawMaterialBaseQuanitiy,
    rawMaterialStatePrice,
    dispatch,
    rawMaterialStatePriceGST
  ) {
    console.log('Field validation');
    if (rawMaterialGST === 'No GST') {
      if (
        !isEmpty(rawMaterialName) &&
        !isEmpty(rawMaterialType) &&
        !isEmpty(rawMaterialBaseQuanitiy) &&
        !isEmpty(rawMaterialStatePrice)
      ) {
        dispatch({
          type: 'VALIDATION_COMPLETED'
        });
      }
    } else {
      if (
        !isEmpty(rawMaterialName) &&
        !isEmpty(rawMaterialType) &&
        !isEmpty(rawMaterialBaseQuanitiy) &&
        !isEmpty(rawMaterialStatePrice) &&
        !isEmpty(rawMaterialStatePriceGST)
      ) {
        dispatch({
          type: 'VALIDATION_COMPLETED'
        });
      }
    }
    return true;
  }

  return <div />;
};

export default RawMaterialValidations;
