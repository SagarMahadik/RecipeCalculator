import React, { useReducer, useEffect } from 'react';
import displayDMenuContext from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/State/dMenuDisplayContext.js';
import displayDMenuReducer from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/State/dMenuDisplayReducer.js';

import { SET_SLECTEDCATEGORY } from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/types.js';

const DMenuDisplayState = props => {
  const initialState = {
    activeCategory: '',
    loading: false,
    activeIndex: false
  };

  const [state, dispatch] = useReducer(displayDMenuReducer, initialState);

  const { activeCategory, loading, activeIndex } = state;

  const setCategory = (category, selectedIndex) => {
    dispatch({
      type: SET_SLECTEDCATEGORY,
      payload: category,
      index: selectedIndex
    });
  };

  return (
    <displayDMenuContext.Provider
      value={{
        activeCategory,
        loading,
        activeIndex,
        setCategory
      }}
    >
      {props.children}
    </displayDMenuContext.Provider>
  );
};

export default DMenuDisplayState;
