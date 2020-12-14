const AddOn = require('../models/addOnModel');
const catchasync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('./../utils/appError');

exports.createAddOn = factory.createOne(AddOn);

exports.getAllAddOn = factory.getAll(AddOn);

exports.getAddOnByAddOnType = factory.showAll(AddOn);
