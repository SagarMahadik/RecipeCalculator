import React, { useEffect } from 'react';

import {
  useRawMaterialsState,
  useRawMaterialsDispatch
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/RawMaterialManagementState.js';

import {
  calcualatePriceWithoutGST,
  calculatePriceWithGST
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/utils.js';

const CalculatePricePostGST = () => {
  console.log('In calculate price');
  const dispatch = useRawMaterialsDispatch();

  const {
    rawMaterialGSTPercent,
    rawMaterialStatePrice,
    validationsCompleted,
    rawMaterialStatePriceGST,
    priceUpdated,
    supplierID
  } = useRawMaterialsState();

  useEffect(() => {
    if (validationsCompleted) {
      handlePriceGST(rawMaterialStatePrice, rawMaterialGSTPercent);
    }
  }, [validationsCompleted]);

  const handlePriceGST = (rawMaterialStatePrice, rawMaterialGSTPercent) => {
    if (rawMaterialGSTPercent === 0) {
      dispatch({
        type: 'UPDATE_RAWMPRICE',
        rawMrate: rawMaterialStatePrice,
        rawMWOGST: rawMaterialStatePrice
      });
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
    }
  };

  useEffect(() => {
    console.log('In a price update use effect');
    if (priceUpdated) {
      if (supplierID != '') {
        dispatch({
          type: 'INITIATE_RMATERIALPOST'
        });
      }
      if (supplierID === '') {
        dispatch({
          type: 'INITIATE_SUPPLIERPOST'
        });
      }
    }
  }, [priceUpdated]);
  return <div />;
};

export default CalculatePricePostGST;
