const express = require('express');
const productController = require('../controllers/productController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/').get(productController.getAllProducts);

router.route('/:category').get(productController.getProductByCategory);

router.route('/details/:id').get(productController.getProductDetails);

router.route('/').post(productController.createProduct);

module.exports = router;
