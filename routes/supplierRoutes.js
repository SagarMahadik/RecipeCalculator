const express = require('express');
const supplierController = require('../controllers/supplierController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    supplierController.getAllSuppliers
  );

router
  .route('/:userID')
  .get(
    authController.protect,
    authController.restrictToUser,
    supplierController.getCustomersSuppliers
  );

router
  .route('/:userID')
  .post(
    authController.protect,
    authController.restrictToUser,
    supplierController.createSupplier
  );

router.route('/:id').patch(supplierController.updateSupplier);

module.exports = router;
