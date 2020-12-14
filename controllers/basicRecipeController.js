const BasicRecipe = require('../models/basicRecipeModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createBasicRecipe = factory.createOne(BasicRecipe);

exports.getAllBasicRecipies = factory.getBasicRecipes(
  BasicRecipe,
  'details.rawmaterialdetails'
);

exports.updateBasicRecipe = factory.updateOne(BasicRecipe);

exports.getBasicRecipeDetails = factory.getOne(
  BasicRecipe,
  'details.rawmaterialdetails'
);
