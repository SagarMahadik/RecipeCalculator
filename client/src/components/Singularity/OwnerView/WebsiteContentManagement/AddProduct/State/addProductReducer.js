import {
  SET_LOADING,
  NEXT_STEP,
  PREVIOUS_STEP,
  UPDATE_FIELD,
  SET_PRODUCTFILEDETAILS,
  POST_ADDON,
  SET_FILEURL,
  COMPLETE_FORM,
  SET_CATEGORYDATA,
  SET_SLECTEDCATEGORY,
  SET_PRODUCTSTATUSDATA,
  UPDATE_PRODUCTSTATUSDATA,
  SET_ADDONITEMDATA,
  UPDATE_ADDONITEMDATA,
  UPDATE_ADDONFLAVOURDATA,
  SET_ADDONFLAVOURDATA,
  SET_PRODUCTVARIANTDATA,
  UPDATE_PRODUCTVARIANTDATA,
  UPDATE_NUTRITIONDATA,
  SET_SUBCATEGORY,
  SHOW_LOADER
} from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/types.js';

export default (state, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return {
        ...state,
        step: action.payload + 1
      };
    case PREVIOUS_STEP:
      return {
        ...state,
        step: action.payload - 1
      };
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
    case UPDATE_FIELD:
      const { input, value } = action.payload;
      return {
        ...state,
        [input]: value,
        isFileUploadVisible: true
      };

    case SET_PRODUCTFILEDETAILS:
      const { input1, value1, src, imageFIle } = action.payload;
      return {
        ...state,
        [input1]: value1,
        filesrc: src,
        file: imageFIle,
        loading: false
      };

    case SET_FILEURL:
      return {
        ...state,
        productImageURL: action.payload,
        loading: false
      };
    case COMPLETE_FORM:
      return {
        ...state,
        loading: false,
        isComplete: true
      };

    case SET_CATEGORYDATA:
      return {
        ...state,
        categoryData: action.payload,
        isCategory: true,
        loading: false
      };

    case SET_SLECTEDCATEGORY:
      const { value2, data, condition } = action.payload;
      return {
        ...state,
        selectedCategory: data,
        Category: value2,
        isSubCategory: condition
      };

    case SET_SUBCATEGORY: {
      const { data } = action.payload;
      return {
        ...state,
        SubCategory: data
      };
    }
    case SET_PRODUCTSTATUSDATA:
      return {
        ...state,
        productStatusData: action.payload,
        loading: false
      };

    case UPDATE_PRODUCTSTATUSDATA:
      return {
        ...state,
        productStatusData: action.updatedProductStatus,
        additionalInformation: action.selectedOption
      };
    case SET_ADDONITEMDATA:
      return {
        ...state,
        addOnitemData: action.payload,
        loading: false
      };

    case UPDATE_ADDONITEMDATA:
      return {
        ...state,
        addOnitemData: action.updatedAddOnItem,
        selectedAddOnItemItems: action.selectedOption
      };
    case SET_ADDONFLAVOURDATA:
      return {
        ...state,
        addOnFlavourData: action.payload,
        loading: false
      };
    case UPDATE_ADDONFLAVOURDATA:
      return {
        ...state,
        addOnFlavourData: action.updatedAddOnItem1,
        selectedAddOnItemItems: action.selectedOption1
      };
    case SET_PRODUCTVARIANTDATA:
      return {
        ...state,
        productVariantData: action.payload,
        loading: false
      };

    case UPDATE_PRODUCTVARIANTDATA:
      return {
        ...state,
        productVariantData: action.updatedProductVariant,
        additionalInformation: action.productVariant
      };
    case UPDATE_NUTRITIONDATA:
      return {
        ...state,
        nutritionDetails: action.payload,
        step: action.currentStep + 1
      };
  }
};
