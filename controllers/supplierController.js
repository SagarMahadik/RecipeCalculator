const Supplier = require('../models/supplierModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createSupplier = factory.createOne(Supplier);

exports.getAllSuppliers = factory.getAll(Supplier);

exports.updateSupplier = factory.updateOne(Supplier);
