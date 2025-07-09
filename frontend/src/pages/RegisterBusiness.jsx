// src/pages/RegisterBusiness.jsx
import { useEffect } from 'react';

export default function RegisterBusiness() {
  useEffect(() => {
    const input = document.getElementById('business-location');
    if ('geolocation' in navigator && input) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          input.value = `Lat: ${pos.coords.latitude}, Lng: ${pos.coords.longitude}`;
        },
        (err) => {
          input.placeholder = 'Location not available';
        }
      );
    }
  }, []);

  return (
    <section className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-bold mb-4">🏢 Register a Business</h2>
      <form id="business-form" className="space-y-4">
        <input type="text" name="businessName" placeholder="Business Name" required className="border p-2 rounded w-full" />
        <select name="category" id="category-dropdown" required className="border p-2 rounded w-full">
          <option value="">Select Category</option>
          {/* Fill dynamically via useEffect */}
        </select>
        <input type="text" name="address" id="business-location" placeholder="Auto location" readOnly className="border p-2 rounded w-full bg-gray-100" />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded">Register Business</button>
      </form>
    </section>
  );
}
