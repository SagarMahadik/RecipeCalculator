import {
  SET_LOADING,
  NEXT_STEP,
  PREVIOUS_STEP,
  UPDATE_FIELD,
  SET_FILENAME,
  POST_ADDON,
  SET_FILEURL,
  COMPLETE_FORM
} from 'components/Singularity/OwnerView/WebsiteContentManagement/AddAdditionalProductInformation/AddAdditionalProductInformationState/types';

export default (state, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return {
        ...state,
        step: action.payload + 1
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case UPDATE_FIELD:
      const { input, value } = action.payload;
      return {
        ...state,
        [input]: value
      };
    case SET_FILENAME:
      const { input1, value1 } = action.payload;
      return {
        ...state,
        [input1]: value1,
        loading: false
      };
    case SET_FILEURL:
      return {
        ...state,
        additionalInformationIconURL: action.payload,
        loading: false
      };
    case COMPLETE_FORM:
      return {
        ...state,
        isComplete: true
      };
  }
};
