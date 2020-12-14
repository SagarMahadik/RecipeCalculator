import React, { useReducer, useState, useEffect } from 'react';

import recipeManagementContext from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
import recipeManagementReducer from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementReducer.js';

import {
  SET_LOADING,
  SET_RAWMATERIALS,
  UPDATE_FIELD,
  UPDATE_SEARCHSTRING,
  UPDATE_SEARCHRESULTS,
  CLEAR_SEARCHRESULTS,
  UPDATE_RAWMATERIALS,
  REMOVE_RAWMATERIAL,
  UPDATE_RAWMATERIALNAME,
  UPDATE_RAWMATERIAL_PRICE,
  UPDATE_RAWMATERIAL_RATE,
  COMPLETE_FORM,
  SHOW_LOADER,
  COMPLETE_RAWMATERIAL,
  SET_BASICRECIPES,
  SET_SEARCHFILTER,
  UPDATE_BASICRECIPE,
  UPDATE_BASICRECIPEUNITS,
  UPDATE_BASICRECIPEQUANTITY,
  UPDATE_BASICRECIPERATE,
  REMOVE_BASICRECIPERM,
  REMOVE_BASICRECIPE,
  SET_BASICRECIPERMSEARCHFILTER,
  HANDLE_BASICRECIPESEARCHDISPLAY,
  ADD_BASICRECCIPESEARCHRM,
  SET_SAVEOPTION,
  SET_RECIPES,
  UPDATE_RECIPE,
  HANDLE_BASICRECIPEDISPLAY,
  HIDE_BASICRECIPERMONDELETE,
  CALCULATE_RECIPERMQTYANDCOST,
  CALCULATE_SINGLEBASICRECIPEQTYANDCOST,
  CALCULATE_TOTALBASICRECIPERMQTYANDCOST
} from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/types.js';

import { useHttpClient } from 'Hooks/httpsHooks';

