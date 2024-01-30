require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const verifyToken = require('./middleware/verifyToken');
const StockControllers = require('./controllers/stocks');
const AuthControllers = require('./controllers/auth');
const WishlistControllers = require('./controllers/wishlist');
const { verify } = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://nishantcs21:1234@cluster0.bg4xgj6.mongodb.net/StockHub?retryWrites=true&w=majority')
  .then(res => {
    console.log("connected");
  })
  .catch();

// STOCK PAGES
app.post('/financials', StockControllers.getAllFinancials);
app.get('/price', StockControllers.getPrice);

// AUTH
app.post('/login', AuthControllers.login);
app.post('/signup', AuthControllers.signup);
app.get('/me', verifyToken, AuthControllers.me);

// WISHLIST
app.post('/wishlist', verifyToken, WishlistControllers.createWishlistItem);
app.get('/wishlist', verifyToken, WishlistControllers.getWishlistItems);
app.delete('/wishlist', verifyToken, WishlistControllers.removeWishlistItem);
app.post('/checkExistingItem', verifyToken, WishlistControllers.checkIfItemExists);


app.listen(3000, () => {
  console.log("listening on 3k");
});