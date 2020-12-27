import React, { useEffect } from 'react';

import {
  useRawMaterialsState,
  useRawMaterialsDispatch
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/RawMaterialManagementState.js';

import axios from 'axios';

const SupplierRequest = () => {
  console.log('In a supplier request');

  const dispatch = useRawMaterialsDispatch();

  const {
    searchString,
    userID,
    supplierUpdated,
    supplierID,
    initiateSupplierPOSTrequest
  } = useRawMaterialsState();

  useEffect(() => {
    if (initiateSupplierPOSTrequest) {
      addSupplierToDB(userID, searchString);
    }
  }, [initiateSupplierPOSTrequest]);

  useEffect(() => {
    console.log('in a useeffct supplier');
    if (supplierUpdated) {
      dispatch({
        type: 'INITIATE_RMATERIALPOST'
      });
    }
  }, [supplierUpdated]);

  const addSupplierToDB = async (userID, supplierName) => {
    const body = JSON.stringify({
      userID,
      supplierName
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
        type: 'COMPLETE_SUPPLIERUPDATE',
        id: res.data.data.data._id
      });
    }
  };

  return <div />;
};

export default SupplierRequest;
