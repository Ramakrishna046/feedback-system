const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// Create feedback (only one allowed per combo)
router.post('/', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save(); // Will throw error if duplicate
    res.json({ success: true, feedback });
  } catch (err) {
    if (err.code === 11000) { // Duplicate error from MongoDB
      res.status(409).json({ success: false, error: 'You have already submitted feedback for this faculty/class type.' });
    } else {
      res.status(500).json({ success: false, error: 'Server/database error.' });
    }
  }
});

router.get('/', async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
});

module.exports = router;
