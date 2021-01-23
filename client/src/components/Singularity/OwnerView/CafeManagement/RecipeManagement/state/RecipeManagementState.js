import React, { useReducer, useEffect, useContext } from 'react';

import {
  recipeManagementContext,
  recipeManagementDispatchContext
} from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
import recipeManagementReducer from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementReducer.js';

import {
  SET_LOADING,
  UPDATE_FIELD,
  CLEAR_SEARCHRESULTS,
  SHOW_LOADER,
  UPDATE_BASICRECIPEQUANTITY,
  UPDATE_BASICRECIPERATE,
  REMOVE_BASICRECIPERM,
  REMOVE_BASICRECIPE,
  SET_BASICRECIPERMSEARCHFILTER,
  HANDLE_BASICRECIPESEARCHDISPLAY,
  SET_SAVEOPTION,
  HANDLE_BASICRECIPEDISPLAY,
  HIDE_BASICRECIPERMONDELETE,
  CALCULATE_RECIPERMQTYANDCOST,
  CALCULATE_SINGLEBASICRECIPEQTYANDCOST,
  CALCULATE_TOTALBASICRECIPERMQTYANDCOST
} from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/types.js';

const RecipeManagementState = props => {
  const saveOptions = [
    { option: 'Basic Recipe', optionValue: 'basicRecipe' },
    { option: 'Product', optionValue: 'product' }
  ];

  const initialState = {
    loading: false,
    rawMaterials: [],
    basicRecipe: [],
    recipe: [],
    recipeName: '',
    searchFilter: '',
    searchString: '',
    brandName: 'Piatto',
    recipeUrl: '',
    recipeRawMaterials: [],
    totalRawMQuantityInRecipe: 0,
    totalRawMaterialCostInRecipe: 0,
    totalBasicRecipeRAWMQuantity: 0,
    totalBasicRecipeRAWMCost: 0,
    recipeBasicRecipes: [],
    recipeProducts: [],
    recipeBasicRecipeRMDetails: [],
    searchResults: [],
    searchArray: [],
    recipeYield: '',
    finalUnits: '',
    searchFilterDisplay: [
      { filterDisplay: 'Raw Material', filterValue: 'rawMaterial' },
      { filterDisplay: 'Basic Recipe', filterValue: 'basicRecipe' }
    ],
    saveOptionDisplay: [...saveOptions],
    saveOption: '',
    isDataUploaded: false,
    showLoader: false,
    isRawmUploaded: false,
    showBasicRecipeSearch: false,
    initiateBasicRecipesSubmission: false,
    hideSearchResults: false,
    brRawMaterialUpdate: false,
    brRawMaterialRateUpdateArray: [],
    initiateBRrawMRateUpdate: false,
    makeBRrequest: false,
    recipePrepareRMBRforUpdate: false,
    recipeRequestDetails: {
      recipeUniqueRawMaterials: [],
      recipeFinalRMDetails: [],
      recipeFinalBRDetails: []
    },
    initiateRecipeRawMaterialRateUpdate: false,
    makeRecipeRequest: false,
    rateUpdatedRM: [],
    uploadedDefaultRM: [],
    defaultRMDataUploadComplete: false,
    transformedRawMaterials: false,
    noOfDefaultRMUsed: 0
  };
  const [state, dispatch] = useReducer(recipeManagementReducer, initialState);

  const {
    loading,
    rawMaterials,
    basicRecipe,
    recipe,
    recipeName,
    searchFilter,
    searchString,
    brandName,
    recipeUrl,
    recipeRawMaterials,
    totalRawMQuantityInRecipe,
    totalRawMaterialCostInRecipe,
    totalBasicRecipeRAWMQuantity,
    totalBasicRecipeRAWMCost,
    recipeBasicRecipes,
    recipeProducts,
    recipeBasicRecipeRMDetails,
    searchResults,
    searchArray,
    recipeYield,
    finalUnits,
    searchFilterDisplay,
    saveOptionDisplay,
    saveOption,
    isDataUploaded,
    showLoader,
    isRawmUploaded,
    showBasicRecipeSearch,
    initiateBasicRecipesSubmission,
    hideSearchResults,
    brRawMaterialUpdate,
    brRawMaterialRateUpdateArray,
    rateUpdatedRM,
    uploadedDefaultRM
  } = state;

  useEffect(() => {
    dispatch({
      type: CALCULATE_RECIPERMQTYANDCOST
    });
  }, [state.recipeRawMaterials]);

  useEffect(() => {
    dispatch({
      type: CALCULATE_SINGLEBASICRECIPEQTYANDCOST
    });
    dispatch({
      type: CALCULATE_TOTALBASICRECIPERMQTYANDCOST
    });
  }, [state.recipeBasicRecipes]);

  useEffect(() => {
    if (state.searchString === '') {
      {
        dispatch({
          type: CLEAR_SEARCHRESULTS,
          payload: []
        });
      }
    }
  }, [state.searchString, state.searchFilter]);

  const handleChangeFor = input => e => {
    {
      dispatch({
        type: UPDATE_FIELD,
        payload: { input, value: e.target.value }
      });
    }
  };

  const handleBasicRecipeMSearchFilter = id => {
    let filter = 'basicRecipeRawMaterial';
    let currentArray = [];
    currentArray = [...state.rawMaterials];
    dispatch({
      type: SET_BASICRECIPERMSEARCHFILTER,
      payload: filter,
      temparray: currentArray
    });
    dispatch({
      type: HANDLE_BASICRECIPESEARCHDISPLAY,
      id1: id
    });
  };

  const handleBasicRecipeDisplay = id => {
    dispatch({
      type: HANDLE_BASICRECIPEDISPLAY,
      id1: id
    });
  };

  const handleBasicRecipeUnits = index => e => {
    let newUnits = e.target.value;
    dispatch({
      type: 'UPDATE_BASICRECIPEUNITS',
      index1: index,
      value: newUnits
    });
  };

  const handleBasicRecipeBaseQty = index => e => {
    let newBaseQuantity = e.target.value;
    dispatch({
      type: 'UPDATE_BASICRECIPE_BASEQUANTITY',
      index1: index,
      value: newBaseQuantity
    });
  };

  const handleBasicRecipeRMQuantityChange = (id, name, index) => e => {
    let quantity = e.target.value;
    dispatch({
      type: UPDATE_BASICRECIPEQUANTITY,
      id1: id,
      index1: index,
      value: quantity
    });
  };

  const handleBasicRecipeRMRateChange = (id, name, index) => e => {
    let rate = e.target.value;
    dispatch({
      type: UPDATE_BASICRECIPERATE,
      id1: id,
      index1: index,
      value: rate
    });
  };

  const hideBasicRecipeRMOnDelete = (index, basicRMIndex) => {
    dispatch({
      type: HIDE_BASICRECIPERMONDELETE,
      index1: index,
      basicRMIndex1: basicRMIndex
    });
  };

  const handleBasicRecipeRMDelete = (
    index,
    basicRMIndex,
    id,
    basicRecipeID
  ) => {
    if (state.recipeBasicRecipes[index].details.length === 1) {
      dispatch({
        type: REMOVE_BASICRECIPE,
        id1: basicRecipeID
      });
    } else {
      dispatch({
        type: REMOVE_BASICRECIPERM,
        id1: id,
        index1: index,
        basicRMIndex1: basicRMIndex
      });
    }
  };

  const handleRemoveBasicRecipe = index => {
    dispatch({
      type: REMOVE_BASICRECIPE,
      payload: index
    });
  };

  const handleSaveOption = e => {
    let option = e.currentTarget.value;

    dispatch({
      type: SET_SAVEOPTION,
      selectedOption: option
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (state.saveOption === 'basicRecipe') {
      dispatch({
        type: 'BR_PREPARE_RAWMATERIALRATEUPDATE'
      });
    }

    if (state.saveOption === 'product') {
      dispatch({
        type: 'RECIPE_PREPARE_RMBR_FORUPDATE'
      });
    }
  };

  return (
    <recipeManagementContext.Provider
      value={{
        state,
        loading,
        rawMaterials,
        basicRecipe,
        recipe,
        recipeName,
        searchFilter,
        searchString,
        brandName,
        recipeUrl,
        recipeRawMaterials,
        totalRawMQuantityInRecipe,
        totalRawMaterialCostInRecipe,
        totalBasicRecipeRAWMQuantity,
        totalBasicRecipeRAWMCost,
        recipeBasicRecipes,
        recipeProducts,
        recipeBasicRecipeRMDetails,
        searchResults,
        searchArray,
        recipeYield,
        finalUnits,
        searchFilterDisplay,
        saveOptionDisplay,
        saveOption,
        isDataUploaded,
        showLoader,
        isRawmUploaded,
        showBasicRecipeSearch,
        initiateBasicRecipesSubmission,
        hideSearchResults,
        brRawMaterialUpdate,
        brRawMaterialRateUpdateArray,
        rateUpdatedRM,
        uploadedDefaultRM,
        handleChangeFor,
        onSubmit,
        handleBasicRecipeUnits,
        handleBasicRecipeRMQuantityChange,
        handleBasicRecipeRMRateChange,
        handleBasicRecipeRMDelete,
        handleRemoveBasicRecipe,
        handleBasicRecipeMSearchFilter,
        handleSaveOption,
        handleBasicRecipeDisplay,
        hideBasicRecipeRMOnDelete,
        handleBasicRecipeBaseQty
      }}
    >
      <recipeManagementDispatchContext.Provider value={dispatch}>
        {props.children}
      </recipeManagementDispatchContext.Provider>
    </recipeManagementContext.Provider>
  );
};

function useRecipeState() {
  const context = useContext(recipeManagementContext);

  if (context === undefined) {
    throw new Error('useRecipeState must be used within a CountProvider');
  }
  return context;
}

function useRecipeDispatch() {
  const context = useContext(recipeManagementDispatchContext);
  if (context === undefined) {
    throw new Error('useRecipeDispatch must be used within a CountProvider');
  }
  return context;
}

export { RecipeManagementState, useRecipeState, useRecipeDispatch };
