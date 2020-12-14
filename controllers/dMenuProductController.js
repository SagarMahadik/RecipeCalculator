const MenuProduct = require('../models/dMenuProductModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createdMenuProduct = factory.createOne(MenuProduct);

exports.getdMenuProductByCategory = factory.showAll(MenuProduct);

exports.getAlldMenuProducts = factory.showAllDelicacies(MenuProduct);

exports.getdMenuProductDetails = factory.getOne(
  MenuProduct,
  'productAddOnItems'
);
