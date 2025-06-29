// models/User.js (ESM version)
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  role: {
    type: String,
    enum: ['admin', 'business', 'user'],
    default: 'user'
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});

UserSchema.index({ location: '2dsphere' });

const User = mongoose.model('User', UserSchema);
export default User;
