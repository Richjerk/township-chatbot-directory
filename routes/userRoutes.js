import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send({ message: 'User registered' });
});

export default router;
