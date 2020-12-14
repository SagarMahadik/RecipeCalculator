const mongoose = require('mongoose');

const menuProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'Product must have a name']
  },
  category: {
    type: String,
    enum: [
      'Cakes',
      'Gelatos',
      'Desserts',
      'Beverages',
      'Breakfast',
      'Salads',
      'Pasta',
      'Sandwiches',
      'Burgers'
    ],
    required: true
  },
  subCategory: {
    type: String
  },
  cuisine: {
    type: String
  },
  productPrice: {
    type: String,
    required: [true, 'Product must have a price']
  }
});

const MenuProduct = mongoose.model('MenuProduct', menuProductSchema);

module.exports = MenuProduct;
