const { default: mongoose } = require("mongoose");
const User = require("../models/User");
const WishlistItem = require("../models/WishlistItem");
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
  createWishlistItem: async (req, res) => {
    try {
      const { ticker } = req.body;
      const { user } = req;

      console.log(ticker, user);
  
      if (!user) {
        throw new Error('Authentication error');
      }

      const wishlistItem = new WishlistItem({
        ticker,
        user: new ObjectId(user)
      });

      await wishlistItem.save();

      res.json({ wishlistItem });
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  },

  getWishlistItems: async (req, res) => {
    try {
      const { user } = req;
  
      if (!user) {
        throw new Error('Authentication error');
      }

      const wishlistItems = await WishlistItem.find({ user });
      res.json({ wishlistItems });
    } catch (error) {
      console.log(error);
      res.json({error})
    }
  },

  removeWishlistItem: async (req, res) => {
    try {
      const { user } = req;
      const { ticker } = req.body;

      await WishlistItem.deleteOne({ user, ticker });
      res.json({ message: 'Success' });
    } catch (error) {
      console.log(error);
    }
  },

  checkIfItemExists: async (req, res) => {
    try {
      const { ticker } = req.body;
      const { user } = req;
      const item = await WishlistItem.findOne({ user, ticker: ticker.toUpperCase() });
      if (item) {
        res.json({exists: true});
      } else {
        res.json({exists: false});
      }
    } catch (error) {
      console.log(error);
      res.json({error: 'Sm happened'});
    }
  }
}