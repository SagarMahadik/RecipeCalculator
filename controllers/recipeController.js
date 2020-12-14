const Recipe = require('../models/recipeModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

let details = 'details';

exports.createRecipe = factory.createOne(Recipe);

exports.getAllRecipies = factory.getRecipe(
  Recipe,
  { path: 'rawMaterialDetails.details' },
  { path: 'basicRecipeDetails.details' },
  {
    path: 'basicRecipeDetails.details',
    populate: { path: 'details.rawmaterialdetails', model: 'RawMaterial' }
  }
);

exports.updateRecipe = factory.updateOne(Recipe);
