import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const WeeklyOrdersChart = ({ data }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-2">Weekly Orders</h3>
      <LineChart width={400} height={250} data={data}>
        <XAxis dataKey="_id" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="orders" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default WeeklyOrdersChart;
