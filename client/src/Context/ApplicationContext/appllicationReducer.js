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
  REMOVE_REGISTRATIONERROR,
  SET_FRONTENDERROR,
  REMOVE_FRONTENDERROR,
  SET_VALIDATIONERROR,
  REMOVE_VALIDATIONERROR,
  SET_FORMVALIDATIONCOMPLETE,
  SET_REGISTERFORMVALIDATIONCOMPLETE,
  LOGIN_VALIDATIONINITIATED,
  REGISTRATION_VALIDATIONINITIATED,
  SENDING_LOGINREQUEST,
  SENDING_REGISTRATIONREQUEST,
  REGISTRATION_FAIL,
  INITIIATE_LOGINREQEST,
  INITIIATE_REGISTRATIONREQEST,
  LOADING_USER_FAILED,
  SET_SUPPLIERDETAILS,
  PLAY_WELCOMETONE,
  INCREMENT_WELCOMETONECOUNT
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

    case INITIIATE_REGISTRATIONREQEST:
      return {
        ...state,
        initiateRegRequest: true
      };

    case INITIIATE_LOGINREQEST:
      return {
        ...state,
        initiateLoginRequest: true
      };

    case SENDING_LOGINREQUEST:
      return {
        ...state,
        sendingLoginRequest: true
      };

    case SENDING_REGISTRATIONREQUEST:
      return {
        ...state,
        sendingRegRequest: true
      };

    case REGISTRATION_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.data,
        userID: action.data.userID,
        userBrandName: action.data.userBrandName,
        email: '',
        brandName: '',
        password: '',
        passwordConfirm: '',
        mobileNumber: '',
        fetchAppData: true
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loginEmail: '',
        loginPassword: '',
        authError: true,
        errorMessage: action.message,
        loginFail: true,
        loginValidationInitiated: false,
        formValidated: false,
        initiateLoginRequest: false,

        loading: false
      };
    case REGISTRATION_FAIL:
      return {
        ...state,
        errorMessage: action.message,
        customerMatchLogin: true,
        registrationFromValidated: false,
        regValIntitiated: false,
        initiateRegRequest: false,
        registrationError: true,
        loading: false
      };

    case REMOVE_REGISTRATIONERROR:
      return {
        ...state,
        errorMessage: '',
        customerMatchLogin: true,
        registrationFromValidated: false,
        regValIntitiated: false,
        initiateRegRequest: false,
        registrationError: false,
        loading: false
      };

    case REMOVE_AUTHERROR:
      return {
        ...state,
        authError: false,
        errorMessage: ''
      };

    case REGISTRATION_VALIDATIONINITIATED:
      return {
        ...state,
        regValIntitiated: true
      };

    case SET_FRONTENDERROR:
      return produce(state, draftState => {
        draftState.frontEndError[action.field] = true;
        draftState.loginValidationInitiated = false;
        draftState.regValIntitiated = false;
        draftState.loading = false;
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
        draftState.loginValidationInitiated = false;
        draftState.regValIntitiated = false;
        draftState.loading = false;
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
        user: action.payload,
        userID: action.payload.userID,
        userBrandName: action.payload.brandName,
        fetchAppData: true
      };

    case LOADING_USER_FAILED:
      return {
        ...state,
        loading: false,
        authComplete: true
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

    case SET_SUPPLIERDETAILS:
      return {
        ...state,
        supplierDetails: [...action.payload],
        supplierDetailsLoaded: true
      };

    case PLAY_WELCOMETONE:
      return {
        ...state,
        playWelcomTone: true
      };

    case INCREMENT_WELCOMETONECOUNT:
      return {
        ...state,
        welcomeTonePlayedCount: 1,
        playWelcomTone: false
      };
  }
};
