// business-api.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/township', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Business = mongoose.model('Business', {
  name: String,
  description: String,
  address: String,
  phone: String,
  latitude: Number,
  longitude: Number
});

app.post('/api/businesses', async (req, res) => {
  const business = new Business(req.body);
  await business.save();
  res.json({ status: '✅ Business saved' });
});

app.get('/api/businesses', async (req, res) => {
  const businesses = await Business.find();
  res.json(businesses);
});

app.listen(3002, () => {
  console.log('🏪 Business API listening on http://localhost:3002');
});
