/**
 * GenreFancyItemState.js
 * This is naming blunder, to be renamed as antilibrary state.
 * Holds the state which can be accessed by components which shares the context
 */
import React, { useReducer } from 'react';

import axios from 'axios';
import GenreFancyItemReducer from './GenreFancyItemReducer';
import GenreFancyItemContext from './GenreFancyItemContext';
import {
  GET_GENREFANCYITEMS,
  SET_CURRENTGENRE,
  GET_FANCYITEMDETAILS,
  SET_LOADING,
  GET_SEARCHRESULTS,
  SET_TABLET,
  SET_MOBILE,
  SET_DESKTOP
} from '../types';

const GenreFancyItemState = props => {
  const initialState = {
    genreFancyItemDetails: [],
    fancyItemDetails: [],
    loading: false,
    currentGenre: '',
    searchResults: [],
    isDesktop: false,
    isMobile: false,
    isTablet: false,
    device: ''
  };

  const [state, dispatch] = useReducer(GenreFancyItemReducer, initialState);

  const getGenreFancyItemDetails = async genreName => {
    setLoading();
    console.log(genreName);
    const res = await axios.get(`/api/v1/genreFancyItem/${genreName}`);

    dispatch({
      type: GET_GENREFANCYITEMS,
      payload: res.data.data.data
    });
  };

  const getSearchResults = async searchString => {
    setLoading();
    const res = await axios.get(`/api/v1/search?q=${searchString}`);

    dispatch({
      type: GET_SEARCHRESULTS,
      payload: res.data.data.data
    });
  };

  const getFancyItemDetails = async fancyItemId => {
    setLoading();
    const res = await axios.get(`/api/v1/fancyItem/details/${fancyItemId}`);

    dispatch({
      type: GET_FANCYITEMDETAILS,
      payload: res.data.data.data
    });
  };

  const setCurrentGenre = async genreName => {
    console.log(genreName);
    dispatch({
      type: SET_CURRENTGENRE,
      payload: genreName
    });
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  const getGenreName = genre => {
    switch (genre) {
      case 'guidingLights':
        return 'Guiding Lights!';
      case 'luminaries':
        return 'Luminaries!';
      case 'mavericScientists':
        return 'Maveric Scientists!';
      case 'menOfLetters':
        return 'Men Of Letters';
      case 'theGrandPhilosophers':
        return 'The Grand Philosophers';
      case 'architectsOfTheFuture':
        return 'Architects Of The Future';
    }
  };

  const setDesktop = async => {
    dispatch({
      type: SET_DESKTOP,
      payload: 'desktop'
    });
  };

  const setMobile = async => {
    dispatch({
      type: SET_MOBILE,
      payload: 'mobile'
    });
  };

  const setTABLET = async => {
    dispatch({
      type: SET_TABLET,
      payload: 'tablet'
    });
  };

  const setDevice = width => {
    if (width < 767) {
      return setMobile();
    } else if (width > 767 && width < 1280) {
      return setTABLET();
    }
    return setDesktop();
  };

  return (
    <GenreFancyItemContext.Provider
      value={{
        genreFancyItemDetails: state.genreFancyItemDetails,
        fancyItemDetails: state.fancyItemDetails,
        currentGenre: state.currentGenre,
        loading: state.loading,
        searchResults: state.searchResults,
        isDesktop: state.isDesktop,
        isMobile: state.isMobile,
        isTablet: state.isTablet,
        device: state.device,
        getGenreFancyItemDetails,
        getFancyItemDetails,
        setCurrentGenre,
        getSearchResults,
        getGenreName,
        setDevice
      }}
    >
      {props.children}
    </GenreFancyItemContext.Provider>
  );
};

export default GenreFancyItemState;
