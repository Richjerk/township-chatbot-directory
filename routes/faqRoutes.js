const express = require('express');
const router = express.Router();
const faqs = require('../data/faq.json');

router.post('/faq', (req, res) => {
  const userQuestion = req.body.question.toLowerCase();
  const match = faqs.find(f => userQuestion.includes(f.q.toLowerCase().split(' ')[2]));
  if (match) return res.json({ answer: match.a });
  res.json({ answer: "Sorry, I didn't find that in the FAQ." });
});

module.exports = router;
