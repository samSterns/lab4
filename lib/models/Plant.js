const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  species: {
    type: String,
    required: true
  },
  name: {
    type: String, 
    required: true,
  },
  highSunlight: {
    type: Boolean, 
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 200
  }
  
});

module.exports = mongoose.model('Plant', schema);
