/**
 * Note : "getAllDelicacies" to be re-factored.
 */

const Product = require('../models/productModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createProduct = factory.createOne(Product);

exports.getProductByCategory = factory.showAll(Product);

exports.getAllProducts = factory.showAllDelicacies(Product);

exports.getProductDetails = factory.getOne(Product, 'productAddOnItems');
