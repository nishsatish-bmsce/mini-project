const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: {
    type: Number,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('User', userSchema);