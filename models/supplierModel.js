const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  supplierName: {
    type: String,
    required: [true, 'Please enter the supplier name']
  },
  supplierContactPerson: {
    type: String
  },
  supplierMobileNumber: {
    type: String
  },
  supplierAddress: {
    type: String
  },
  supplierPinCode: {
    type: String
  },
  supplierGSTNumber: {
    type: String
  },
  additionalField1: {
    type: String
  },
  additionalField2: {
    type: String
  },
  additionalField3: {
    type: String
  },
  additionalField4: {
    type: String
  },
  additionalField5: {
    type: String
  }
});

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;
