import React, { useReducer, useContext, useEffect } from 'react';

import supplierDetailsContext from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/supplierDetailsContext.js';
import supplierDetailsReducer from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/supplierDetailsReducer.js';
import {
  SET_LOADING,
  SHOW_LOADER,
  UPDATE_FIELD,
  COMPLETE_FORM,
  SET_USERID
} from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/types.js';

import applicationContext from 'Context/ApplicationContext/applicationContext';
import { createSupplierRequestBody } from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/createSupplierRequestBody.js';

import axios from 'axios';

const SupplierDetailsState = props => {
  const initialState = {
    supplierName: '',
    supplierPersonDetails: '',
    supplierMobileNumber: '',
    supplierAddress: '',
    supplierPinCode: '',
    supplierGSTNumber: '',
    isComplete: false,
    showLoader: false,
    loading: false
  };

  const [state, dispatch] = useReducer(supplierDetailsReducer, initialState);

  const ApplicationContext = useContext(applicationContext);
  const { userID } = ApplicationContext;

  const {
    supplierName,
    supplierPersonDetails,
    supplierMobileNumber,
    supplierAddress,
    supplierPinCode,
    supplierGSTNumber,
    isComplete,
    showLoader,
    loading
  } = state;

  const setLoading = () => dispatch({ type: SET_LOADING });
  const setShowLoader = () => dispatch({ type: SHOW_LOADER });
  const addDataToDB = async (
    userID,
    supplierName,
    supplierPersonDetails,
    supplierMobileNumber,
    supplierAddress,
    supplierPinCode,
    supplierGSTNumber
  ) => {
    console.log(userID);
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
    setLoading();

    if (res.data.status === 'success') {
      dispatch({
        type: COMPLETE_FORM
      });
    }
  };

  const handleChangeFor = input => e => {
    {
      dispatch({
        type: UPDATE_FIELD,
        payload: { input, value: e.target.value }
      });
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(e);
    setShowLoader();
    addDataToDB(
      userID,
      supplierName,
      supplierPersonDetails,
      supplierMobileNumber,
      supplierAddress,
      supplierPinCode,
      supplierGSTNumber
    );
  };

  return (
    <supplierDetailsContext.Provider
      value={{
        supplierName,
        supplierPersonDetails,
        supplierMobileNumber,
        supplierAddress,
        supplierPinCode,
        supplierGSTNumber,
        isComplete,
        showLoader,
        loading,
        handleChangeFor,
        onSubmit
      }}
    >
      {props.children}
    </supplierDetailsContext.Provider>
  );
};

export default SupplierDetailsState;