import axios from 'axios';
import produce from 'immer';
import { BasicRecipeCostQuantityContainer } from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement/index';

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
      { filterDisplay: 'Basic Recipe', filterValue: 'basicRecipe' },
      { filterDisplay: 'Product', filterValue: 'product' }
    ],
    saveOptionDisplay: [...saveOptions],
    saveOption: '',
    isDataUploaded: false,
    showLoader: false,
    isRawmUploaded: false,
    showBasicRecipeSearch: false
  };
  const [state, dispatch] = useReducer(recipeManagementReducer, initialState);

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

  if (!('multidelete' in Object.prototype)) {
    Object.defineProperty(Object.prototype, 'multidelete', {
      value: function() {
        for (var i = 0; i < arguments.length; i++) {
          delete this[arguments[i]];
        }
      }
    });
  }

  const addDataToDB = async (
    recipeName,
    recipeRawMaterials,
    brandName,
    recipeUrl,
    recipeYield,
    finalUnits,
    totalRawMQuantityInRecipe,
    totalRawMaterialCostInRecipe
  ) => {
    let updatedRAWM = produce(state, draftState => {
      draftState.recipeRawMaterials.forEach(material => {
        material.rawmaterialdetails = material._id;
        material.quantityPerUnit = material.quantityInRecipe / state.finalUnits;
      });
      draftState.recipeRawMaterials.forEach(material =>
        material.multidelete(
          'brandName',
          'type',
          'name',
          'baseQuantity',
          'baseUnit',
          'recipeUnit',
          '__v',
          'costOfRawMaterial',
          'rate',
          '_id'
        )
      );
      return draftState;
    });

    let name = recipeName;
    let details = updatedRAWM.recipeRawMaterials;
    let baseQuantity = totalRawMQuantityInRecipe;
    let baseUnit = 'gm';
    let rate = totalRawMaterialCostInRecipe;

    let yieldBasicRecipe = recipeYield;

    let unitPerBaseQuantity = finalUnits;

    let costPerUnit = rate / finalUnits;

    let weightPerUnit = baseQuantity / finalUnits;

    const body = JSON.stringify({
      name,
      details,
      baseQuantity,
      baseUnit,
      rate,
      brandName,
      recipeUrl,
      yieldBasicRecipe,
      unitPerBaseQuantity,
      costPerUnit,
      weightPerUnit
    });
    console.log(body);
    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };

    const res = await axios.post('/api/v1/basicRecipe', body, config);
    setLoading();

    if (res.data.status === 'success') {
      dispatch({
        type: COMPLETE_FORM
      });
    }
  };

  const addRecipeToDB = async (
    recipeName,
    recipeRawMaterials,
    recipeBasicRecipes,
    brandName,
    recipeUrl,
    finalUnits
  ) => {
    let name = recipeName;
    let rawMaterialDetails = [...recipeRawMaterials];
    let basicRecipeDetails = [...recipeBasicRecipes];

    let baseQuantity =
      state.totalRawMQuantityInRecipe + state.totalBasicRecipeRAWMQuantity;
    let baseUnit = 'gm';
    let rate =
      Number(state.totalRawMaterialCostInRecipe) +
      Number(state.totalBasicRecipeRAWMCost);
    let unitPerBaseQuantity = state.finalUnits;

    const body = JSON.stringify({
      name,
      rawMaterialDetails,
      basicRecipeDetails,
      baseQuantity,
      baseUnit,
      rate,
      brandName,
      recipeUrl,
      unitPerBaseQuantity
    });

    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };

    const res = await axios.post('/api/v1/recipe', body, config);
    setLoading();

    if (res.data.status === 'success') {
      dispatch({
        type: COMPLETE_FORM
      });
    }
  };

  const updateRawMaterialsDB = async (id, rate, index) => {
    const body = JSON.stringify({
      rate
    });

    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };

    const res = await axios.patch(`/api/v1/rawMaterial/${id}`, body, config);

    setLoading();

    if (state.recipeRawMaterials.length - 1 === index) {
      dispatch({
        type: COMPLETE_RAWMATERIAL
      });
    }
  };

  const updateBasicRecipeDB = async (id, details, index) => {
    const body = JSON.stringify({
      details
    });

    const config = {
      headers: {
        'Content-Type': 'application/JSON'
      }
    };

    const res = await axios.patch(`/api/v1/basicRecipe/${id}`, body, config);
  };

  const initiateSubmit = async (
    recipeRawMaterials,
    finalRMDetails,
    finalBasicRecipeDetails
  ) => {
    const arrayofPromises = recipeRawMaterials.map((item, index) => {
      updateRawMaterialsDB(item._id, item.rate, index);
    });

    Promise.all(arrayofPromises).then(() => {
      // addDataToDB
      if (state.saveOption === 'basicRecipe') {
        addDataToDB(
          state.recipeName,
          state.recipeRawMaterials,
          state.brandName,
          state.recipeUrl,
          state.recipeYield,
          state.finalUnits,
          state.totalRawMQuantityInRecipe,
          state.totalRawMaterialCostInRecipe
        );
      }
      if (state.saveOption === 'product') {
        addRecipeToDB(
          state.recipeName,
          finalRMDetails,
          finalBasicRecipeDetails,
          state.brandName,
          state.recipeUrl,
          state.finalUnits
        );
      }
    });
  };

  const { sendRequest, error } = useHttpClient();

  const setLoading = () => dispatch({ type: SET_LOADING });
  const setShowLoader = () => dispatch({ type: SHOW_LOADER });

  useEffect(() => {
    getData('/api/v1/rawMaterial');
    getBasicRecipe('/api/v1/basicRecipe');
    getRecipe('/api/v1/recipe');
  }, []);
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

  const getData = async url => {
    try {
      let res = await sendRequest(url);

      dispatch({
        type: SET_RAWMATERIALS,
        payload: res
      });
    } catch (err) {}
  };

  const getBasicRecipe = async url => {
    try {
      let res = await sendRequest(url);

      dispatch({
        type: SET_BASICRECIPES,
        payload: res
      });
    } catch (err) {}
  };

  const getRecipe = async url => {
    try {
      let res = await sendRequest(url);

      dispatch({
        type: SET_RECIPES,
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

  const handleSearchFilter = e => {
    let filter = e.currentTarget.value;
    let currentArray = [];

    if (filter === 'rawMaterial') {
      currentArray = [...state.rawMaterials];
    }
    if (filter === 'basicRecipe') {
      currentArray = [...state.basicRecipe];
    }
    if (filter === 'product') {
      currentArray = [...state.recipe];
    }
    {
      dispatch({
        type: CLEAR_SEARCHRESULTS,
        payload: []
      });
    }

    dispatch({
      type: SET_SEARCHFILTER,
      payload: filter,
      temparray: currentArray
    });
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

  const handleSearchText = e => {
    let string = e.currentTarget.value;

    {
      dispatch({
        type: UPDATE_SEARCHSTRING,
        payload: string
      });
    }

    let filterOptions = state.searchArray
      .filter(
        material =>
          material.name.toLowerCase().indexOf(string.toLowerCase()) > -1
      )
      .slice(0, 4);

    {
      dispatch({
        type: UPDATE_SEARCHRESULTS,
        payload: filterOptions
      });
    }
  };

  const handleSearchItemClick = (item, index, basicRecipeId) => {
    if (state.searchFilter === 'rawMaterial') {
      dispatch({
        type: UPDATE_RAWMATERIALS,
        payload: item
      });
    }
    if (state.searchFilter === 'basicRecipe') {
      dispatch({
        type: UPDATE_BASICRECIPE,
        payload: item,
        rmdetails: item.details
      });
    }
    if (state.searchFilter === 'basicRecipeRawMaterial') {
      dispatch({
        type: ADD_BASICRECCIPESEARCHRM,
        index1: index,
        item1: item,
        id1: basicRecipeId
      });
    }

    if (state.searchFilter === 'product') {
      dispatch({
        type: UPDATE_RECIPE,
        rawMaterial: item.rawMaterialDetails,
        basicRecipes: item.basicRecipeDetails,
        productDetails: item
      });
    }
  };

  const handleRemoveRawMaterial = id => {
    dispatch({
      type: REMOVE_RAWMATERIAL,
      payload: id
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
      type: UPDATE_BASICRECIPEUNITS,
      index1: index,
      value: newUnits
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

  const handleRemoveBasicRecipe = id => {
    dispatch({
      type: REMOVE_BASICRECIPE,
      id1: id
    });
  };

  const handleRawMaterialNameChange = index => e => {
    let newRawMaterialName = e.target.value;
    let rawMaterialIndex = index;

    dispatch({
      type: UPDATE_RAWMATERIALNAME,
      name1: newRawMaterialName,
      index1: rawMaterialIndex
    });
  };

  const handleQuantityChange = (id, index) => e => {
    let quantity = e.target.value;

    dispatch({
      type: UPDATE_RAWMATERIAL_PRICE,
      id1: id,
      index1: index,
      value: quantity
    });
  };

  const handleRateChange = id => e => {
    let rate = e.target.value;

    dispatch({
      type: UPDATE_RAWMATERIAL_RATE,
      id1: id,
      value: rate
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
    setShowLoader();
    if (state.saveOption === 'basicRecipe') {
      let updatedRAWM = produce(state, draftState => {
        if (!('multidelete' in Object.prototype)) {
          Object.defineProperty(Object.prototype, 'multidelete', {
            value: function() {
              for (var i = 0; i < arguments.length; i++) {
                delete this[arguments[i]];
              }
            }
          });
        }

        draftState.recipeRawMaterials.forEach(
          material => (material.rawmaterialdetails = material._id)
        );
        draftState.recipeRawMaterials.forEach(material =>
          material.multidelete(
            'brandName',
            'type',
            'name',
            'baseQuantity',
            'baseUnit',
            'recipeUnit',
            '__v'
          )
        );
        return draftState;
      });

      initiateSubmit(updatedRAWM.recipeRawMaterials);
    }

    if (state.saveOption === 'product') {
      let updatedState = produce(state, draft => {
        const items2ById = {};
        for (const item of draft.recipeBasicRecipes) {
          items2ById[item._id] = item;
        }
        const items2DetailsById = {};

        for (const detail of draft.recipeBasicRecipes.flatMap(
          ({ details }) => details
        )) {
          items2DetailsById[detail._id] = detail;
        }
        for (const item of draft.basicRecipe) {
          if (!items2ById[item._id]) continue;
          for (const detail of item.details) {
            if (items2DetailsById[detail._id]) {
              detail.rate = items2DetailsById[detail._id].rate;
            }
          }
        }

        return draft;
      });

      const operation = (list1, list2, isUnion = false) =>
        list1.filter(
          (set => a => isUnion === set.has(a._id))(
            new Set(list2.map(b => b._id))
          )
        );

      const inBoth = (list1, list2) => operation(list1, list2, true),
        inFirstOnly = operation,
        inSecondOnly = (list1, list2) => inFirstOnly(list2, list1);

      let finalRecipeBasicRecipes = [
        ...inBoth(updatedState.basicRecipe, state.recipeBasicRecipes)
      ];

      let basicRecipeRM = produce(state, draft => {
        let newBasiccRRecipeRMArray = [];
        draft.recipeBasicRecipes.forEach(item =>
          newBasiccRRecipeRMArray.push(item.details)
        );
        return newBasiccRRecipeRMArray;
      });

      let finalBasicRecipeRM = basicRecipeRM.flat();

      let finalRecipeRawMaterial = [
        ...state.recipeRawMaterials,
        ...finalBasicRecipeRM
      ];

      const uniqueRawMaterial = finalRecipeRawMaterial.reduce(
        (acc, current) => {
          const x = acc.find(item => item._id === current._id);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        },
        []
      );

      let newState = produce(state, draftState => {
        draftState.recipeRawMaterials.forEach(material => {
          material.details = material._id;
          material.multidelete(
            'brandName',
            'type',
            'name',
            'baseQuantity',
            'baseUnit',
            'recipeUnit',
            '__v'
          );
        });
        draftState.recipeBasicRecipes.forEach(basicRecipe => {
          basicRecipe.details = basicRecipe._id;
          basicRecipe.unitInRecipe = basicRecipe.unitPerBaseQuantity;

          basicRecipe.multidelete(
            'brandName',
            'type',
            'name',
            'baseQuantity',
            'baseUnit',
            'recipeUnit',
            '__v',
            'unitPerBaseQuantity',
            'costPerUnit',
            'weightPerUnit',
            'showSearchBox',
            'showAddIcon',
            'totalcostofRMInBR',
            'totalRMQuantityInBR'
          );
        });
      });

      let finalRMDetails = newState.recipeRawMaterials;

      let finalBasicRecipeDetails = newState.recipeBasicRecipes;

      initiateSubmit(
        uniqueRawMaterial,
        finalRMDetails,
        finalBasicRecipeDetails
      );
    }
  };

  return (
    <recipeManagementContext.Provider
      value={{
        loading: state.loading,
        rawMaterials: state.rawMaterials,
        recipe: state.recipe,
        recipeName: state.recipeName,
        searchFilter: state.searchFilter,
        searchString: state.searchString,
        recipeRawMaterials: state.recipeRawMaterials,
        searchResults: state.searchResults,
        searchArray: state.searchArray,
        searchFilterDisplay: state.searchFilterDisplay,
        saveOptionDisplay: state.saveOptionDisplay,
        saveOption: state.saveOption,
        showLoader: state.showLoader,
        isDataUploaded: state.isDataUploaded,
        basicRecipe: state.basicRecipe,
        recipeProducts: state.recipeProducts,
        recipeBasicRecipes: state.recipeBasicRecipes,
        recipeBasicRecipeRMDetails: state.recipeBasicRecipeRMDetails,
        showBasicRecipeSearch: state.showBasicRecipeSearch,
        brandName: state.brandName,
        recipeUrl: state.recipeUrl,
        recipeYield: state.recipeYield,
        finalUnits: state.finalUnits,
        totalRawMQuantityInRecipe: state.totalRawMQuantityInRecipe,
        totalRawMaterialCostInRecipe: state.totalRawMaterialCostInRecipe,
        totalBasicRecipeRAWMQuantity: state.totalBasicRecipeRAWMQuantity,
        totalBasicRecipeRAWMCost: state.totalBasicRecipeRAWMCost,
        getData,
        handleChangeFor,
        handleSearchText,
        handleSearchItemClick,
        handleRemoveRawMaterial,
        handleQuantityChange,
        handleRateChange,
        onSubmit,
        handleSearchFilter,
        handleRawMaterialNameChange,
        handleBasicRecipeUnits,
        handleBasicRecipeRMQuantityChange,
        handleBasicRecipeRMRateChange,
        handleBasicRecipeRMDelete,
        handleRemoveBasicRecipe,
        handleBasicRecipeMSearchFilter,
        handleSaveOption,
        handleBasicRecipeDisplay,
        hideBasicRecipeRMOnDelete
      }}
    >
      {props.children}
    </recipeManagementContext.Provider>
  );
};

export default RecipeManagementState;
