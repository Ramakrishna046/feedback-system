const express = require('express');
const Feedback = require('../models/Feedback');
const xlsx = require('xlsx');
const PDFDocument = require('pdfkit');
const router = express.Router();

// Export all feedback to Excel
router.get('/excel', async (req, res) => {
  const feedbacks = await Feedback.find();
  const data = feedbacks.map(fb => ({
    Student: fb.student,
    Section: fb.section,
    Faculty: fb.faculty,
    Subject: fb.subject,
    Rating: fb.rating,
    Comments: fb.comments,
    Date: fb.createdAt
  }));
  const ws = xlsx.utils.json_to_sheet(data);
  const wb = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(wb, ws, "Feedback");
  const buffer = xlsx.write(wb, { bookType: "xlsx", type: "buffer" });

  res.setHeader('Content-Disposition', 'attachment; filename=feedback.xlsx');
  res.type('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.send(buffer);
});

// Export to PDF
router.get('/pdf', async (req, res) => {
  const feedbacks = await Feedback.find();
  const pdf = new PDFDocument();
  res.setHeader('Content-Disposition', 'attachment; filename=feedback.pdf');
  res.type('application/pdf');
  pdf.pipe(res);
  pdf.fontSize(22).text('Feedback Report', { align: 'center' });
  feedbacks.forEach(fb => {
    pdf.fontSize(12).text(`Student: ${fb.student} | Section: ${fb.section} | Faculty: ${fb.faculty} | Subject: ${fb.subject} | Rating: ${fb.rating} | Comments: ${fb.comments}`);
    pdf.moveDown();
  });
  pdf.end();
});

module.exports = router;
