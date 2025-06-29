import mongoose from 'mongoose';

const businessSchema = new mongoose.Schema({
  name: String,
  category: String,
  phone: String,
  address: String,
  description: String,
  image: String,
  geo: {
    lat: Number,
    lng: Number
  }
});

export default mongoose.model('Business', businessSchema);

