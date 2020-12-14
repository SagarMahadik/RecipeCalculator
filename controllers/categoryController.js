const Category = require('../models/categoryModel');
const catchasync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('./../utils/appError');

exports.createCategory = factory.createOne(Category);

exports.getAllCategories = factory.getAll(Category);

exports.getCategory = factory.getOne(Category);

exports.updateCategory = factory.updateOne(Category);
