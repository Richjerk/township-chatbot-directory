const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  businessId: mongoose.Schema.Types.ObjectId,
  status: { type: String, default: 'pending' }, // pending, accepted, delivered
  userLocation: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: [Number],
  },
  businessLocation: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: [Number],
  },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
