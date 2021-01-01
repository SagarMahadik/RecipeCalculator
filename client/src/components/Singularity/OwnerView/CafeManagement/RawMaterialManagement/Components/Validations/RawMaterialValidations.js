import React, { useContext, useEffect } from 'react';

import { rawMaterialManagementContext } from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/rawMaterialManagementContext.js';

import { useApplicationState } from 'Context/ApplicationContext/ApplicationState.js';

import {
  useRawMaterialsState,
  useRawMaterialsDispatch
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/RawMaterialManagementState';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

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

  const { userID } = useApplicationState();

  const { sendStepStatusRequest } = useStepStatusRequest();

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
      sendStepStatusRequest(
        `${userID}`,
        'Initiated validation for POST Raw material request'
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
        return dispatch({
          type: 'SET_FIELD_REQUIRED_ERROR',
          field: `${requiredField}`
        });
      }
    });

    if (rawMaterialGST === 'No GST') {
      return dispatch({
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
        sendStepStatusRequest(
          `${userID}`,
          'Completed validation for POST Raw material request'
        );
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
        sendStepStatusRequest(
          `${userID}`,
          'Completed validation for POST Raw material request'
        );
      }
    }
    return true;
  }

  return <div />;
};

export default RawMaterialValidations;
