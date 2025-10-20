require('dotenv').config();
const mongoose = require('mongoose');
const Faculty = require('../models/Faculty');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas!');
    insertFaculty();
  })
  .catch(err => {
    console.error('Connection error:', err);
  });

const facultyList = [
  // IT-1
  {
    name: "K. Swathi",
    section: "IT-1",
    subjects: [
      { type: "theory", name: "Machine Learning" },
      { type: "lab", name: "ML LAB" }
    ]
  },
  {
    name: "N. Shiva Kumar",
    section: "IT-1",
    subjects: [
      { type: "theory", name: "Formal Languages and Automata Theory" },
      { type: "theory", name: "Software Project Management" }
    ]
  },
  {
    name: "R. Govardhan Reddy",
    section: "IT-1",
    subjects: [
      { type: "theory", name: "Computer Networks" }
    ]
  },
  {
    name: "V. Santosh",
    section: "IT-1",
    subjects: [
      { type: "theory", name: "Enterprise Application Development" }
    ]
  },
  {
    name: "E. Rama Lakshmi",
    section: "IT-1",
    subjects: [
      { type: "theory", name: "Software Engineering" },
      { type: "lab", name: "SE LAB" }
    ]
  },
  {
    name: "A. Sirisha",
    section: "IT-1",
    subjects: [
      { type: "lab", name: "EAD LAB" }
    ]
  },
  {
    name: "R. Sai Venkat",
    section: "IT-1",
    subjects: [
      { type: "theory", name: "Cyber Security" }
    ]
  },
  {
    name: "G. Srikanth",
    section: "IT-1",
    subjects: [
      { type: "theory", name: "Competitive Coding" }
    ]
  },
  // IT-2
  {
    name: "D. Jayaram",
    section: "IT-2",
    subjects: [
      { type: "theory", name: "Machine Learning" },
      { type: "lab", name: "ML LAB" }
    ]
  },
  {
    name: "B. Harish Goud",
    section: "IT-2",
    subjects: [
      { type: "theory", name: "Computer Networks" }
    ]
  },
  {
    name: "K. Gangadhara Rao",
    section: "IT-2",
    subjects: [
      { type: "lab", name: "Enterprise Application Development Lab" }
    ]
  },
  {
    name: "S. Sandeep",
    section: "IT-2",
    subjects: [
      { type: "theory", name: "Software Engineering" },
      { type: "lab", name: "SE LAB" }
    ]
  },
  {
    name: "V. Santosh",
    section: "IT-2",
    subjects: [
      { type: "theory", name: "Enterprise Application Development" }
    ]
  },
  {
    name: "A. Sirisha",
    section: "IT-2",
    subjects: [
      { type: "lab", name: "ML LAB" }
    ]
  },
  {
    name: "Pragati Priyadarshinee",
    section: "IT-2",
    subjects: [
      { type: "lab", name: "CASE Tools Lab" }
    ]
  },
  {
    name: "Sai Venkat",
    section: "IT-2",
    subjects: [
      { type: "theory", name: "Cyber Security" }
    ]
  },
  {
    name: "G. Srikanth",
    section: "IT-2",
    subjects: [
      { type: "theory", name: "Competitive Coding" }
    ]
  },
  // IT-3
  {
    name: "B. Swathi Sowmya",
    section: "IT-3",
    subjects: [
      { type: "theory", name: "Machine Learning" },
      { type: "lab", name: "ML LAB" }
    ]
  },
  {
    name: "V. Santosh",
    section: "IT-3",
    subjects: [
      { type: "theory", name: "Enterprise Application Development" }
    ]
  },
  {
    name: "R. Govardhan Reddy",
    section: "IT-3",
    subjects: [
      { type: "theory", name: "Computer Networks" }
    ]
  },
  {
    name: "K. Gangadhara Rao",
    section: "IT-3",
    subjects: [
      { type: "lab", name: "Enterprise Application Development Lab" }
    ]
  },
  {
    name: "Pragati Priyadarshinee",
    section: "IT-3",
    subjects: [
      { type: "lab", name: "CASE Tools Lab" }
    ]
  },
  {
    name: "N. Shiva Kumar",
    section: "IT-3",
    subjects: [
      { type: "theory", name: "Software Project Management" }
    ]
  },
  {
    name: "R. Sai Venkat",
    section: "IT-3",
    subjects: [
      { type: "theory", name: "Cyber Security" }
    ]
  },
  {
    name: "G. Srikanth",
    section: "IT-3",
    subjects: [
      { type: "theory", name: "Competitive Coding" }
    ]
  }
];

function insertFaculty() {
  Faculty.insertMany(facultyList)
    .then((docs) => {
      console.log(`Faculty inserted successfully! Total: ${docs.length}`);
      mongoose.disconnect();
    })
    .catch(err => {
      console.error('Error inserting faculty:', err);
      mongoose.disconnect();
    });
}
