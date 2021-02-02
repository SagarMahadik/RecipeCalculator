import {
  SET_LOADING,
  SHOW_LOADER,
  UPDATE_FIELD,
  COMPLETE_FORM,
  SET_USERID,
  SET_T,
  SET_MISSINGFIELDSERROR,
  REMOVE_MISSINGFIELDSERROR,
  SET_SUPPLIERVALIDATIONS,
  SET_SUPPLIERVALIDATIONCOMPLETED,
  INITIATE_POSTSUPPLIERREQUEST
} from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/types.js';

import { produce } from 'immer';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_T:
      return {
        ...state,
        trigger: true
      };
    case SET_USERID:
      console.log(action.payload);
      return {
        ...state,
        userID: action.payload
      };
    case SHOW_LOADER:
      return {
        ...state,
        showLoader: true
      };
    case UPDATE_FIELD:
      const { input, value } = action.payload;
      localStorage.setItem(`${input}`, `${value}`);
      return {
        ...state,
        [input]: value
      };

    case SET_SUPPLIERVALIDATIONS:
      return {
        ...state,
        supplierValidationsInitiated: true
      };

    case SET_MISSINGFIELDSERROR:
      return produce(state, draftState => {
        draftState.requiredFieldsError[action.field] = true;
        draftState.supplierValidationsInitiated = false;
      });
    case REMOVE_MISSINGFIELDSERROR:
      return produce(state, draftState => {
        Object.keys(draftState.requiredFieldsError).map(function(key, index) {
          return (draftState.requiredFieldsError[key] = false);
        });
      });

    case SET_SUPPLIERVALIDATIONCOMPLETED:
      return {
        ...state,
        supplierValidationCompleted: true
      };

    case INITIATE_POSTSUPPLIERREQUEST:
      return {
        ...state,
        initiatePostSupplierRequest: true
      };
    case COMPLETE_FORM:
      return {
        ...state,
        loading: false,
        isComplete: true
      };
  }
};
