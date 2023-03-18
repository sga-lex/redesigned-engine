const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  numberOfTickets: {
    type: Number,
    default: 0
  },
  score: {
    type: Number,
    default: 0
  }
});

module.exports = UserDetails = mongoose.model('UserDetails', userSchema);
