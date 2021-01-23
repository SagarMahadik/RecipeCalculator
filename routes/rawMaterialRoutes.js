const express = require('express');
const rawMaterialController = require('../controllers/rawMaterialController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    rawMaterialController.getAllRawMaterials
  );

router
  .route('/:userID')
  .post(
    authController.protect,
    authController.restrictToUser,
    rawMaterialController.createRawMaterial
  );

router
  .route('/:userID')
  .get(
    authController.protect,
    authController.restrictToUser,
    rawMaterialController.getCustomerRawMaterials
  );

router
  .route('/:userID/rate')
  .get(
    authController.protect,
    authController.restrictToUser,
    rawMaterialController.getCustomerRawMaterialRate
  );

router
  .route('/:userID/:id')
  .patch(
    authController.protect,
    authController.restrictToUser,
    rawMaterialController.updateRawMaterial
  );

module.exports = router;
