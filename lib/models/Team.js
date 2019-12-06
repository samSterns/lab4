const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sport: {
    type: String,
    required: true
  },
  numberOfMembers: {
    type: Number,
    required: true,
    min: 0,
    max: 200
  },
  colors: {
    type: [String],
    required: true
  }
  
});

module.exports = mongoose.model('Team', schema);
