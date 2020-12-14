import React, { useReducer, useEffect } from 'react';

import quoteGenerationContext from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/State/quoteGenerationContext.js';
import quoteGenerationReducer from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/State/quoteGenerationReducer.js';
import {
  UPDATE_FIELD,
  SET_RECIPE,
  CALCULATE_RECIPERMQTYCOST,
  CLEAR_SEARCHRESULTS,
  UPDATE_SEARCHSTRING,
  UPDATE_SEARCHRESULTS,
  UPDATE_PRODUCTINQUOTE,
  CALCULATE_RECIPEEACHBRRMQTYCOST,
  CALCULATE_RECIPETOTALBRRMQTYCOST,
  CALCULATE_RECIPEFINALBRRMQTYCOST,
  CALCULATE_QUOTEFINALQTYCOST,
  UPDATE_PRODUCTUNIT,
  SHOWHIDE_PRODUCT,
  SHOWHIDE_BASICRECIPE
} from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/State/types.js';

import { useHttpClient } from 'Hooks/httpsHooks';
import axios from 'axios';

const QuoteGenerationState = props => {
  const initialState = {
    orderName: '',
    orderTag: '',
    recipes: [],
    searchString: '',
    searchResults: [],
    quoteproducts: [],
    totalQuoteQuantity: 0,
    totalQuoteCost: 0
  };
  const [state, dispatch] = useReducer(quoteGenerationReducer, initialState);

  const {
    orderName,
    orderTag,
    recipes,
    searchString,
    searchResults,
    quoteproducts,
    totalQuoteQuantity,
    totalQuoteCost
  } = state;

  useEffect(() => {
    getData('/api/v1/recipe');
  }, []);

  useEffect(() => {
    if (searchString === '') {
      {
        dispatch({
          type: CLEAR_SEARCHRESULTS,
          payload: []
        });
      }
    }
  }, [searchString]);

  useEffect(() => {
    dispatch({ type: CALCULATE_RECIPERMQTYCOST });
    dispatch({ type: CALCULATE_RECIPEEACHBRRMQTYCOST });
    dispatch({ type: CALCULATE_RECIPETOTALBRRMQTYCOST });
    dispatch({ type: CALCULATE_RECIPEFINALBRRMQTYCOST });
    dispatch({ type: CALCULATE_QUOTEFINALQTYCOST });
  }, [quoteproducts]);

  const { sendRequest, error } = useHttpClient();

  const getData = async url => {
    try {
      let res = await sendRequest(url);

      dispatch({
        type: SET_RECIPE,
        payload: res
      });
    } catch (err) {}
  };

  const handleChangeFor = input => e => {
    {
      dispatch({
        type: UPDATE_FIELD,
        payload: { input, value: e.target.value }
      });
    }
  };

  const handleSearchText = e => {
    let string = e.currentTarget.value;

    {
      dispatch({
        type: UPDATE_SEARCHSTRING,
        payload: string
      });
    }

    let searchOptions = recipes
      .filter(
        recipe => recipe.name.toLowerCase().indexOf(string.toLowerCase()) > -1
      )
      .slice(0, 4);

    {
      dispatch({
        type: UPDATE_SEARCHRESULTS,
        payload: searchOptions
      });
    }
  };

  const handleSearchClick = recipe => {
    dispatch({
      type: UPDATE_PRODUCTINQUOTE,
      payload: recipe
    });
  };

  const handleQuoteProductUnits = index => e => {
    console.log(index);
    console.log(e.target.value);
    let unit = e.target.value;
    dispatch({
      type: UPDATE_PRODUCTUNIT,
      payload: { index, unit }
    });
  };

  const handleProductDisplay = index => {
    dispatch({
      type: SHOWHIDE_PRODUCT,
      payload: index
    });
  };

  const handleBasicRecipeDisplay = (pindex, brindex) => {
    console.log(pindex);
    console.log(brindex);

    dispatch({
      type: SHOWHIDE_BASICRECIPE,
      productIndex: pindex,
      basicRecipeIndex: brindex
    });
  };

  return (
    <quoteGenerationContext.Provider
      value={{
        orderName,
        orderTag,
        recipes,
        searchString,
        searchResults,
        quoteproducts,
        totalQuoteCost,
        totalQuoteQuantity,
        handleChangeFor,
        handleSearchText,
        handleSearchClick,
        handleQuoteProductUnits,
        handleProductDisplay,
        handleBasicRecipeDisplay
      }}
    >
      {props.children}
    </quoteGenerationContext.Provider>
  );
};

export default QuoteGenerationState;
