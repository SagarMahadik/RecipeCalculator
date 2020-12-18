import {
  SET_SLECTEDCATEGORY,
  SET_CATEGORYDATA,
  SET_LOADING,
  SET_DMENUPRODUCTDATA,
  UPDATE_FIELD,
  REGISTRATION_SUCCESS,
  LOGIN_SUCCESS,
  LOAD_USER,
  SET_AUTHTOKEN,
  LOGIN_FAIL,
  REMOVE_AUTHERROR,
  SET_FRONTENDERROR,
  REMOVE_FRONTENDERROR,
  SET_VALIDATIONERROR,
  REMOVE_VALIDATIONERROR,
  SET_FORMVALIDATIONCOMPLETE,
  SET_REGISTERFORMVALIDATIONCOMPLETE,
  LOGIN_VALIDATIONINITIATED,
  REGISTRATION_VALIDATIONINITIATED,
  SENDING_LOGINREQUEST
} from 'Context/ApplicationContext/types.js';

import { produce } from 'immer';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_AUTHTOKEN:
      return {
        ...state,
        authTokenFlag: true
      };

    case UPDATE_FIELD:
      const { input, value } = action.payload;
      return {
        ...state,
        [input]: value
      };

    case LOGIN_VALIDATIONINITIATED:
      return {
        ...state,
        loginValidationInitiated: true
      };

    case SENDING_LOGINREQUEST:
      return {
        ...state,
        sendingLoginRequest: true
      };

    case REGISTRATION_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.data
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loginEmail: '',
        loginPassword: '',
        authError: true,
        errorMessage: action.message
      };

    case REMOVE_AUTHERROR:
      return {
        ...state,
        authError: false,
        errorMessage: ''
      };

    case SET_FRONTENDERROR:
      console.log(action.field);
      return produce(state, draftState => {
        draftState.frontEndError[action.field] = true;
      });

    case REMOVE_FRONTENDERROR:
      return produce(state, draftState => {
        Object.keys(draftState.frontEndError).map(function(key, index) {
          draftState.frontEndError[key] = false;
        });
      });

    case SET_VALIDATIONERROR:
      return produce(state, draftState => {
        draftState.validationError[action.field] = true;
      });

    case REMOVE_VALIDATIONERROR:
      return produce(state, draftState => {
        Object.keys(draftState.frontEndError).map(function(key, index) {
          draftState.validationError[key] = false;
        });
      });

    case SET_FORMVALIDATIONCOMPLETE:
      return produce(state, draftState => {
        draftState.formValidated = true;
      });
    case SET_REGISTERFORMVALIDATIONCOMPLETE:
      return produce(state, draftState => {
        draftState.registrationFromValidated = true;
      });
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        authComplete: true,
        user: action.payload
      };
    case SET_CATEGORYDATA:
      return produce(state, draftState => {
        function lowercaseFirstLetter(string) {
          return string.charAt(0).toLowerCase() + string.slice(1);
        }

        draftState.categoryData = action.payload;
        draftState.categoryData.forEach(category => {
          category.categoryIdentifier = lowercaseFirstLetter(
            `${category.category}`
          );
        });
      });

    case SET_DMENUPRODUCTDATA:
      return {
        ...state,
        dMenuProductData: action.payload,
        loading: false
      };
    case SET_SLECTEDCATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      };
  }
};
