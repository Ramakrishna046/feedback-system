const express = require('express');
const Faculty = require('../models/Faculty');
const router = express.Router();

// Get all faculty for section
router.get('/:section', async (req, res) => {
  const section = req.params.section;
  const faculties = await Faculty.find({ section });
  res.json(faculties);
});

module.exports = router;
