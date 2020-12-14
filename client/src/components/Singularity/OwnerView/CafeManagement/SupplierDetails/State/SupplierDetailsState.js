import React, { useReducer } from 'react';

import supplierDetailsContext from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/supplierDetailsContext.js';
import supplierDetailsReducer from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/supplierDetailsReducer.js';
import {
  SET_LOADING,
  SHOW_LOADER,
  UPDATE_FIELD,
  COMPLETE_FORM
} from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/types.js';

import { useHttpClient } from 'Hooks/httpsHooks';
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
    supplierName,
    supplierPersonDetails,
    supplierMobileNumber,
    supplierAddress,
    supplierPinCode,
    supplierGSTNumber
  ) => {
    const body = JSON.stringify({
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
    console.log(res);
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
