const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, 'category must have a name']
  },
  categoryDescription: {
    type: String,
    required: [true, 'category must have a name']
  },
  categoryImage: {
    type: String
  },
  subCategory: [
    {
      type: [String]
    }
  ],
  categoryMood: {
    type: String
  },
  conversationTags: [
    {
      type: String
    }
  ],
  testimonials: [
    {
      patronName: {
        type: String
      },
      patronTestimonial: {
        type: String
      }
    }
  ],
  majorDelicacies: [
    {
      delicacyName: {
        type: String
      }
    }
  ]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
