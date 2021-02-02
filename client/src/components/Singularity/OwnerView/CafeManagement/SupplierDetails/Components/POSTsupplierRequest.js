import React, { useEffect } from 'react';

import {
  useSupplierDetailsState,
  useSupplierDetailsDispatch
} from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/SupplierDetailsState.js';

import useCreateSupplier from 'Hooks/APICalls/useCreateSupplier.js';

const POSTsupplierRequest = () => {
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

  const {
    mutateAsync: createSupplier,
    isError,
    error,
    isSuccess,
    status
  } = useCreateSupplier();
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

  useEffect(() => {
    if (isSuccess) {
      dispatch({
        type: 'COMPLETE_FORM'
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log('there was error');
    }
  }, [isError]);

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

    const res = await createSupplier(body);

    dispatch({
      type: 'SET_LOADING'
    });
  };

  return <div />;
};

export default POSTsupplierRequest;
