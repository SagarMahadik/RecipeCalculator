const express = require('express');
const authController = require('../controllers/authController');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.route('/').get(categoryController.getAllCategories);
router
  .route('/:id')
  .get(categoryController.getCategory)
  .put(categoryController.updateCategory);

router.route('/').post(categoryController.createCategory);

module.exports = router;
