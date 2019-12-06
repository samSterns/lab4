const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  numberOfFins: {
    type: Number,
    required: true,
    min: 0,
    max: 50
  },
  diet: {
    type: String,
    required: true
  }
  
});

module.exports = mongoose.model('Fish', schema);
