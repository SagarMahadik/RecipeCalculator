const mongoose = require('mongoose');

const rawMaterialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter the raw material']
  },
  brandName: {
    type: String,
    default: 'Piatto'
  },
  supplier: {
    type: mongoose.Schema.ObjectId,
    ref: 'Supplier'
  },
  type: {
    type: String
  },
  baseQuantity: {
    type: Number,
    required: true
  },
  baseUnit: {
    type: String,
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
  rateWOGST: {
    type: Number
  },
  quantityInRecipe: {
    type: Number,
    default: 0
  },
  costOfRawMaterial: {
    type: Number,
    default: 0
  },
  recipeUnit: {
    type: String
  },
  displayRateUnit: {
    type: String
  },
  GSTPercent: {
    type: String
  }
});

const RawMaterial = mongoose.model('RawMaterial', rawMaterialSchema);

module.exports = RawMaterial;
