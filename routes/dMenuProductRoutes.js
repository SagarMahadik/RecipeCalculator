const express = require('express');
const dMenuProductController = require('../controllers/dMenuProductController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/').get(dMenuProductController.getAlldMenuProducts);

router
  .route('/:category')
  .get(dMenuProductController.getdMenuProductByCategory);

router.route('/details/:id').get(dMenuProductController.getdMenuProductDetails);

router.route('/').post(dMenuProductController.createdMenuProduct);

module.exports = router;
