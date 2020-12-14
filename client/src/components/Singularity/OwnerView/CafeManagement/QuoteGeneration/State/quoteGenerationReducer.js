import {
  UPDATE_FIELD,
  SET_RECIPE,
  CLEAR_SEARCHRESULTS,
  UPDATE_SEARCHSTRING,
  UPDATE_SEARCHRESULTS,
  UPDATE_PRODUCTINQUOTE,
  CALCULATE_RECIPERMQTYCOST,
  CALCULATE_RECIPEEACHBRRMQTYCOST,
  CALCULATE_RECIPETOTALBRRMQTYCOST,
  CALCULATE_RECIPEFINALBRRMQTYCOST,
  CALCULATE_QUOTEFINALQTYCOST,
  UPDATE_PRODUCTUNIT,
  SHOWHIDE_PRODUCT,
  SHOWHIDE_BASICRECIPE
} from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/State/types.js';

import { produce } from 'immer';

export default (state, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      const { input, value } = action.payload;
      return {
        ...state,
        [input]: value
      };
    case SET_RECIPE:
      return produce(state, draftState => {
        draftState.recipes = action.payload;
        draftState.recipes.forEach(recipe => {
          recipe.showDetails = false;
        });
        draftState.recipes.forEach(recipe => {
          recipe.basicRecipeDetails.forEach(basicRecipe => {
            basicRecipe.showItem = false;
          });
        });
        draftState.recipes.forEach(recipe => {
          recipe.rawMaterialDetails.forEach(rawMaterial => {
            const {
              _id,
              brandName,
              name,
              type,
              baseQuantity,
              baseUnit,
              rate,
              recipeUnit,
              quantityPerUnit
            } = rawMaterial['details'];
            rawMaterial._id = _id;
            rawMaterial.brandName = brandName;
            rawMaterial.name = name;
            rawMaterial.type = type;
            rawMaterial.baseQuantity = baseQuantity;
            rawMaterial.baseUnit = baseUnit;
            rawMaterial.rate = rate;
            rawMaterial.recipeUnit = recipeUnit;
            rawMaterial.quantityInRecipePerUnit =
              rawMaterial.quantityInRecipe / recipe.unitPerBaseQuantity;
            rawMaterial.quantityInRecipe =
              rawMaterial.quantityInRecipePerUnit * recipe.unitPerBaseQuantity;
            rawMaterial.costOfRawMaterial =
              (rawMaterial.quantityInRecipe * rawMaterial.rate) /
              rawMaterial.baseQuantity;
          });
          draftState.recipes.forEach(recipe => {
            recipe.basicRecipeDetails.forEach(basicRecipe => {
              basicRecipe.perProduct = Math.round(
                Number(basicRecipe.unitInRecipe) /
                  Number(recipe.unitPerBaseQuantity)
              );
              basicRecipe.unitInRecipe = Math.round(
                Number(basicRecipe.perProduct) *
                  Number(recipe.unitPerBaseQuantity)
              );
              basicRecipe.details.forEach(detail => {
                detail.details.forEach(rawMaterial => {
                  const {
                    _id,
                    brandName,
                    name,
                    type,
                    baseQuantity,
                    baseUnit,
                    rate,
                    recipeUnit
                  } = rawMaterial['rawmaterialdetails'];
                  rawMaterial._id = _id;
                  rawMaterial.brandName = brandName;
                  rawMaterial.name = name;
                  rawMaterial.type = type;
                  rawMaterial.baseQuantity = baseQuantity;
                  rawMaterial.baseUnit = baseUnit;
                  rawMaterial.rate = rate;
                  rawMaterial.recipeUnit = recipeUnit;
                  rawMaterial.quantityInRecipe =
                    rawMaterial.quantityPerUnit * basicRecipe.unitInRecipe;
                  rawMaterial.quantityPerProduct =
                    rawMaterial.quantityInRecipe / recipe.unitPerBaseQuantity;
                  rawMaterial.quantityInRecipe =
                    rawMaterial.quantityPerProduct * recipe.unitPerBaseQuantity;
                  rawMaterial.costOfRawMaterial =
                    (rawMaterial.quantityInRecipe * rawMaterial.rate) /
                    rawMaterial.baseQuantity;
                });
              });
            });
          });
        });
      });

    case UPDATE_PRODUCTUNIT:
      const { index, unit } = action.payload;
      return produce(state, draftState => {
        draftState.quoteproducts[index].unitPerBaseQuantity = unit;
        draftState.quoteproducts[index].rawMaterialDetails.forEach(item => {
          item.quantityInRecipe = item.quantityInRecipePerUnit * unit;
          item.costOfRawMaterial =
            (item.quantityInRecipe * item.rate) / item.baseQuantity;
        });
        draftState.quoteproducts[index].basicRecipeDetails.forEach(
          basicRecipe => {
            basicRecipe.unitInRecipe = Math.round(
              Number(basicRecipe.perProduct) * Number(unit)
            );

            basicRecipe.details.forEach(detail => {
              detail.details.forEach(rawMaterial => {
                rawMaterial.quantityInRecipe =
                  rawMaterial.quantityPerUnit * basicRecipe.unitInRecipe;
                rawMaterial.quantityPerProduct =
                  rawMaterial.quantityInRecipe / unit;
                rawMaterial.quantityInRecipe =
                  rawMaterial.quantityPerProduct * unit;
                rawMaterial.costOfRawMaterial =
                  (rawMaterial.quantityInRecipe * rawMaterial.rate) /
                  rawMaterial.baseQuantity;
              });
            });
          }
        );
      });
    case CLEAR_SEARCHRESULTS: {
      return {
        ...state,
        searchResults: action.payload
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
    case UPDATE_PRODUCTINQUOTE: {
      return {
        ...state,
        quoteproducts: [...state.quoteproducts, action.payload],
        searchString: ''
      };
    }
    case CALCULATE_RECIPERMQTYCOST: {
      return produce(state, draftState => {
        draftState.quoteproducts.forEach(recipe => {
          recipe.totalRMQTY = recipe.rawMaterialDetails.reduce(
            (total, obj) => Number(obj.quantityInRecipe) + total,
            0
          );
          recipe.totalRMCOST = recipe.rawMaterialDetails.reduce(
            (total, obj) => Number(obj.costOfRawMaterial) + total,
            0
          );
        });
      });
    }
    case CALCULATE_RECIPEEACHBRRMQTYCOST:
      return produce(state, draftState => {
        draftState.quoteproducts.forEach(recipe => {
          recipe.basicRecipeDetails.forEach(basicRecipe => {
            basicRecipe.details.forEach(detail => {
              detail.totalBRRMQTY = detail.details.reduce(
                (total, obj) => Number(obj.quantityInRecipe) + total,
                0
              );
              detail.totalBRRMCOST = detail.details.reduce(
                (total, obj) => Number(obj.costOfRawMaterial) + total,
                0
              );
            });
          });
        });
      });

    case CALCULATE_RECIPETOTALBRRMQTYCOST:
      return produce(state, draftState => {
        draftState.quoteproducts.forEach(recipe => {
          recipe.basicRecipeDetails.forEach(basicRecipe => {
            basicRecipe.totalBRRMQTY = basicRecipe.details.reduce(
              (total, obj) => Number(obj.totalBRRMQTY) + total,
              0
            );
            basicRecipe.totalBRRMCOST = basicRecipe.details
              .reduce((total, obj) => Number(obj.totalBRRMCOST) + total, 0)
              .toFixed(2);
          });
        });
      });

    case CALCULATE_RECIPEFINALBRRMQTYCOST:
      return produce(state, draftState => {
        draftState.quoteproducts.forEach(recipe => {
          recipe.totalBasicRecipeRMQty = recipe.basicRecipeDetails.reduce(
            (total, obj) => Number(obj.totalBRRMQTY) + total,
            0
          );
          recipe.totalBasicRecipeRMCOST = recipe.basicRecipeDetails
            .reduce((total, obj) => Number(obj.totalBRRMCOST) + total, 0)
            .toFixed(2);
        });
      });

    case CALCULATE_QUOTEFINALQTYCOST:
      return produce(state, draftState => {
        draftState.totalQuoteQuantity = Math.round(
          Number(
            draftState.quoteproducts.reduce(
              (total, obj) => Number(obj.totalRMQTY) + total,
              0
            )
          ) +
            Number(
              draftState.quoteproducts.reduce(
                (total, obj) => Number(obj.totalBasicRecipeRMQty) + total,
                0
              )
            )
        );
        draftState.totalQuoteCost = Math.round(
          Number(
            draftState.quoteproducts.reduce(
              (total, obj) => Number(obj.totalRMCOST) + total,
              0
            )
          ) +
            Number(
              draftState.quoteproducts.reduce(
                (total, obj) => Number(obj.totalBasicRecipeRMCOST) + total,
                0
              )
            )
        );
      });

    case SHOWHIDE_PRODUCT:
      return produce(state, draftState => {
        draftState.quoteproducts[action.payload].showItem = !draftState
          .quoteproducts[action.payload].showItem;
      });

    case SHOWHIDE_BASICRECIPE:
      return produce(state, draftState => {
        draftState.quoteproducts[action.productIndex].basicRecipeDetails[
          action.basicRecipeIndex
        ].showItem = !draftState.quoteproducts[action.productIndex]
          .basicRecipeDetails[action.basicRecipeIndex].showItem;
      });
  }
};
