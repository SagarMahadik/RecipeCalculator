const express = require('express');
const basicRecipeController = require('../controllers/basicRecipeController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    basicRecipeController.getAllBasicRecipies
  );

router
  .route('/:userID')
  .post(
    authController.protect,
    authController.restrictToUser,
    basicRecipeController.createBasicRecipe
  );

router
  .route('/:userID')
  .get(
    authController.protect,
    authController.restrictToUser,
    basicRecipeController.getBasicRecipeDetails
  );

router.route('/:id').patch(basicRecipeController.updateBasicRecipe);

router.route('/:id').get(basicRecipeController.getBasicRecipeDetails);

module.exports = router;
