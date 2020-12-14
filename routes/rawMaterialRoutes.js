const express = require('express');
const rawMaterialController = require('../controllers/rawMaterialController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/').get(rawMaterialController.getAllRawMaterials);

router.route('/').post(rawMaterialController.createRawMaterial);

router.route('/:id').patch(rawMaterialController.updateRawMaterial);

module.exports = router;
