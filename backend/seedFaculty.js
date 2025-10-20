// Run with: node seedFaculty.js
require('dotenv').config();
const mongoose = require('mongoose');
const Faculty = require('./models/Faculty');

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await Faculty.deleteMany({});
    const facs = [
      { name: 'Dr. A. Kumar', section: 'IT-1', subjects: ['FLAT', 'CN'] },
      { name: 'Dr. B. Rao', section: 'IT-2', subjects: ['SE', 'ML'] },
      { name: 'Dr. C. Sinha', section: 'All', subjects: ['EAD'] },
      { name: 'Prof. SPM', section: 'IT-1', subjects: ['SPM'] },
      { name: 'Prof. Cyber', section: 'IT-2', subjects: ['Cyber Security'] }
    ];
    await Faculty.insertMany(facs);
    console.log('Faculty seeded');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
seed();
