import {
  GET_GENREFANCYITEMS,
  GET_FANCYITEMDETAILS,
  SET_CURRENTGENRE,
  SET_LOADING,
  GET_SEARCHRESULTS,
  SET_DESKTOP,
  SET_MOBILE,
  SET_TABLET
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_GENREFANCYITEMS:
      return {
        ...state,
        genreFancyItemDetails: action.payload,
        loading: false
      };
    case SET_CURRENTGENRE:
      return {
        ...state,
        currentGenre: action.payload
      };
    case GET_FANCYITEMDETAILS:
      return {
        ...state,
        fancyItemDetails: action.payload,
        loading: false
      };
    case GET_SEARCHRESULTS:
      return {
        ...state,
        searchResults: action.payload,
        laoding: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_DESKTOP:
      return {
        ...state,
        isDesktop: true,
        isTablet: false,
        isMobile: false,
        device: action.payload
      };
    case SET_MOBILE:
      return {
        ...state,
        isDesktop: false,
        isTablet: false,
        isMobile: true,
        device: action.payload
      };
    case SET_TABLET:
      return {
        ...state,
        isDesktop: false,
        isTablet: true,
        isMobile: false,
        device: action.payload
      };

    default:
      return state;
  }
};
