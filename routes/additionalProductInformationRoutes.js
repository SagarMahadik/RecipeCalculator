const express = require('express');
const additionalProductInformationController = require('../controllers/additionalProductInformationController');
const router = express.Router();

router
  .route('/')
  .post(
    additionalProductInformationController.createAdditionalProductInformation
  )
  .get(
    additionalProductInformationController.getAllAdditionalProductInformation
  );

router
  .route('/:additionalInformation')
  .get(
    additionalProductInformationController.getItemByadditionalInformationType
  );

module.exports = router;
