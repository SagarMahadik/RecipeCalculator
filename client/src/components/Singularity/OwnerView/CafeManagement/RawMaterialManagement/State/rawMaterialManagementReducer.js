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
  COMPLETE_FORM
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/types.js';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SHOW_LOADER:
      return {
        ...state,
        showLoader: true
      };
    case SET_SUPPLIERDETAILS: {
      return {
        ...state,
        supplierDetails: action.payload
      };
    }
    case CLEAR_SEARCHRESULTS: {
      return {
        ...state,
        searchResults: action.payload
      };
    }
    case UPDATE_SEARCHSTRING: {
      return {
        ...state,
        searchString: action.payload
      };
    }
    case UPDATE_SEARCHRESULTS: {
      return {
        ...state,
        searchResults: action.payload
      };
    }

    case SET_SUPPLIER: {
      const { supplierName, supplierID } = action.payload;
      return {
        ...state,
        searchString: supplierName,
        searchResults: [],
        supplierID: supplierID
      };
    }
    case UPDATE_FIELD:
      const { input, value } = action.payload;
      return {
        ...state,
        [input]: value
      };
    case UPDATE_RAWMTYPE:
      return {
        ...state,
        rawMaterialType: action.payload
      };

    case UPDATE_QUANTITY:
      const { displayRateUnit, baseQuantity, baseUnit } = action.payload;
      return {
        ...state,
        rawMaterialDisplay: displayRateUnit,
        rawMaterialBaseQuanitiy: baseQuantity,
        rawMaterialBaseUnit: baseUnit
      };
    case UPDATE_GST:
      const { GSTDisplay, GSTPercentage } = action.payload;
      return {
        ...state,
        rawMaterialGST: GSTDisplay,
        rawMaterialGSTPercent: GSTPercentage
      };
    case UPDATE_PRICEGSTDETAILS: {
      const { optionValue } = action.payload;
      return {
        ...state,
        rawMaterialStatePriceGST: optionValue
      };
    }
    case COMPLETE_FORM:
      return {
        ...state,
        loading: false,
        isDataUploaded: true
      };
  }
};
