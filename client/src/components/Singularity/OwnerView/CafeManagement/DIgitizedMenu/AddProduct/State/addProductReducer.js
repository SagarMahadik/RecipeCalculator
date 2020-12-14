import {
  SET_SUBCATEGORY,
  SET_SLECTEDCATEGORY,
  SET_CATEGORYDATA,
  UPDATE_FIELD,
  SET_LOADING,
  SHOW_LOADER,
  COMPLETE_FORM
} from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/types.js';

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
    case UPDATE_FIELD:
      const { input, value } = action.payload;
      return {
        ...state,
        [input]: value,
        isFileUploadVisible: true
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
        category: value2,
        isSubCategory: condition
      };

    case SET_SUBCATEGORY: {
      const { data } = action.payload;
      return {
        ...state,
        subCategory: data
      };
    }
  }
};
