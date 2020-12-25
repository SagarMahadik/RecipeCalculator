import React, { useEffect } from 'react';

import {
  useSupplierDetailsState,
  useSupplierDetailsDispatch
} from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/SupplierDetailsState.js';
import axios from 'axios';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

const POSTsupplierRequest = () => {
  const { sendStepStatusRequest } = useStepStatusRequest();
  const {
    userID,
    supplierName,
    supplierPersonDetails,
    supplierMobileNumber,
    supplierAddress,
    supplierPinCode,
    supplierGSTNumber,
    initiatePostSupplierRequest
  } = useSupplierDetailsState();
  const dispatch = useSupplierDetailsDispatch();

  useEffect(() => {
    if (initiatePostSupplierRequest) {
      dispatch({
        type: 'SHOW_LOADER'
      });
      addSupplierToDB(
        userID,
        supplierName,
        supplierPersonDetails,
        supplierMobileNumber,
        supplierAddress,
        supplierPinCode,
        supplierGSTNumber
      );
    }
  }, [initiatePostSupplierRequest]);

  const addSupplierToDB = async (
    userID,
    supplierName,
    supplierPersonDetails,
    supplierMobileNumber,
    supplierAddress,
    supplierPinCode,
    supplierGSTNumber
  ) => {
    const body = JSON.stringify({
      userID,
      supplierName,
      supplierPersonDetails,
      supplierMobileNumber,
      supplierAddress,
      supplierPinCode,
      supplierGSTNumber
    });

    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };
    const res = await axios.post('/api/v1/supplier', body, config);
    dispatch({
      type: 'SET_LOADING'
    });

    if (res.data.status === 'success') {
      dispatch({
        type: 'COMPLETE_FORM'
      });
      const stepREs = sendStepStatusRequest(
        `${userID}`,
        `Supplier created successfully for ${userID}`,
        'success'
      );
    }
  };

  return <div />;
};

export default POSTsupplierRequest;
