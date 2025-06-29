const faqRoutes = require('./routes/faqRoutes');
app.use('/api', faqRoutes);
const analyticsRoutes = require('./routes/analyticsRoutes');
app.use('/api', analyticsRoutes);
const authRoutes = require('./routes/auth');
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);
const sendWhatsApp = require('./utils/sendWhatsApp');
const businessRoutes = require('./routes/business');
app.use('/api/business', businessRoutes);
const Business = require('./models/Business');
app.use('/api', authRoutes);
app.use(express.json());
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
app.use(express.json());
const chatbotRoutes = require('./routes/chatbot');
app.use('/api', chatbotRoutes);

app.get('/', (req, res) => res.send('Township Directory Running'));

app.post('/api/order', async (req, res) => {
  const { userId, businessId, userLocation, businessLocation } = req.body;

  const newOrder = new Order({
    userId,
    businessId,
    userLocation,
    businessLocation,
    status: 'pending'
  });

  await newOrder.save();
  res.json({ success: true, message: 'Order placed!' });
});

// ADD THIS ROUTE BELOW YOUR OTHER ROUTES
app.post('/api/business/:id/review', async (req, res) => {
  const { userId, comment, rating } = req.body;
  const business = await Business.findById(req.params.id);
  business.reviews.push({ userId, comment, rating });
  await business.save();
  res.json({ message: "Review submitted" });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
app.listen(3000, () => console.log('Server on port 3000'));
