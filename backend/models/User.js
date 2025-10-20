const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  rollNumber: { type: String, unique: true },
  password: { type: String },
  section: { type: String, enum: ['IT-1', 'IT-2', 'IT-3'] }
});
module.exports = mongoose.model('User', userSchema);
