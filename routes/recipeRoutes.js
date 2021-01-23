const express = require('express');
const recipeController = require('../controllers/recipeController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    recipeController.getAllRecipies
  );

router
  .route('/:userID')
  .post(
    authController.protect,
    authController.restrictToUser,
    recipeController.createRecipe
  );

router
  .route('/:userID')
  .get(
    authController.protect,
    authController.restrictToUser,
    recipeController.getAllRecipies
  );

router.route('/:id').put(recipeController.updateRecipe);

module.exports = router;
