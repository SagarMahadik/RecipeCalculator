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
  UPDATE_RAWMATERIAL_COST,
  COMPLETE_FORM,
  SHOW_LOADER,
  COMPLETE_RAWMATERIAL,
  SET_BASICRECIPES,
  SET_SEARCHFILTER,
  UPDATE_BASICRECIPE,
  UPDATE_BASICRECIPEUNITS,
  UPDATE_BASICRECIPEQUANTITY,
  UPDATE_BASICRECIPERAWMCOST,
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

import { produce } from 'immer';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SHOW_LOADER:
      return {
        ...state,
        showLoader: true
      };
    case SET_RAWMATERIALS:
      return produce(state, draftState => {
        draftState.rawMaterials = action.payload;
        draftState.rawMaterials.forEach(
          material => (material.quantityInRecipe = '')
        );
      });
    case SET_BASICRECIPES:
      return produce(state, draftState => {
        draftState.basicRecipe = action.payload;

        draftState.basicRecipe.forEach(item => {
          item.details.forEach(detail => {
            const {
              _id,
              brandName,
              name,
              type,
              baseQuantity,
              baseUnit,
              rate,
              recipeUnit
            } = detail['rawmaterialdetails'];
            detail._id = _id;
            detail.brandName = brandName;
            detail.name = name;
            detail.type = type;
            detail.baseQuantity = baseQuantity;
            detail.baseUnit = baseUnit;
            detail.rate = rate;
            detail.recipeUnit = recipeUnit;
          });
        });

        draftState.basicRecipe.forEach(item => {
          item.details.forEach(detail => {
            detail.costOfRawMaterial = 0;
            detail.quantityPerUnit =
              detail.quantityInRecipe / item.unitPerBaseQuantity;
          });
        });
        draftState.basicRecipe.forEach(item => {
          item.showSearchBox = false;
          item.showItem = false;
          item.showAddIcon = false;
        });
      });
    case SET_RECIPES:
      return produce(state, draftState => {
        draftState.recipe = action.payload;
        draftState.recipe.forEach(item =>
          item.basicRecipeDetails.forEach(detail => {
            detail.showSearchBox = false;
            detail.showItem = true;
          })
        );
        draftState.recipe.forEach(item =>
          item.basicRecipeDetails.forEach(item => {
            item.details.forEach(detail => (detail.hiddeRM = false));
          })
        );
      });

    case UPDATE_FIELD:
      const { input, value } = action.payload;
      return {
        ...state,
        [input]: value
      };

    case SET_SEARCHFILTER: {
      return {
        ...state,
        searchFilter: action.payload,
        searchArray: action.temparray
      };
    }

    case SET_BASICRECIPERMSEARCHFILTER: {
      return {
        ...state,
        searchFilter: action.payload,
        searchArray: action.temparray,
        showBasicRecipeSearch: true
      };
    }
    case UPDATE_SEARCHSTRING: {
      return {
        ...state,
        searchString: action.payload
      };
    }
    case UPDATE_SEARCHRESULTS: {
      return {
        ...state,
        searchResults: action.payload
      };
    }
    case CLEAR_SEARCHRESULTS: {
      return {
        ...state,
        searchResults: action.payload
      };
    }
    case UPDATE_RAWMATERIALS: {
      return {
        ...state,
        recipeRawMaterials: [...state.recipeRawMaterials, action.payload],
        searchString: ''
      };
    }
    case UPDATE_RAWMATERIALNAME: {
      return produce(state, draftState => {
        let selectedRawMaterial = draftState.recipeRawMaterials[action.index1];
        selectedRawMaterial.name = action.name1;
      });
    }
    case UPDATE_RAWMATERIAL_PRICE: {
      return produce(state, draftState => {
        let selectedRawMaterial = draftState.recipeRawMaterials[action.index1];

        selectedRawMaterial.quantityInRecipe = action.value;
        selectedRawMaterial.costOfRawMaterial =
          (selectedRawMaterial.quantityInRecipe * selectedRawMaterial.rate) /
          selectedRawMaterial.baseQuantity;
      });
    }
    case UPDATE_RAWMATERIAL_RATE: {
      return produce(state, draftState => {
        draftState.recipeRawMaterials
          .filter(rec => rec._id === action.id1)
          .forEach(item => {
            item.rate = action.value;
            item.costOfRawMaterial =
              (item.quantityInRecipe * item.rate) / item.baseQuantity;
          });
        draftState.recipeBasicRecipes.map(item =>
          item.details.forEach(detail => {
            if (detail._id === action.id1) {
              detail.rate = action.value;
              detail.costOfRawMaterial =
                (detail.quantityInRecipe * action.value) / detail.baseQuantity;
            }
          })
        );
      });
    }
    case UPDATE_RAWMATERIAL_COST: {
      return {
        ...state,
        recipeRawMaterials: action.payload
      };
    }
    case REMOVE_RAWMATERIAL: {
      return {
        ...state,
        recipeRawMaterials: state.recipeRawMaterials.filter(
          item => item._id !== action.payload
        )
      };
    }
    case UPDATE_BASICRECIPE: {
      return {
        ...state,
        recipeBasicRecipes: [...state.recipeBasicRecipes, action.payload],
        searchString: ''
      };
    }

    case UPDATE_BASICRECIPEUNITS: {
      return produce(state, draftState => {
        draftState.recipeBasicRecipes[action.index1].unitPerBaseQuantity =
          action.value;

        draftState.recipeBasicRecipes[action.index1].details.forEach(detail => {
          detail.quantityInRecipe =
            detail.quantityPerUnit *
            draftState.recipeBasicRecipes[action.index1].unitPerBaseQuantity;
        });
      });
    }
    case UPDATE_BASICRECIPEQUANTITY: {
      return produce(state, draftState => {
        draftState.recipeBasicRecipes[action.index1].details.forEach(detail => {
          if (detail._id === action.id1) {
            detail.quantityInRecipe = action.value;
            detail.costOfRawMaterial =
              (detail.rate * action.value) / detail.baseQuantity;
          }
        });
      });
    }
    case UPDATE_BASICRECIPERATE: {
      return produce(state, draftState => {
        draftState.recipeBasicRecipes.map(item =>
          item.details.forEach(detail => {
            if (detail._id === action.id1) {
              detail.rate = action.value;
              detail.costOfRawMaterial =
                (detail.quantityInRecipe * action.value) / detail.baseQuantity;
            }
          })
        );
      });
    }

    case HANDLE_BASICRECIPEDISPLAY: {
      return produce(state, draftState => {
        draftState.recipeBasicRecipes.forEach(item => {
          if (item._id === action.id1) {
            item.showItem = !item.showItem;
          }
        });
      });
    }

    case ADD_BASICRECCIPESEARCHRM: {
      return produce(state, draftState => {
        draftState.recipeBasicRecipes[action.index1].details.push(action.item1);
        draftState.searchString = '';
        draftState.recipeBasicRecipes.forEach(item => {
          if (item._id === action.id1) {
            item.showSearchBox = !item.showSearchBox;
          }
          if (
            draftState.recipeBasicRecipes.every(
              item => item.showSearchBox === false
            )
          ) {
            draftState.showBasicRecipeSearch = false;
          }
        });

        return draftState;
      });
    }

    case REMOVE_BASICRECIPE: {
      return {
        ...state,
        recipeBasicRecipes: state.recipeBasicRecipes.filter(
          item => item._id !== action.id1
        )
      };
    }

    case HIDE_BASICRECIPERMONDELETE:
      return produce(state, draftState => {
        draftState.recipeBasicRecipes[action.index1].details[
          action.basicRMIndex1
        ].hiddeRM = true;
      });

    case REMOVE_BASICRECIPERM: {
      return produce(state, draftState => {
        draftState.recipeBasicRecipes[action.index1].details.splice(
          action.basicRMIndex1,
          1
        );
      });
    }
    case UPDATE_BASICRECIPERAWMCOST: {
      return {
        ...state,
        recipeBasicRecipes: action.payload
      };
    }

    case HANDLE_BASICRECIPESEARCHDISPLAY: {
      return produce(state, draftState => {
        draftState.recipeBasicRecipes.forEach(item => {
          if (item._id === action.id1) {
            item.showSearchBox = !item.showSearchBox;
          }
        });
        if (
          draftState.recipeBasicRecipes.every(
            item => item.showSearchBox === false
          )
        ) {
          draftState.showBasicRecipeSearch = false;
        }
      });
    }

    case UPDATE_RECIPE: {
      console.log(action.rawMaterialDetails);
      return produce(state, draftState => {
        draftState.recipeRawMaterials = action.rawMaterial;
        draftState.recipeBasicRecipes = action.basicRecipes;
        draftState.recipeProducts = action.productDetails;
        draftState.searchString = '';
      });
    }

    case CALCULATE_RECIPERMQTYANDCOST:
      return produce(state, draftState => {
        draftState.totalRawMQuantityInRecipe = Math.round(
          draftState.recipeRawMaterials.reduce(
            (total, obj) => Number(obj.quantityInRecipe) + total,
            0
          )
        );
        draftState.totalRawMaterialCostInRecipe = Math.round(
          draftState.recipeRawMaterials.reduce(
            (total, obj) => Number(obj.costOfRawMaterial) + total,
            0
          )
        );
      });

    case CALCULATE_SINGLEBASICRECIPEQTYANDCOST:
      return produce(state, draftState => {
        draftState.recipeBasicRecipes.forEach(item => {
          item.totalCostOfRMInBR = item.details
            .reduce(
              (total, obj) =>
                (obj.rate * obj.quantityPerUnit * item.unitPerBaseQuantity) /
                  obj.baseQuantity +
                total,
              0
            )
            .toFixed(0);
          item.totalRMQuantityInBR = item.details
            .reduce(
              (total, obj) =>
                obj.quantityPerUnit * item.unitPerBaseQuantity + total,
              0
            )
            .toFixed(0);
        });
      });

    case CALCULATE_TOTALBASICRECIPERMQTYANDCOST:
      return produce(state, draftState => {
        draftState.totalBasicRecipeRAWMQuantity = Math.round(
          draftState.recipeBasicRecipes.reduce(
            (total, obj) => Number(obj.totalRMQuantityInBR) + total,
            0
          )
        );

        draftState.totalBasicRecipeRAWMCost = Number(
          draftState.recipeBasicRecipes.reduce(
            (total, obj) => Number(obj.totalCostOfRMInBR) + total,
            0
          )
        ).toFixed(0);
      });

    case SET_SAVEOPTION: {
      return {
        ...state,
        saveOption: action.selectedOption
      };
    }
    case COMPLETE_FORM:
      return {
        ...state,
        loading: false,
        isDataUploaded: true
      };
    case COMPLETE_RAWMATERIAL:
      return {
        ...state,
        loading: false,
        isRawmUploaded: true
      };
  }
};
