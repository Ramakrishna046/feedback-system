const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema({
  student: String,
  section: String,
  faculty: String,
  subject: String,
  rating: Number,
  comments: String,
  createdAt: { type: Date, default: Date.now }
});

// Enforce only one feedback per student+section+faculty+subject
feedbackSchema.index({ student: 1, section: 1, faculty: 1, subject: 1 }, { unique: true });

module.exports = mongoose.model('Feedback', feedbackSchema);
