import React, { useReducer, useContext } from 'react';

import {
  supplierDetailsContext,
  supplierDetailsDispatchContext
} from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/supplierDetailsContext.js';

import supplierDetailsReducer from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/supplierDetailsReducer.js';

import { useApplicationState } from 'Context/ApplicationContext/ApplicationState.js';

import { setFieldInitialValue } from 'Utils/setFieldValueInLocalStorage.js';

function SupplierDetailsState({ children }) {
  const initialState = {
    supplierName: setFieldInitialValue('supplierName'),
    supplierPersonDetails: '',
    supplierMobileNumber: '',
    supplierAddress: '',
    supplierPinCode: '',
    supplierGSTNumber: '',
    isComplete: false,
    showLoader: false,
    loading: false,
    trigger: false,
    requiredFields: ['supplierName', 'supplierPersonDetails'],
    requiredFieldsError: {
      supplierName: false,
      supplierPersonDetails: false
    },
    supplierValidationsInitiated: false,
    supplierValidationCompleted: false,
    initiatePostSupplierRequest: false
  };

  const [state, dispatch] = useReducer(supplierDetailsReducer, initialState);

  const { userID } = useApplicationState();

  const {
    supplierName,
    supplierPersonDetails,
    supplierMobileNumber,
    supplierAddress,
    supplierPinCode,
    supplierGSTNumber,
    isComplete,
    showLoader,
    loading,
    trigger,
    requiredFieldsError,
    requiredFields,
    supplierValidationsInitiated,
    supplierValidationCompleted,
    initiatePostSupplierRequest
  } = state;

  return (
    <supplierDetailsContext.Provider
      value={{
        userID,
        supplierName,
        supplierPersonDetails,
        supplierMobileNumber,
        supplierAddress,
        supplierPinCode,
        supplierGSTNumber,
        isComplete,
        showLoader,
        loading,
        trigger,
        requiredFieldsError,
        supplierValidationsInitiated,
        requiredFields,
        supplierValidationCompleted,
        initiatePostSupplierRequest
      }}
    >
      <supplierDetailsDispatchContext.Provider value={dispatch}>
        {children}
      </supplierDetailsDispatchContext.Provider>
    </supplierDetailsContext.Provider>
  );
}

function useSupplierDetailsState() {
  const context = useContext(supplierDetailsContext);

  if (context === undefined) {
    throw new Error(
      'useSupplierDetailsState must be used within a SupplierDetailsProvider'
    );
  }
  return context;
}

function useSupplierDetailsDispatch() {
  const context = useContext(supplierDetailsDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useSupplierDetailsDispatch must be used within a SupplierDetailsDispatchProvider'
    );
  }
  return context;
}

export {
  SupplierDetailsState,
  useSupplierDetailsState,
  useSupplierDetailsDispatch
};
