const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // adjust if your model path differs

router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(401).json({ message: "User not found" });

  const isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, 'secret'); // Store secret in .env in production
  res.json({ token });
});

module.exports = router;
