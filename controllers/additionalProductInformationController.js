const AdditionalProductInformation = require('../models/additionalProductInformation');
const catchasync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('./../utils/appError');

exports.createAdditionalProductInformation = factory.createOne(
  AdditionalProductInformation
);

exports.getAllAdditionalProductInformation = factory.getAll(
  AdditionalProductInformation
);

exports.getItemByadditionalInformationType = factory.showAll(
  AdditionalProductInformation
);
