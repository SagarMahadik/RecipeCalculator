import {
  SET_SLECTEDCATEGORY,
  SET_CATEGORYDATA,
  SET_LOADING,
  SET_DMENUPRODUCTDATA,
  UPDATE_FIELD,
  REGISTRATION_SUCCESS,
  LOGIN_SUCCESS,
  LOAD_USER,
  SET_AUTHTOKEN
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

    case REGISTRATION_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.data
      };

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
