const mongoose = require('mongoose');

const addOnSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: [true, 'Every Add on should have a name']
  },
  addOnType: {
    type: String,
    enum: ['addOn', 'flavour'],
    required: [true, 'Every addOn should have a type']
  },
  itemPrice: {
    type: Number,
    required: [true, 'Every Add on should have price'],
    maxlength: 4
  },
  itemIconURL: {
    type: String,
    required: [true, 'Every Add on should have an Icon Image']
  }
});

const AddOn = mongoose.model('AddOn', addOnSchema);

module.exports = AddOn;
