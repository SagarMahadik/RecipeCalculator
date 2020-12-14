const express = require('express');
const addOnController = require('../controllers/addOnController');
const router = express.Router();

router
  .route('/')
  .post(addOnController.createAddOn)
  .get(addOnController.getAllAddOn);
module.exports = router;

router.route('/:addonType').get(addOnController.getAddOnByAddOnType);
