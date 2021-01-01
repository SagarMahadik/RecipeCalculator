import React, { useEffect } from 'react';

import {
  useRawMaterialsState,
  useRawMaterialsDispatch
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/RawMaterialManagementState.js';

import { useApplicationState } from 'Context/ApplicationContext/ApplicationState.js';

import {
  calcualatePriceWithoutGST,
  calculatePriceWithGST
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/utils.js';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

const CalculatePricePostGST = () => {
  const dispatch = useRawMaterialsDispatch();
  const { userID } = useApplicationState();
  const { sendStepStatusRequest } = useStepStatusRequest();

  const {
    rawMaterialGSTPercent,
    rawMaterialStatePrice,
    validationsCompleted,
    rawMaterialStatePriceGST,
    priceUpdated,
    supplierID,
    searchString
  } = useRawMaterialsState();

  useEffect(() => {
    if (validationsCompleted) {
      handlePriceGST(rawMaterialStatePrice, rawMaterialGSTPercent);
      sendStepStatusRequest(
        `${userID}`,
        'Initiated Price calculation for POST Raw material request'
      );
    }
  }, [validationsCompleted]);

  const handlePriceGST = (rawMaterialStatePrice, rawMaterialGSTPercent) => {
    if (rawMaterialGSTPercent === 0) {
      dispatch({
        type: 'UPDATE_RAWMPRICE',
        rawMrate: rawMaterialStatePrice,
        rawMWOGST: rawMaterialStatePrice
      });
      sendStepStatusRequest(
        `${userID}`,
        'Completed Price calculation for POST Raw material request'
      );
    }

    if (rawMaterialStatePriceGST === 'withGST') {
      dispatch({
        type: 'UPDATE_RAWMPRICE',
        rawMrate: rawMaterialStatePrice,
        rawMWOGST: calcualatePriceWithoutGST(
          rawMaterialStatePrice,
          rawMaterialGSTPercent
        )
      });
      sendStepStatusRequest(
        `${userID}`,
        'Completed Price calculation for POST Raw material request'
      );
    }
    if (rawMaterialStatePriceGST === 'woGST') {
      dispatch({
        type: 'UPDATE_RAWMPRICE',
        rawMrate: calculatePriceWithGST(
          rawMaterialStatePrice,
          rawMaterialGSTPercent
        ),
        rawMWOGST: rawMaterialStatePrice
      });
      sendStepStatusRequest(
        `${userID}`,
        'Completed Price calculation for POST Raw material request'
      );
    }
  };

  useEffect(() => {
    if (priceUpdated) {
      if (supplierID != '' || searchString === '') {
        dispatch({
          type: 'INITIATE_RMATERIALPOST'
        });
        sendStepStatusRequest(
          `${userID}`,
          'Initiate POST Raw material request'
        );
      }
      if (supplierID === '') {
        dispatch({
          type: 'INITIATE_SUPPLIERPOST'
        });
        sendStepStatusRequest(`${userID}`, 'Initiate POST Supplier request');
      }
    }
  }, [priceUpdated]);
  return <div />;
};

export default CalculatePricePostGST;
