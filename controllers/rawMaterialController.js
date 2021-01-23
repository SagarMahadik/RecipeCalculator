const RawMaterial = require('../models/rawMaterialModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createRawMaterial = factory.createOne(RawMaterial);

exports.getAllRawMaterials = factory.getAll(RawMaterial);

exports.getCustomerRawMaterials = factory.getAll(RawMaterial);

exports.getCustomerRawMaterialRate = factory.getAllWithSelectedFields(
  RawMaterial,
  '_id name rate'
);

exports.updateRawMaterial = factory.updateOne(RawMaterial);
