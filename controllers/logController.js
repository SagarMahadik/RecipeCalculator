const Log = require('../models/logsModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createLog = factory.createOne(Log);

exports.getAllLogs = factory.getAll(Log);
