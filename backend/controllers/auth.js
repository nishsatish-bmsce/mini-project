const jwt = require('jsonwebtoken');
const User = require("../models/User");

module.exports = {
  login: async (req, res) => {
    try {
      const { phone, pwd } = req.body;
      const validUser = await User.findOne({ phone });
      if (!validUser) {
        throw new Error('Could not find user');
      }
      if (pwd != validUser.password) {
        throw new Error('Invalid credentials');
      }

      const token = jwt.sign({ userId: validUser._id }, 'jwt1234');
      res.json({ token });
    } catch (error) {
      console.log(error);
      res.json({error});
    }
  },
  
  signup: async (req, res) => {
    try {
      const existingUser = await User.findOne({phone: req.body.phone});
      if (existingUser) {
        throw new Error('User with this number already exists')
      }

      console.log(req.body);

      const user = new User({
        phone: req.body.phone,
        password: req.body.pwd
      });

      const signedUpUser = await user.save();
      
      const token = jwt.sign({userId: signedUpUser._id}, 'jwt1234');
      res.json({ token });
    } catch (error) {
      res.json({ error });
    }
    
  }
}