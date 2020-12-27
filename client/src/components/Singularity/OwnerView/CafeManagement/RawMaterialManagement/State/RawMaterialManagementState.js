import React, { useContext, useReducer, useEffect } from 'react';

import {
  rawMaterialManagementContext,
  rawMaterialDispatchContext
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/rawMaterialManagementContext.js';
import rawMaterialManagementReducer from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/rawMaterialManagementReducer.js';
import {
  SET_LOADING,
  SHOW_LOADER,
  UPDATE_FIELD,
  UPDATE_RAWMTYPE,
  COMPLETE_FORM,
  COMPLETE_SUPPLIERUPDATE,
  UPDATE_RAWMPRICE
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/types.js';
import {
  typeRawMaterial,
  rawMaterialOptions,
  GSTOptions,
  PricingGSTOptions
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/seedData.js';

import { applicationContext } from 'Context/ApplicationContext/applicationContext.js';

import {
  calcualatePriceWithoutGST,
  calculatePriceWithGST
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/utils.js';

import axios from 'axios';

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
    validationsInitiated: false
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
    supplierUpdated,
    rawMaterialRate,
    rawMaterialWORate,
    priceUpdated,
    rawMaterialRequiredFields,
    initiateRawMaterialValidations,
    validationsInitiated,
    requiredErrorFlag
  } = state;

  const ApplicationContext = useContext(applicationContext);

  const {
    userID,
    isAuthenticated,
    userBrandName,
    supplierDetails
  } = ApplicationContext;

  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  const setShowLoader = () => {
    dispatch({
      type: SHOW_LOADER
    });
  };

  const handleChangeFor = input => e => {
    {
      dispatch({
        type: UPDATE_FIELD,
        payload: { input, value: e.target.value }
      });
    }
  };

  const handleChangeForRawMaterialType = e => {
    let rawMtype = e.currentTarget.value;

    dispatch({
      type: UPDATE_RAWMTYPE,
      payload: rawMtype
    });
  };

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
    setLoading();

    if (res.data.status === 'success') {
      dispatch({
        type: COMPLETE_SUPPLIERUPDATE,
        id: res.data.data.data._id
      });
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    console.log('In on submit');

    //setShowLoader();

    /**
     * 
     *     if (rawMaterialGSTPercent === 0) {
      dispatch({
        type: UPDATE_RAWMPRICE,
        rawMrate: rawMaterialStatePrice,
        rawMWOGST: rawMaterialStatePrice
      });
    }

    if (rawMaterialStatePriceGST === 'withGST') {
      dispatch({
        type: UPDATE_RAWMPRICE,
        rawMrate: rawMaterialStatePrice,
        rawMWOGST: calcualatePriceWithoutGST(
          rawMaterialStatePrice,
          rawMaterialGSTPercent
        )
      });
    }
    if (rawMaterialStatePriceGST === 'woGST') {
      dispatch({
        type: UPDATE_RAWMPRICE,
        rawMrate: calculatePriceWithGST(
          rawMaterialStatePrice,
          rawMaterialGSTPercent
        ),
        rawMWOGST: rawMaterialStatePrice
      });
    }

    if (supplierID === '') {
      addSupplierToDB(userID, searchString);
    }
     */

    dispatch({
      type: 'INITIATE_RAWMATERIAL_VALIDATIONS'
    });
  };

  useEffect(() => {
    if (priceUpdated) {
      if (supplierID != '' && !supplierUpdated) {
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
    }
  }, [priceUpdated, supplierID, supplierUpdated]);

  useEffect(() => {
    if (supplierUpdated) {
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
  }, [supplierUpdated]);

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
        'Content-Type': 'application/JSON'
      }
    };

    const res = await axios.post('/api/v1/rawMaterial', body, config);
    setLoading();

    if (res.data.status === 'success') {
      dispatch({
        type: COMPLETE_FORM
      });
    }
  };

  return (
    <rawMaterialManagementContext.Provider
      value={{
        searchString,
        searchResults,
        supplierDetails,
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
