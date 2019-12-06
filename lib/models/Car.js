const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  brand: {
    type: Number, 
    required: true,
  },
  automatic: {
    type: Boolean, 
    required: true
  }
  
});
  
  
module.exports = mongoose.model('Car', schema);
