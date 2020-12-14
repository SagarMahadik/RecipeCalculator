const express = require('express');
const recipeController = require('../controllers/recipeController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/').get(recipeController.getAllRecipies);

router.route('/').post(recipeController.createRecipe);

router.route('/:id').put(recipeController.updateRecipe);

module.exports = router;
