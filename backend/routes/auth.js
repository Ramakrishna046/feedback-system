const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Registration
router.post('/register', async (req, res) => {
  const { rollNumber, password, section } = req.body;
  if (!rollNumber || !password || !section) return res.status(400).send('All fields required');
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = new User({ rollNumber, password: hashed, section });
    await user.save();
    res.json({ success: true });
  } catch (e) {
    res.status(400).send('User exists');
  }
});

// Login
router.post('/login', async (req, res) => {
  const { rollNumber, password } = req.body;
  const user = await User.findOne({ rollNumber });
  if (!user) return res.status(404).send('User not found');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send('Invalid password');
  const token = jwt.sign({ rollNumber: user.rollNumber, section: user.section }, process.env.JWT_SECRET, { expiresIn: "1d" });
  res.json({ token, section: user.section });
});

module.exports = router;
