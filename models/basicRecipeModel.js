const mongoose = require('mongoose');

const basicRecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Basic Reccipe Must have a name']
  },
  details: [
    {
      quantityInRecipe: {
        type: Number
      },
      rawmaterialdetails: {
        type: mongoose.Schema.ObjectId,
        ref: 'RawMaterial'
      },
      quantityPerUnit: {
        type: Number
      }
    }
  ],
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
    type: Number
  },
  yieldBasicRecipe: {
    type: Number
  },
  costPerUnit: {
    type: Number
  },
  weightPerUnit: {
    type: Number
  }
});

const BasicRecipe = mongoose.model('BasicRecipe', basicRecipeSchema);

module.exports = BasicRecipe;
