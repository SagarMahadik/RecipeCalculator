const mongoose = require('mongoose');

const additionalProductInformationSchema = new mongoose.Schema({
  additionalInformation: {
    type: String,
    required: [true, 'Every Additional information needs a description']
  },
  additionalInformationType: {
    type: String,
    enum: ['status', 'variant'],
    required: [
      true,
      'Every additional information should be classified in status & variant'
    ]
  },
  additionalInformationIconURL: {
    type: String,
    required: [
      true,
      'Every Additional Product Information should have an Icon Image'
    ]
  }
});

const AdditionalProductInformation = mongoose.model(
  'AdditionalProductInformation',
  additionalProductInformationSchema
);

module.exports = AdditionalProductInformation;
