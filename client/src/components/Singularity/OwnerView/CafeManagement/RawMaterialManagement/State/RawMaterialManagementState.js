import React, { useContext, useReducer } from 'react';

import {
  rawMaterialManagementContext,
  rawMaterialDispatchContext
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/rawMaterialManagementContext.js';
import rawMaterialManagementReducer from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/rawMaterialManagementReducer.js';

import {
  typeRawMaterial,
  rawMaterialOptions,
  GSTOptions,
  PricingGSTOptions
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/seedData.js';

const RawMaterialManagementState = props => {
  const initialState = {
    searchString: '',
    searchResults: [],
    supplierID: '',
    rawMaterialName: '',
    brandName: '',
    rawMaterialType: '',
    rawMaterialDisplay: '',
    rawMaterialBaseQuanitiy: '',
    rawMaterialBaseUnit: '',
    rawMaterialGST: '',
    rawMaterialGSTPercent: '',
    rawMaterialStatePrice: '',
    rawMaterialBaseRateWithGST: '',
    rawMaterialBaseRateWOGST: '',
    rawMaterialStatePriceGST: '',
    rawMaterialGSTNumber: '',
    rawMaterialRate: '',
    rawMaterialWORate: '',
    rawMaterialTypeDetails: [...typeRawMaterial],
    rawMaterialOptionData: [...rawMaterialOptions],
    GSTOptionsData: [...GSTOptions],
    priceGSTOptionsData: [...PricingGSTOptions],
    loading: false,
    showLoader: false,
    isDataUploaded: false,
    supplierUpdated: false,
    priceUpdated: false,
    rawMaterialRequiredFields: [
      'rawMaterialName',
      'rawMaterialType',
      'rawMaterialBaseQuanitiy',
      'rawMaterialGST',
      'rawMaterialStatePriceGST',
      'rawMaterialStatePrice'
    ],
    requiredErrorFlag: {
      rawMaterialName: false,
      rawMaterialType: false,
      rawMaterialBaseQuanitiy: false,
      rawMaterialGST: false,
      rawMaterialStatePrice: false,
      rawMaterialStatePriceGST: false
    },
    initiateRawMaterialValidations: false,
    validationsInitiated: false,
    validationsCompleted: false,
    initiateRMPOSTrequest: false,
    initiateSupplierPOSTrequest: false
  };

  const [state, dispatch] = useReducer(
    rawMaterialManagementReducer,
    initialState
  );

  const {
    searchString,
    searchResults,
    supplierID,
    rawMaterialName,
    brandName,
    rawMaterialType,
    rawMaterialDisplay,
    rawMaterialBaseQuanitiy,
    rawMaterialBaseUnit,
    rawMaterialGST,
    rawMaterialGSTPercent,
    rawMaterialStatePrice,
    rawMaterialBaseRateWithGST,
    rawMaterialBaseRateWOGST,
    rawMaterialStatePriceGST,
    rawMaterialGSTNumber,
    rawMaterialTypeDetails,
    rawMaterialOptionData,
    GSTOptionsData,
    priceGSTOptionsData,
    loading,
    showLoader,
    isDataUploaded,
    rawMaterialRate,
    rawMaterialWORate,
    priceUpdated,
    rawMaterialRequiredFields,
    initiateRawMaterialValidations,
    validationsInitiated,
    requiredErrorFlag,
    validationsCompleted,
    initiateRMPOSTrequest,
    initiateSupplierPOSTrequest,
    supplierUpdated
  } = state;

  const handleChangeForRawMaterialType = e => {
    let rawMtype = e.currentTarget.value;

    dispatch({
      type: 'UPDATE_RAWMTYPE',
      payload: rawMtype
    });
  };
  const handleChangeFor = input => e => {
    dispatch({
      type: 'UPDATE_FIELD',
      payload: { input, value: e.target.value }
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    dispatch({
      type: 'INITIATE_RAWMATERIAL_VALIDATIONS'
    });
  };

  return (
    <rawMaterialManagementContext.Provider
      value={{
        searchString,
        searchResults,
        supplierID,
        rawMaterialName,
        brandName,
        rawMaterialType,
        rawMaterialDisplay,
        rawMaterialBaseQuanitiy,
        rawMaterialBaseUnit,
        rawMaterialGST,
        rawMaterialGSTPercent,
        rawMaterialStatePrice,
        rawMaterialBaseRateWithGST,
        rawMaterialBaseRateWOGST,
        rawMaterialStatePriceGST,
        rawMaterialGSTNumber,
        rawMaterialTypeDetails,
        rawMaterialOptionData,
        GSTOptionsData,
        priceGSTOptionsData,
        loading,
        showLoader,
        isDataUploaded,
        initiateRawMaterialValidations,
        rawMaterialRequiredFields,
        validationsInitiated,
        requiredErrorFlag,
        validationsCompleted,
        initiateRMPOSTrequest,
        initiateSupplierPOSTrequest,
        supplierUpdated,
        priceUpdated,
        rawMaterialRate,
        rawMaterialWORate,
        handleChangeFor,
        handleChangeForRawMaterialType,
        onSubmit
      }}
    >
      <rawMaterialDispatchContext.Provider value={dispatch}>
        {props.children}
      </rawMaterialDispatchContext.Provider>
    </rawMaterialManagementContext.Provider>
  );
};

function useRawMaterialsState() {
  const context = useContext(rawMaterialManagementContext);

  if (context === undefined) {
    throw new Error(
      'useSupplierDetailsState must be used within a CountProvider'
    );
  }
  return context;
}

function useRawMaterialsDispatch() {
  const context = useContext(rawMaterialDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useSupplierDetailsDispatch must be used within a CountProvider'
    );
  }
  return context;
}

export {
  RawMaterialManagementState,
  useRawMaterialsState,
  useRawMaterialsDispatch
};
