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
  UPDATE_RAWMPRICE,
  INITIATE_RAWMATERIAL_VALIDATIONS,
  SET_FIELD_REQUIRED_ERROR,
  REMOVE_FIELD_REQUIRED_ERROR,
  VALIDATION_COMPLETED,
  INITIATE_RMATERIALPOST,
  INITIATE_SUPPLIERPOST
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/types.js';

import { produce } from 'immer';

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
        searchResults: action.payload,
        supplierID: ''
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

    case UPDATE_RAWMPRICE:
      return {
        ...state,
        rawMaterialRate: action.rawMrate,
        rawMaterialWORate: action.rawMWOGST,
        priceUpdated: true
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

    case INITIATE_RAWMATERIAL_VALIDATIONS:
      return {
        ...state,
        initiateRawMaterialValidations: true
      };

    case SET_FIELD_REQUIRED_ERROR:
      return produce(state, draftState => {
        draftState.requiredErrorFlag[action.field] = true;
        draftState.initiateRawMaterialValidations = false;
        draftState.validationsInitiated = true;
      });

    case REMOVE_FIELD_REQUIRED_ERROR:
      return produce(state, draftState => {
        draftState.requiredErrorFlag[action.field] = false;
      });

    case VALIDATION_COMPLETED:
      return {
        ...state,
        validationsCompleted: true
      };
    case INITIATE_RMATERIALPOST:
      return {
        ...state,
        initiateRMPOSTrequest: true
      };

    case INITIATE_SUPPLIERPOST:
      return {
        ...state,
        initiateSupplierPOSTrequest: true
      };
    case COMPLETE_SUPPLIERUPDATE:
      return {
        ...state,
        supplierUpdated: true,
        supplierID: action.id
      };

    case COMPLETE_FORM:
      return {
        ...state,
        loading: false,
        isDataUploaded: true
      };
  }
};
