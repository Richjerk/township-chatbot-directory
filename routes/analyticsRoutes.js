import WeeklyOrdersChart from './components/dashboard/WeeklyOrdersChart';

// In your Dashboard.jsx render:
<WeeklyOrdersChart data={weeklyData} />

app.get('/api/analytics/:businessId', async (req, res) => {
  const pipeline = [
    { $match: { businessId: new mongoose.Types.ObjectId(req.params.businessId) } },
    {
      $group: {
        _id: { $week: "$createdAt" },
        orders: { $sum: 1 },
        avgDistance: { $avg: "$distance" }
      }
    },
    { $sort: { "_id": -1 } }
  ];

  const stats = await Order.aggregate(pipeline);
  res.json(stats);
});
