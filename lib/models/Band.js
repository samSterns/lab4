const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  playsLive: {
    type: Boolean, 
    required: true
  },
  numberOfMembers: {
    type: Number,
    required: true,
    min: 0,
    max: 200
  }
  
});

module.exports = mongoose.model('Band', schema);
