import React, { useContext, useReducer, useEffect } from 'react';

import rawMaterialManagementContext from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/rawMaterialManagementContext.js';
import rawMaterialManagementReducer from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/rawMaterialManagementReducer.js';
import {
  SET_LOADING,
  SHOW_LOADER,
  SET_SUPPLIERDETAILS,
  CLEAR_SEARCHRESULTS,
  UPDATE_SEARCHSTRING,
  UPDATE_SEARCHRESULTS,
  SET_SUPPLIER,
  UPDATE_FIELD,
  UPDATE_RAWMTYPE,
  UPDATE_QUANTITY,
  UPDATE_GST,
  UPDATE_PRICEGSTDETAILS,
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

import { useHttpClient } from 'Hooks/httpsHooks';

import applicationContext from 'Context/ApplicationContext/applicationContext';

import {
  calcualatePriceWithoutGST,
  calculatePriceWithGST
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/utils.js';

import axios from 'axios';

const RawMaterialManagementState = props => {
  const initialState = {
    searchString: '',
    searchResults: [],
    supplierDetails: [],
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
    priceUpdated: false
  };

  const [state, dispatch] = useReducer(
    rawMaterialManagementReducer,
    initialState
  );

  const {
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
    supplierUpdated,
    rawMaterialRate,
    rawMaterialWORate,
    priceUpdated
  } = state;

  const ApplicationContext = useContext(applicationContext);

  const { userID, isAuthenticated, userBrandName } = ApplicationContext;

  useEffect(() => {
    if (isAuthenticated) {
      getData(`/api/v1/supplier/${userID}`);
    }
  }, [isAuthenticated]);

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

  const { sendRequest, error } = useHttpClient();

  const getData = async url => {
    try {
      let res = await sendRequest(url);

      dispatch({
        type: SET_SUPPLIERDETAILS,
        payload: res
      });
    } catch (err) {}
  };

  useEffect(() => {
    if (searchString === '') {
      {
        dispatch({
          type: CLEAR_SEARCHRESULTS,
          payload: []
        });
      }
    }
  }, [searchString]);

  const handleSearchText = e => {
    let string = e.currentTarget.value;

    {
      dispatch({
        type: UPDATE_SEARCHSTRING,
        payload: string
      });
    }

    let searchOptions = supplierDetails
      .filter(
        detail =>
          detail.supplierName.toLowerCase().indexOf(string.toLowerCase()) > -1
      )
      .slice(0, 4);

    {
      dispatch({
        type: UPDATE_SEARCHRESULTS,
        payload: searchOptions
      });
    }
  };

  const handleSearchItemClick = item => {
    let supplierName = item.supplierName;
    let supplierID = item._id;

    {
      dispatch({
        type: SET_SUPPLIER,
        payload: { supplierName, supplierID }
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

  const handleChangeForRawMaterialType = e => {
    let rawMtype = e.currentTarget.value;

    dispatch({
      type: UPDATE_RAWMTYPE,
      payload: rawMtype
    });
  };

  const handleTypeOfRawMaterialOption = option => {
    const { displayRateUnit, baseQuantity, baseUnit } = option;

    dispatch({
      type: UPDATE_QUANTITY,
      payload: { displayRateUnit, baseQuantity, baseUnit }
    });
  };

  const handleRawMaterialGSTOption = option => {
    const { GSTDisplay, GSTPercentage } = option;

    dispatch({
      type: UPDATE_GST,
      payload: { GSTDisplay, GSTPercentage }
    });
  };

  const handleRawMPriceGSTDetails = option => {
    const { optionValue } = option;
    dispatch({
      type: UPDATE_PRICEGSTDETAILS,
      payload: { optionValue }
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

    setShowLoader();

    if (rawMaterialGSTPercent === 0) {
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
        handleSearchText,
        handleSearchItemClick,
        handleChangeFor,
        handleChangeForRawMaterialType,
        handleTypeOfRawMaterialOption,
        handleRawMaterialGSTOption,
        handleRawMPriceGSTDetails,
        onSubmit
      }}
    >
      {props.children}
    </rawMaterialManagementContext.Provider>
  );
};

export default RawMaterialManagementState;
