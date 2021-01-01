import React, { useEffect } from 'react';

import {
  useRawMaterialsState,
  useRawMaterialsDispatch
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/RawMaterialManagementState.js';

import { useApplicationState } from 'Context/ApplicationContext/ApplicationState.js';

import { useStepStatusRequest } from 'Hooks/setpLogHooks.js';

import axios from 'axios';

const SupplierRequest = () => {
  const dispatch = useRawMaterialsDispatch();
  const { sendStepStatusRequest } = useStepStatusRequest();

  const {
    searchString,
    supplierUpdated,
    initiateSupplierPOSTrequest
  } = useRawMaterialsState();

  const { userID } = useApplicationState();

  useEffect(() => {
    if (initiateSupplierPOSTrequest) {
      addSupplierToDB(userID, searchString);
    }
  }, [initiateSupplierPOSTrequest]);

  useEffect(() => {
    if (supplierUpdated) {
      dispatch({
        type: 'INITIATE_RMATERIALPOST'
      });
      sendStepStatusRequest(
        `${userID}`,
        'Successfully created Supplier & initiate Raw Material'
      );
    }
  }, [supplierUpdated]);

  const addSupplierToDB = async (userID, supplierName) => {
    const body = JSON.stringify({
      userID,
      supplierName
    });

    const config = {
      headers: {
        'Content-Type': 'application/JSON',
        Authorization: `Bearer ${localStorage.token}`
      }
    };

    const res = await axios.post('/api/v1/supplier', body, config);
    dispatch({
      type: 'SET_LOADING'
    });

    if (res.data.status === 'success') {
      dispatch({
        type: 'COMPLETE_SUPPLIERUPDATE',
        id: res.data.data.data._id
      });
      sendStepStatusRequest(`${userID}`, 'Successfully created Supplier');
    }
    if (res.data.status === 'failure') {
      dispatch({
        type: 'COMPLETE_SUPPLIERUPDATE',
        id: res.data.data.data._id
      });
      sendStepStatusRequest(`${userID}`, 'Failed to create Supplier');
    }
  };

  return <div />;
};

export default SupplierRequest;
