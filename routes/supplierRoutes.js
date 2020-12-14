const express = require('express');
const supplierController = require('../controllers/supplierController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/').get(supplierController.getAllSuppliers);

router.route('/').post(supplierController.createSupplier);

router.route('/:id').patch(supplierController.updateSupplier);

module.exports = router;
