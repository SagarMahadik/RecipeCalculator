const express = require('express');
const logController = require('../controllers/logController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/').get(logController.getAllLogs);

router.route('/').post(logController.createLog);

module.exports = router;
