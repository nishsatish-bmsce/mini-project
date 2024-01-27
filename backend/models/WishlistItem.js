const mongoose = require('mongoose');

const wishlistItemSchema = new mongoose.Schema({
  ticker: {
    type: String,
    required: true
  },

  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

wishlistItemSchema.set('timestamps', true);

module.exports = mongoose.model('WishlistItem', wishlistItemSchema);