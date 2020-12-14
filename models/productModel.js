const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'Product must have a name']
  },
  Category: {
    type: String,
    enum: ['Cakes', 'Gelatos', 'Desserts', 'Beverages', 'Breakfast', 'Salads','Pasta', 'Sandwiches'],
    required: true
  },
  SubCategory: {
    type: String
  },
  cuisine: {
    type: String,
    required: [true, 'Every product must have cuisine']
  },
  productImageURL: {
    type: String,
    required: [true, 'Product must have an image']
  },

  productPrice: {
    type: String,
    required: [true, 'Product must have a price']
  },
  crossSellPitch: {
    type: String
  },

  productDescription: {
    type: String,
    required: [true, 'Product must have a description']
  },
  nutritionDetails: [
    {
      nutrient: {
        type: String
      },
      value: {
        type: Number
      }
    }
  ],
  additionalInformation: [
    {
      additionalInformation: {
        type: String
      },
      additionalInformationType: {
        type: String
      },
      additionalInformationIconURL: {
        type: String
      }
    }
  ],
  productAddOnItems: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'AddOn'
    }
  ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
