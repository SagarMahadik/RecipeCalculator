import React, { useEffect, useContext } from 'react';

import {
  useRawMaterialsState,
  useRawMaterialsDispatch
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/RawMaterialManagementState.js';

import { applicationContext } from 'Context/ApplicationContext/applicationContext.js';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

import axios from 'axios';

const RawMaterialRequest = () => {
  const {
    rawMaterialName,
    brandName,
    supplierID,
    rawMaterialType,
    rawMaterialBaseQuanitiy,
    rawMaterialBaseUnit,
    rawMaterialRate,
    rawMaterialWORate,
    rawMaterialDisplay,
    rawMaterialGSTPercent,
    initiateRMPOSTrequest
  } = useRawMaterialsState();
  const dispatch = useRawMaterialsDispatch();

  const ApplicationContext = useContext(applicationContext);

  const { userID, userBrandName } = ApplicationContext;

  const { sendStepStatusRequest } = useStepStatusRequest();

  useEffect(() => {
    if (initiateRMPOSTrequest) {
      dispatch({
        type: 'SHOW_LOADER'
      });
      addRawMaterialToDB(
        userID,
        rawMaterialName,
        brandName,
        supplierID,
        rawMaterialType,
        rawMaterialBaseQuanitiy,
        rawMaterialBaseUnit,
        rawMaterialRate,
        rawMaterialWORate,
        rawMaterialDisplay,
        rawMaterialGSTPercent
      );
    }
  }, [initiateRMPOSTrequest]);

  const addRawMaterialToDB = async (
    userID,
    rawMaterialName,
    rmBrandName,
    supplierID,
    rawMaterialType,
    rawMaterialBaseQuanitiy,
    rawMaterialBaseUnit,
    rawMaterialRate,
    rawMaterialWORate,
    rawMaterialDisplay,
    rawMaterialGSTPercent
  ) => {
    let name = rawMaterialName;
    let brandName = rmBrandName || userBrandName;
    let supplier = supplierID;
    let type = rawMaterialType;
    let baseQuantity = rawMaterialBaseQuanitiy;
    let baseUnit = rawMaterialBaseUnit;
    let rate = rawMaterialRate;
    let rateWOGST = rawMaterialWORate;
    let recipeUnit = rawMaterialBaseUnit;
    let displayRateUnit = rawMaterialDisplay;
    let GSTPercent = rawMaterialGSTPercent;

    const body = JSON.stringify({
      userID,
      name,
      brandName,
      supplier,
      type,
      baseQuantity,
      baseUnit,
      rate,
      rateWOGST,
      recipeUnit,
      displayRateUnit,
      GSTPercent
    });

    const config = {
      headers: {
        'Content-Type': 'application/JSON',
        Authorization: `Bearer ${localStorage.token}`
      }
    };

    const res = await axios.post('/api/v1/rawMaterial', body, config);
    dispatch({
      type: 'SET_LOADING'
    });

    if (res.data.status === 'success') {
      dispatch({
        type: 'COMPLETE_FORM'
      });
      sendStepStatusRequest(`${userID}`, 'Successfully created Raw material');
    }
    if (res.data.status === 'failure') {
      sendStepStatusRequest(`${userID}`, 'Failed to create Raw material');
    }
  };

  return <div />;
};

export default RawMaterialRequest;
