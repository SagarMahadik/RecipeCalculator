import {
  SET_LOADING,
  SHOW_LOADER,
  SET_SAVEOPTION,
  UPDATE_FIELD,
  SET_SEARCHFILTER,
  UPDATE_SEARCHSTRING,
  UPDATE_SEARCHRESULTS,
  CLEAR_SEARCHRESULTS,
  UPDATE_RAWMATERIALS,
  REMOVE_RAWMATERIAL,
  UPDATE_RAWMATERIALNAME,
  UPDATE_RAWMATERIAL_PRICE,
  UPDATE_RAWMATERIAL_RATE,
  UPDATE_RAWMATERIAL_COST,
  COMPLETE_RAWMATERIAL,
  UPDATE_BASICRECIPE,
  UPDATE_BASICRECIPEUNITS,
  UPDATE_BASICRECIPEQUANTITY,
  UPDATE_BASICRECIPE_BASEQUANTITY,
  UPDATE_BASICRECIPERAWMCOST,
  UPDATE_BASICRECIPERATE,
  REMOVE_BASICRECIPERM,
  REMOVE_BASICRECIPE,
  SET_BASICRECIPERMSEARCHFILTER,
  HANDLE_BASICRECIPESEARCHDISPLAY,
  ADD_BASICRECCIPESEARCHRM,
  UPDATE_RECIPE,
  HANDLE_BASICRECIPEDISPLAY,
  HIDE_BASICRECIPERMONDELETE,
  CALCULATE_RECIPERMQTYANDCOST,
  CALCULATE_SINGLEBASICRECIPEQTYANDCOST,
  CALCULATE_TOTALBASICRECIPERMQTYANDCOST,
  INITIATE_BASICRECIPESSUBMISSION,
  BR_PREPARE_RAWMATERIALRATEUPDATE,
  BR_UPDATE_RAWMATERIALS,
  MAKE_BR_REQUEST,
  RECIPE_PREPARE_RMBR_FORUPDATE,
  RECIPE_UPDATE_RAWMATERIALRATE,
  MAKE_RECIPE_REQUEST,
  COMPLETE_FORM,
  ANIMATE_BEFORE_EXIT,
  REMOVE_ANIMATEBEFORE_EXIT,
  CREATE_RATEUPDATEDRM,
  CREATE_DEFAULTRMDATA,
  UPLOAD_DEFAULTRMDATA_COMPLETE,
  TRANSFORM_RAWMATERIALS,
  SET_NUMBER_OF_DEFULAT_RM_USED
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

    case SET_SAVEOPTION: {
      return {
        ...state,
        saveOption: action.selectedOption
      };
    }

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

    case UPDATE_SEARCHSTRING: {
      return {
        ...state,
        searchString: action.payload
      };
    }
    case UPDATE_SEARCHRESULTS: {
      return {
        ...state,
        hideSearchResults: false,
        searchResults: action.payload
      };
    }
    case CLEAR_SEARCHRESULTS: {
      return {
        ...state,
        hideSearchResults: true,
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

    case UPDATE_BASICRECIPE: {
      return {
        ...state,
        recipeBasicRecipes: [...state.recipeBasicRecipes, action.payload],
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
        if (action.id1 === 'bennyRawMaterial') {
          let selectedRawMaterial =
            draftState.recipeRawMaterials[action.rawMaterialIndex];
          selectedRawMaterial.rate = action.value;
          selectedRawMaterial.costOfRawMaterial =
            (selectedRawMaterial.quantityInRecipe * action.value) /
            selectedRawMaterial.baseQuantity;
        } else {
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
                  (detail.quantityInRecipe * action.value) /
                  detail.baseQuantity;
              }
            })
          );
        }
      });
    }

    case UPDATE_RAWMATERIAL_COST: {
      return {
        ...state,
        recipeRawMaterials: action.payload
      };
    }

    case REMOVE_RAWMATERIAL: {
      return produce(state, draftState => {
        let newState = draftState.recipeRawMaterials;
        newState.splice(action.payload, 1);
        draftState.recipeRawMaterials = newState;
      });
    }

    case UPDATE_BASICRECIPE_BASEQUANTITY:
      return produce(state, draftState => {
        const selectedBasicRecipe =
          draftState.recipeBasicRecipes[action.index1];
        selectedBasicRecipe.baseQuantity = Number(action.value);
        selectedBasicRecipe.unitPerBaseQuantity =
          Number(action.value) / Number(selectedBasicRecipe.quantityPerUnit);

        selectedBasicRecipe.details.forEach(detail => {
          detail.quantityInRecipe =
            detail.quantityPerUnit * selectedBasicRecipe.unitPerBaseQuantity;
        });
      });

    case UPDATE_BASICRECIPEUNITS: {
      return produce(state, draftState => {
        const selectedBasicRecipe =
          draftState.recipeBasicRecipes[action.index1];
        selectedBasicRecipe.unitPerBaseQuantity = action.value;

        selectedBasicRecipe.baseQuantity =
          action.value * selectedBasicRecipe.quantityPerUnit;
        selectedBasicRecipe.details.forEach(detail => {
          detail.quantityInRecipe =
            detail.quantityPerUnit * selectedBasicRecipe.unitPerBaseQuantity;
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

    case SET_BASICRECIPERMSEARCHFILTER: {
      return {
        ...state,
        searchFilter: action.payload,
        searchArray: action.temparray,
        showBasicRecipeSearch: true
      };
    }

    case REMOVE_BASICRECIPE: {
      return produce(state, draftState => {
        let newState = draftState.recipeBasicRecipes;
        newState.splice(action.payload, 1);
        draftState.recipeBasicRecipes = newState;
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

    case INITIATE_BASICRECIPESSUBMISSION:
      return {
        ...state,
        initiateBasicRecipesSubmission: true
      };

    case BR_PREPARE_RAWMATERIALRATEUPDATE:
      return {
        ...state,
        brRawMaterialUpdate: true
      };

    case BR_UPDATE_RAWMATERIALS:
      return {
        ...state,
        brRawMaterialRateUpdateArray: action.payload,
        initiateBRrawMRateUpdate: true
      };

    case MAKE_BR_REQUEST:
      return {
        ...state,
        makeBRrequest: true
      };

    case RECIPE_PREPARE_RMBR_FORUPDATE:
      return {
        ...state,
        recipePrepareRMBRforUpdate: true
      };

    case MAKE_RECIPE_REQUEST:
      return {
        ...state,
        makeRecipeRequest: true
      };

    case UPDATE_RECIPE: {
      console.log(action.rawMaterialDetails);
      return produce(state, draftState => {
        draftState.recipeRawMaterials = action.rawMaterial;
        draftState.recipeBasicRecipes = action.basicRecipes;
        draftState.recipeProducts = action.productDetails;
        draftState.searchString = '';
      });
    }

    case RECIPE_UPDATE_RAWMATERIALRATE:
      return produce(state, draftState => {
        draftState.recipeRequestDetails.recipeUniqueRawMaterials =
          action.uniqueRM;
        draftState.recipeRequestDetails.recipeFinalRMDetails =
          action.finalRecipeRM;
        draftState.recipeRequestDetails.recipeFinalBRDetails =
          action.finalRecipeBR;
        draftState.initiateRecipeRawMaterialRateUpdate = true;
      });

    case ANIMATE_BEFORE_EXIT:
      return produce(state, draftState => {
        draftState.recipeRawMaterials[action.payload].animateBeforeExit = true;
      });

    case REMOVE_ANIMATEBEFORE_EXIT:
      return produce(state, draftState => {
        draftState.recipeRawMaterials.forEach(
          material => (material.animateBeforeExit = false)
        );
      });

    case CREATE_RATEUPDATEDRM:
      return {
        ...state,
        rateUpdatedRM: [...state.rateUpdatedRM, action.payload]
      };

    case CREATE_DEFAULTRMDATA:
      return {
        ...state,
        uploadedDefaultRM: [...state.uploadedDefaultRM, action.payload]
      };

    case UPLOAD_DEFAULTRMDATA_COMPLETE:
      return {
        ...state,
        defaultRMDataUploadComplete: true
      };

    case SET_NUMBER_OF_DEFULAT_RM_USED:
      return {
        ...state,
        noOfDefaultRMUsed: action.payload
      };

    case TRANSFORM_RAWMATERIALS:
      return produce(state, draftState => {
        let defaultRawM = draftState.recipeRawMaterials.filter(
          material => material._id === 'bennyRawMaterial'
        );
        let rawMaterialWODefaultRM = draftState.recipeRawMaterials.filter(
          material => material._id != 'bennyRawMaterial'
        );

        let tempRawM = draftState.uploadedDefaultRM.forEach(rm => {
          let selectedRM = defaultRawM.filter(
            rawMaterial => rawMaterial.name == rm.name
          );
          rm.quantityInRecipe = selectedRM.quantityInRecipe;
        });

        draftState.newRawmaterials = [...tempRawM, ...rawMaterialWODefaultRM];

        draftState.transformedRawMaterials = true;
        draftState.brRawMaterialRateUpdateArray = [
          ...draftState.newRawmaterials
        ];
        draftState.recipeRawMaterials = [...draftState.newRawmaterials];
        draftState.initiateBRrawMRateUpdate = true;
      });
  }
};
