const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Recipe Must have a name']
  },
  rate: {
    type: Number
  },
  brandName: {
    type: String,
    default: 'Piatto'
  },
  recipeUrl: {
    type: String
  },
  baseQuantity: {
    type: Number
  },
  baseUnit: {
    type: String
  },
  unitPerBaseQuantity: {
    type: String
  },

  rawMaterialDetails: [
    {
      quantityInRecipe: {
        type: Number
      },
      costOfRawMaterial: {
        type: Number,
        default: 0
      },
      details: {
        type: mongoose.Schema.ObjectId,
        ref: 'RawMaterial'
      }
    }
  ],
  basicRecipeDetails: [
    {
      details: [{ type: mongoose.Schema.ObjectId, ref: 'BasicRecipe' }],

      unitInRecipe: {
        type: Number
      }
    }
  ]
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
