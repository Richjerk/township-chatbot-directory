import { useState } from 'react';
import axios from 'axios';

function RegisterBusiness() {
  const [formData, setFormData] = useState({
    name: '', description: '', address: '', phone: '', image: '', category: ''
  });

  const [location, setLocation] = useState({ lat: null, lng: null });

  const handleGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullData = { ...formData, location };
    await axios.post('/api/business/register', fullData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <input placeholder="Business Name" onChange={e => setFormData({ ...formData, name: e.target.value })} />
      {/* Add others like description, phone, etc. */}
      <button type="button" onClick={handleGeoLocation}>📍 Capture Location</button>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterBusiness;
