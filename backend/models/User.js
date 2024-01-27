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

  wishlistItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WishlistItem' }]
});

module.exports = mongoose.model('User', userSchema);