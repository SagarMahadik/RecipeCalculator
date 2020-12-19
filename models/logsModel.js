const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  user: {
    type: String
  },
  step: {
    type: String
  },
  status: {
    type: String
  }
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;
