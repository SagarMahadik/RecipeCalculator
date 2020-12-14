import {
  SET_LOADING,
  SHOW_LOADER,
  UPDATE_FIELD,
  COMPLETE_FORM
} from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/types.js';

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
        [input]: value
      };
    case COMPLETE_FORM:
      return {
        ...state,
        loading: false,
        isComplete: true
      };
  }
};
