const express = require('express');
const router = express.Router();
const Business = require('../models/Business');

router.post('/:id/review', async (req, res) => {
  const { userId, comment, rating } = req.body;
  const business = await Business.findById(req.params.id);
  business.reviews.push({ userId, comment, rating });
  await business.save();
  res.json({ message: "Review submitted" });
});

module.exports = router;
