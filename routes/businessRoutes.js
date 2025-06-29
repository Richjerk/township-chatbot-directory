import express from 'express';
import Business from '../models/Business.js';

const router = express.Router();

// Route: Get all businesses
router.get('/list', async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (error) {
    console.error("❌ Error fetching businesses:", error);
    res.status(500).json({ error: 'Failed to fetch businesses' });
  }
});

// Route: Seed test data
router.get('/seed', async (req, res) => {
  try {
    const test = new Business({
      name: 'Kasi Pizza',
      category: 'Food',
      phone: '0812345678',
      address: 'Zone 6, Sebokeng',
      description: 'Local township pizza shop',
      geo: { lat: -26.5855, lng: 27.8276 }
    });
    await test.save();
    res.send('✅ Seeded test business!');
  } catch (error) {
    console.error('❌ Error seeding business:', error);
    res.status(500).send('Error seeding business.');
  }
});

// Export after all routes are defined
export default router;


