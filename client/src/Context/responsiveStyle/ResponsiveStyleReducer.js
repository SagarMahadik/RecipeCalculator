import { SET_DESKTOP, SET_TABLET, SET_MOBILE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_DESKTOP:
      return {
        isDesktop: true,
        isTablet: false,
        isMobile: false
      };
    case SET_MOBILE:
      return {
        isDesktop: false,
        isTablet: false,
        isMobile: true
      };
    case SET_TABLET:
      return {
        isDesktop: false,
        isTablet: true,
        isMobile: false
      };
  }
};
