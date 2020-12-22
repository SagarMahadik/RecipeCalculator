const Log = require('../models/logsModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createLog = factory.createLog(Log);

exports.getAllLogs = factory.getAll(Log);
