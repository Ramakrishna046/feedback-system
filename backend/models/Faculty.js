const mongoose = require('mongoose');
const facultySchema = new mongoose.Schema({
  name: String,
  section: String,
  subjects: [
    {
      type: { type: String, enum: ['theory', 'lab'] },
      name: String
    }
  ]
});
module.exports = mongoose.model('Faculty', facultySchema);
